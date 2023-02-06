'use strict';

/**
 *  bookmark controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bookmark.bookmark', ({strapi}) => ({

  // async find (ctx, next) {
  //   // destructure to get `data` and `meta` which strapi returns by default
  //   const {data, meta} = await super.find(ctx)
  //
  //   // perform any other custom action
  //   return {data, meta}
  // },
  async profile(ctx, next) {

    let {data, meta} = await super.find(ctx);
    let articles = []
    let events = []
    let newsposts = []

    data.forEach(function (i) {
      if (i.attributes.article.data) {
        articles.push({
          id: i.id,
          attributes: i.attributes.article.data.attributes,
          itemType:{
            singularName: strapi.getModel('api::article.article').info.singularName,
            pluralName: strapi.getModel('api::article.article').info.pluralName,
            pluralUrl: strapi.getModel('api::article.article').info.description,
          }

        })
      }
      if (i.attributes.event.data) {
        events.push({
          id: i.id,
          attributes: i.attributes.event.data.attributes,
          itemType: {
            singularName: strapi.getModel('api::event.event').info.singularName,
            pluralName: strapi.getModel('api::event.event').info.pluralName,
            pluralUrl: strapi.getModel('api::event.event').info.description
          }
        })
      }
      if (i.attributes.newspost.data) {
        newsposts.push({
          id: i.id,
          attributes: i.attributes.newspost.data.attributes,
          itemType: {
            singularName: strapi.getModel('api::newspost.newspost').info.singularName,
            pluralName: strapi.getModel('api::newspost.newspost').info.pluralName,
            pluralUrl: strapi.getModel('api::newspost.newspost').info.description,
          }
        })
      }
    })
    data = {
      articles,
      newsposts,
      events,
    }

    return {data, meta};
  }
}))
