// const findItem = (res, id) => {
//   return res.find(category => category.id === id)
// }
// const findParents = (res, id) => {
//   let result = []
//   result.push(id)
//   if(findItem(res,id)?.parent.data !== null){
//     const lvl2 = findItem(res, findItem(res, id).parent.id)
//     result.push(lvl2.id)
//     if(findItem(res,lvl2.id)?.parent.data !== null) {
//       const lvl1 = findItem(res, lvl2.parent.id)
//       result.push(lvl1.id)
//     }
//   }
//
//   return result.reverse()
// }
const currentRating = (ratings) => {
  return ratings.length
    ? ((ratings.reduce((previousValue, currentValue) =>
      previousValue + currentValue.attributes.value, 0) / ratings.length).toFixed(2)) : 0
}
const currentLikes = likes => likes.length
const currentReviews = reviews => reviews.length
const currentBookmarks = bookmarks => bookmarks.length

const currentVisits = visits => {
  return visits.length
}

// const addAuthorRole = async (data, userId) => {
//   if (userId) {
//     const user = await strapi.entityService.findOne(
//       'plugin::users-permissions.user',
//       userId,
//       {populate: ['role']}
//     );
//     if (!data) {
//       return null
//     }
//     // return data.map(item => ({
//     //   ...item,
//     //   authorRoleName: user.role.name
//     // }))
//
//     return user.role.name
//
//   }
// }
module.exports = {

  relationFields: async (data, itemType) => {

    const res = await strapi.entityService.findOne("plugin::menus.menu", 1, {
      populate: 'items.parent'
    })


    const roles = await strapi.entityService.findMany(
      'plugin::users-permissions.user',
      {populate: ['role']}
    );
    if (!data) {
      return null
    }
    return data.map(item => ({
      ...item,
      itemType,
      //allCategoryIds: item.attributes.category?.data ? findParents(res.items, item.attributes.category?.data.id) : [],
      ratingsCount: item.attributes.ratings ? currentRating(item.attributes.ratings.data) : 0,
      reviewsCount: item.attributes.reviews ? currentReviews(item.attributes.reviews.data) : 0,
      likesCount: item.attributes.likes ? currentLikes(item.attributes.likes.data) : 0,
      bookmarksCount: item.attributes.bookmarks ? currentBookmarks(item.attributes.bookmarks.data) : 0,
      visitsCount: item.attributes.visits ? currentVisits(item.attributes.visits.data) : 0,
      authorRole: (roles && item.attributes.author) ? roles.find(i => i.id === item.attributes.author.data.id).role.name: null
    }))
  },


  // async getAllCategoryIds(id) {
  //   const categories = this.strapi.entityService.findOne("plugin::menus.menu", 1, {
  //     populate: 'items.parent'
  //   })
  //   return findParents(categories.items, id);
  //
  // }
}
