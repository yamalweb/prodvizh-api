const slugify = require("slugify");

function youTubeGetID(url) {
  url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}

module.exports = {
  async beforeCreate(event) {
    const {data} = event.params;
    if (data.title && !data.slug) {
      data.slug = slugify(data.title, {lower: true});
    }
    if (event.params.data.video) {
      event.params.data.video = `https://www.youtube.com/embed/${youTubeGetID(event.params.data.video)}`
    }
  },

  async beforeUpdate(event) {
    const {data, where, select, populate} = event.params;
    if (data.title && !data.slug) {
      data.slug = slugify(data.title, {lower: true});
    }
    if (event.params.data.video) {
      event.params.data.video = `https://www.youtube.com/embed/${youTubeGetID(event.params.data.video)}`
    }
  },


};
