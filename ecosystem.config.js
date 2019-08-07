module.exports = {
    apps: [{
        name: "$_projectname",
        script: "./entry.js",
        watch: false,
        kill_timeout: 10 * 1000,
        error_file: './logs/bun/bun.log.wf',
        out_file: './logs/bun/bun.log',
        time: true,
        env: {
            "NODE_ENV": "development",
        },
        env_production: {
            "NODE_ENV": "production"
        }
    }]
}