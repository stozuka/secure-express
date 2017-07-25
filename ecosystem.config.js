module.exports = {
  apps : [
    {
      name      : 'Simple Vote',
      script    : './bin/www',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      },
    },
  ],
};
