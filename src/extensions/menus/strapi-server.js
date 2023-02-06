'use strict';

module.exports = plugin => {
  // Get current `MenuItem` attributes.
  const defaultAttrs = plugin.contentTypes[ 'menu-item' ].schema.attributes;

  // Define custom attributes for `MenuItem` the same way they would be defined
  // on any other schema.
  const customAttrs = {
    description: {
      type: 'text',
    },
    cover: {
      type: 'media',
      allowedTypes: [ 'images' ],
      multiple: false,
    },
    learnCover: {
      type: 'media',
      allowedTypes: [ 'images' ],
      multiple: false,
    },
    learnDescription: {
      type: 'text',
    },
    rentCover: {
      type: 'media',
      allowedTypes: [ 'images' ],
      multiple: false,
    },
    rentDescription: {
      type: 'text',
    },
    eventCover: {
      type: 'media',
      allowedTypes: [ 'images' ],
      multiple: false,
    },
    eventDescription: {
      type: 'text',
    },
    videoCover: {
      type: 'media',
      allowedTypes: [ 'images' ],
      multiple: false,
    },
    videoDescription: {
      type: 'text',
    },
    newsCover: {
      type: 'media',
      allowedTypes: [ 'images' ],
      multiple: false,
    },
    newsDescription: {
      type: 'text',
    },
    articleCover: {
      type: 'media',
      allowedTypes: [ 'images' ],
      multiple: false,
    },
    articleDescription: {
      type: 'text',
    },
  };

  // Extend the `MenuItem` content type with custom attributes.
  plugin.contentTypes[ 'menu-item' ].schema.attributes = {
    ...defaultAttrs,
    ...customAttrs,
  };

  return plugin;
};
