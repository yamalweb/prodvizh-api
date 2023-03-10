const utils = require('../../../config/utils');

module.exports = plugin => {
  const sanitizeOutput = (user) => {
    const {
      password, resetPasswordToken, confirmationToken, ...sanitizedUser
    } = user; // be careful, you need to omit other private attributes yourself
    return sanitizedUser;
  };

  plugin.controllers.user.me = async (ctx) => {
    if (!ctx.state.user) {
      return ctx.unauthorized();
    }
    const user = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      ctx.state.user.id,
      { populate: ['avatar','category'] }
    );

    ctx.body = sanitizeOutput(user);
  };

  plugin.controllers.user.find = async (ctx) => {
    const users = await strapi.entityService.findMany(
      'plugin::users-permissions.user',
      { ...ctx.params, populate: ['avatar','category','role'] }
    );

    ctx.body = users.map(user => sanitizeOutput(user));
  };

  plugin.controllers.user.findOne = async (ctx) => {
    const { id } = ctx.params;
    const user = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      id,
      { populate: ['avatar','category','role'] }
    );
    //
    // const data = await utils.getAllCategoryIds(user.category.id)
    // console.log(data)


    ctx.body = sanitizeOutput(user);
  };

  return plugin;
};
