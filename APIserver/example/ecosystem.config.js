module.exports = {
  apps: [{
    name: 'api-v1',
    script: './dist/index.bundle.js',
    watch: false,
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'asas276203',
      host: '104.199.159.118',
      ref: 'origin/master',
      repo: 'ssh://git@140.134.25.63:10087/D0713083/AquaMyWife.git',
      path: '/home/asas276203',
      'pre-deploy-local': '',
      'post-deploy': 'yarn install && yarn build:prod && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
