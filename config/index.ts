import _ from 'lodash';
import { join } from 'path';

// 配置对象，包含视图目录、静态资源目录、端口号和内存标志
let config = {
  viewDir: join(__dirname, '..', 'views'), // 视图目录路径
  staticDir: join(__dirname, '..', 'assets'), // 静态资源目录路径
  port: 8091, // 默认端口号
  memoryFlag: false // 内存标志
};

// 开发环境配置
if (process.env.NODE_ENV == 'development') {
  const localConfig = {
    port: 8091 // 开发环境端口号
  };
  config = _.assignIn(config, localConfig); // 合并配置
}

// 生产环境配置
if (process.env.NODE_ENV == 'production') {
  const prodConfig = {
    port: 8092, // 生产环境端口号
    momoryFlag: 'memory' // 内存标志
  };
  config = _.assignIn(config, prodConfig); // 合并配置
}

export default config; // 导出配置对象