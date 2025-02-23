import { addAliases } from 'module-alias';
addAliases({
    '@root': __dirname,
    '@interfaces': `${__dirname}/interfaces`,
    '@config': `${__dirname}/config`,
    '@middlewares': `${__dirname}/middlewares`
})

import Koa from 'koa';
import config from '@config/index'
import render from 'koa-swig';
import serve from 'koa-static'
import co from 'co'
import { createContainer, Lifetime } from 'awilix'
import { loadControllers, scopePerRequest } from 'awilix-koa'
import ErrorHandler from '@middlewares/ErrorHandler'
import { configure, getLogger } from 'log4js'

// 注意，如果用aws是不能自己指定日志文件夹的
// 日志系统
configure({
    appenders: { cheese: { type: 'file', filename: `${__dirname}/logs/yd.log` } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});


const app = new Koa();
// 获取日志
const logger = getLogger('cheese');
const { viewDir, staticDir, port, memoryFlag } = config

app.context.render = co.wrap(render({
    root: viewDir,
    autoescape: true,
    cache: <'memory' | false>memoryFlag, // disable, set to false
    writeBody: false,
    ext: 'html'
})
)
// 静态资源生效节点
app.use(serve(staticDir))
// 创建ioc容器
const container = createContainer();

//  所有的可以被注入的代码都在container中
container.loadModules([`${__dirname}/services/*.ts`], {
    formatName: 'camelCase',
    resolverOptions: {
        lifetime: Lifetime.SCOPED,
    }
})

// 错误处理
ErrorHandler.error(app, logger)

// 用户请求前，都会从容器中取到注入的服务
app.use(scopePerRequest(container))
// 让所有的路由全部生效
app.use(loadControllers(`${__dirname}/routers/*.ts`))

// 监听端口号
app.listen(port, () => {
    console.log('原神启动')
})