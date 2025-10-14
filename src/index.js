'use strict';

module.exports = {
  /**
   * Runs before your application is initialized.
   */
  register({ strapi }) {
    // Fix para Railway/Proxies: fuerza a tratar la conexión como HTTPS
    strapi.server.use(async (ctx, next) => {
      if (ctx.req?.socket) {
        ctx.req.socket.encrypted = true;
      }
      await next();
    });
  },

  /**
   * Runs before your application gets started.
   */
  bootstrap(/*{ strapi }*/) {},
};
