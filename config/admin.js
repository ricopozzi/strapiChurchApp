module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c7f1873fdc38be61d5febcac07927ed4'),
  },
});
