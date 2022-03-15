module.exports = ({ env }) => ({
    url: env('https://charles-cantin-backend.herokuapp.com'),
    proxy: true,
    app: {
        keys: env.array("APP_KEYS", ["l503Xyn9iia0gAIk3Th8+g==","zCVN0WBtSFy1F9HNpoD6eA==","wVJsfqYUY57ZxHh7/mULxw==","Z/U4I0PKgCmQBuv6wAfsBg=="]),
    },
  });

  //postgres://zrdoxvbsimfhre:3fcd990e72bb976ba4c5b2517d94c64c3d237f5e56a181504f195d2e8a9df525@ec2-176-34-105-15.eu-west-1.compute.amazonaws.com:5432/d8hp917jhr2ko