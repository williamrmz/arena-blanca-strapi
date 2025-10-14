module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // Configuración para HTTPS en producción
  url: env('PUBLIC_URL', 'https://arena-blanca-strapi.onrender.com'),
  proxy: true,
  // Configuración de cookies para HTTPS
  cookies: {
    secure: env.bool('NODE_ENV') === 'production',
    sameSite: 'none',
  },
});