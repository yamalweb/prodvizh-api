'use strict';

/**
 *  event controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::event.event', ({strapi}) => ({

  async find(ctx) {

    let {data, meta} = await super.find(ctx);
    const itemType = {
      singularName: 'event',
      pluralName: 'events',
      singularUrl: 'event',
      pluralUrl: 'events',
    }
    data = await strapi.config.utils.relationFields(data , itemType)

    return {data, meta};
  },

  // async findOne(ctx) {
  //   let { data, meta } = await super.find(ctx);
  //   const userId = data[0].attributes.author?.data.id
  //   console.log(userId)
  //   data = await strapi.config.utils.addAuthorRole(data , userId)
  //   return { data, meta };
  // },

}));
