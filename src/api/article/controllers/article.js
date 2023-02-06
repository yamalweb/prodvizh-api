'use strict';

/**
 *  article controller
 */


const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({strapi}) => ({

  async find(ctx) {

    let {data, meta} = await super.find(ctx);
    //console.log(data[0].attributes.author.data.id)
    const itemType = {
      singularName: 'article',
      pluralName: 'articles',
      singularUrl: 'article',
      pluralUrl: 'articles',
    }

    data = await strapi.config.utils.relationFields(data, itemType)
    return {data, meta};
  },


  // async delete(ctx) {
  //   const user = ctx.state.user;
  //   if (!user) return ctx.badRequest(null, [{ messages: [{ id: 'No authorization header was found' }] }]);
  //   const {id} = ctx.params;
  //   const article = await strapi.entityService.findOne('api::article.article', id, {
  //     populate: ['cover.image'],
  //   });
  //   if (article) {
  //     // delete related files
  //     await strapi.service('api::utils.utils').deleteFilesFromEntity(ctx, article, 'cover.image');
  //   }
  //   const response = await super.delete(ctx);
  //
  //   return response;
  // }
  // async delete(ctx) {
  //   const {id} = ctx.params;
  //   const file = await strapi.plugins['upload'].services.upload.findOne(id);
  //   await strapi.plugins['upload'].services.upload.remove(file);
  // },
  //
  // async delete(ctx) {
  //   const {id} = ctx.params;
  //   const file = await strapi.plugins['upload'].services.upload.findOne({ id });
  //   await strapi.plugins['upload'].services.upload.remove(file);
  // },

}));
