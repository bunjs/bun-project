module.exports = {
  apps : [{
    name        : "$_projectname",
    script      : "./entry.js",
    watch: true,
    ignore_watch: ["logs","node_modules"],
    error_file: './logs/bun/bun.log.wf',
    out_file: './logs/bun/bun.log',
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
       "NODE_ENV": "production"
    }
  }]
}