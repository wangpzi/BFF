import { GET, route } from 'awilix-koa'
import { Context } from '@interfaces/IKoa'


@route('/')
class IndexController {
  @GET()
  async index(ctx: Context): Promise<void> {
    const data = await ctx.render('index', {
      data: '服务端诗句'
    })
    console.log('hahha', data)

    ctx.body = data
  }
}

export default IndexController
