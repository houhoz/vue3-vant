import * as axios from 'axios'

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>
  }
  interface IAxios<D = null> {
    code: string
    message: string
    extra: D
  }
  export interface AxiosResponse<T = any> extends IAxios<D> {}
}
