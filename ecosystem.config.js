module.exports = {
  apps: [
    {
      name: "BFF", // 应用程序名称
      script: "./app.ts", // 启动脚本
      instances: 1, // 实例数量
      exec_mode: "cluster", // 执行模式，使用集群模式
      interpreter: "./node_modules/.bin/ts-node", // TypeScript 解释器路径
      watch: true, // 是否监视文件变化
      autorestart: true, // 是否自动重启
      env: {
        NODE_ENV: "development", // 开发环境变量
        TS_NODE_PROJECT: "./tsconfig.json", // TypeScript 配置文件路径
      },
      env_production: {
        NODE_ENV: "production", // 生产环境变量
        TS_NODE_PROJECT: "./tsconfig.json", // TypeScript 配置文件路径
      },
      error_file: "./logs/app-error.log", // 错误日志文件路径
      out_file: "./logs/app-out.log", // 输出日志文件路径
      merge_logs: true, // 是否合并日志
      log_date_format: "YYYY-MM-DD HH:mm:ss", // 日志日期格式
    },
  ],
};
