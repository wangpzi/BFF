import Koa from 'koa';
import { Logger } from 'log4js';
import { Context } from '@interfaces/IKoa';

class ErrorHandler {
  static error(app: Koa, logger:Logger) {
    app.use(async (ctx: Context, next: () => Promise<unknown>) => {
      try {
        await next();
      } catch (error) {
        logger.error(error);
        ctx.status = error.status || 500;
        ctx.body = '500恢复中';
      }
    });
    app.use(async (ctx: Context, next: () => Promise<unknown>) => {
      await next();
      console.log(ctx.status, 'ctx.status');
      if (404 != ctx.status) return;
      ctx.body = '404';
    });
  }
}
export default ErrorHandler;