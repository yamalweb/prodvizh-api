'use strict';

/**
 * My Strapi utils service.
 */

module.exports = ({ strapi }) => ({

  async deleteFilesFromEntity(ctx, entity, field) {
    console.log('1',entity)
    console.log('field',field)

    if (entity != null && entity[field] != null) {
      let params;
      for (let i = 0; i < entity[field].length; i++) {
        params = {id:  entity[field][i].id };
        console.log('2')

        await strapi.plugins['upload'].controllers['content-api'].destroy({state: ctx.state, params: params});
      }
    }
  },

  async updateFileInfo(user, fileInfo) {
    for (var i = 0; i < fileInfo.length; i++) {
      if(fileInfo[i].id && fileInfo[i].id>0) {
        await strapi.plugin('upload').service('upload').updateFileInfo(fileInfo[i].id, {alternativeText: fileInfo[i].alternativeText, caption: fileInfo[i].caption}, user);
      }
    }
  },


});
