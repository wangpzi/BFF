import * as Koa from 'koa';

// 定义渲染函数类型
type RenderFunction = (
  view: string,
  options?: { [key: string]: any }
) => Promise<string>;

// 扩展 Koa.Context 接口，添加 render 方法
export interface Context extends Koa.Context {
  render: RenderFunction;
}