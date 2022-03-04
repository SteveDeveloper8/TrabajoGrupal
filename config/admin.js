module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '99be9395e44696cfa6732231856c5c46'),
  },
});
