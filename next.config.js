module.exports = {
  env: {
    SENTRY_DSN: process.env.SENTRY_DSN
  },
  webpack(config, options) {
    if (!options.isServer) {
      config.resolve.alias["@sentry/node"] = "@sentry/browser";
    }
    return config;
  }
};
