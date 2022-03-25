'use strict';

/**
 * passagem service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::passagem.passagem');
