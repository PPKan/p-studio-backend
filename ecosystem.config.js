module.exports = {
  apps: [
    {
      name: "strapi"
    },
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-52-196-76-228.ap-northeast-1.compute.amazonaws.com",
      key: "~/.ssh/0813-p-studio.pem",
      ref: "origin/main",
      repo: "git@github.com:PPKan/p-studio-backend.git",
      path: "/home/ubuntu/p-studio-backend",
      "post-deploy":
        "nvm use 16.14.2 && npm install && NODE_ENV=production npm run build && pm2 reload ~/ecosystem.config.js",
    },
  },
};