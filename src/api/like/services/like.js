'use strict';

/**
 * like service
 */

// const { createCoreService } = require('@strapi/strapi').factories;

// module.exports = createCoreService('api::like.like');
    module.exports = {
      async create(data) {
        const response = await strapi.entityService.create("api::like.like", {
          data,
        });
        strapi
          .service("api::like.sendmail")
          .send(
            'welcome',
            'o.starigin@gmail.com',
            "Welcome",
            `A product has been created`
          );
        return response;
      },
    };