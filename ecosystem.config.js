module.exports = {
    apps: [{
        name: "protest",
        script: "./entry.js",
        watch: false,
        error_file: './logs/bun/bun.log.wf',
        out_file: './logs/bun/bun.log',
        env: {
            "NODE_ENV": "development",
        },
        env_production: {
            "NODE_ENV": "production"
        }
    }]
}