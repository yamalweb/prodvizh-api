'use strict';

/**
 *  newspost controller
 */


const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::newspost.newspost', ({strapi}) => ({

  async find(ctx) {

    let {data, meta} = await super.find(ctx);
    const itemType = {
      singularName: 'newspost',
      pluralName: 'newsposts',
      singularUrl: 'news',
      pluralUrl: 'news',
    }
    data = await strapi.config.utils.relationFields(data, itemType)
    return {data, meta};
  },

}));
