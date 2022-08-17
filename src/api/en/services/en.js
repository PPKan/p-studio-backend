'use strict';

/**
 * en service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::en.en');
