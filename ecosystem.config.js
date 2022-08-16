module.exports = {
  apps: [
    {
      name: "strapi",
      script: "npm",
      args: "start"
    },
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-18-182-56-247.ap-northeast-1.compute.amazonaws.com",
      ref: "origin/main",
      repo: "git@github.com:PPKan/p-studio-backend.git",
      path: "/home/ubuntu/",
      "post-deploy":
        "npm install && NODE_ENV=production npm run build && pm2 reload ~/ecosystem.config.js",
    },
  },
};