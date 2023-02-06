const {getService} = require("@strapi/plugin-users-permissions/server/utils");


module.exports = {
  async beforeFindMany(event) {
    let { data, where, select, populate } = event.params;

    event.params.populate=[
      'article.cover',
      'article.author.avatar',
      'event.cover',
      'event.author.avatar',
      'newspost.cover',
      'newspost.author.avatar'
    ];

  },
};
