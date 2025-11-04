'use strict';

/**
 * cuenta-bancaria service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cuenta-bancaria.cuenta-bancaria');
