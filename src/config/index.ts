import developmentConfig from './env.development'
import productionConfig from './env.production'
import stagingConfig from './env.staging'

export interface IConfig {
  env: string // 开发环境
  mock?: boolean // mock数据
  title: string // 项目title
  baseUrl?: string // 项目地址
  baseApi?: string // api请求地址
  APPID?: string // 公众号appId  一般放在服务器端
  APPSECRET?: string // 公众号appScript 一般放在服务器端
  $cdn: string // cdn公共资源路径
}

// 根据环境引入不同配置 process.env.NODE_ENV
let config: IConfig = {
  env: 'development',
  title: 'title',
  $cdn: '',
}
if (process.env.NODE_ENV === 'development') {
  config = developmentConfig
} else if (process.env.NODE_ENV === 'staging') {
  config = stagingConfig
} else {
  config = productionConfig
}
export default config
