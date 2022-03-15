module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4227ab2b3e9cc7541e17a7ba602317d2'),
  },
});
