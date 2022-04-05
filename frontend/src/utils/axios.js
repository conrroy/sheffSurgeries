
import Axios from 'axios'
import { toast } from 'react-toastify'
import { getToken, setToken } from './token'

export const http = Axios.create()

// 处理请求前配置
http.interceptors.request.use(config => {
  const token = getToken()
  if (token && config.headers) {
    config.headers.Authorization = token
  }
  return config
})

// 处理响应
http.interceptors.response.use(
  response => {
    const resData = response.data
    const token = response.headers.authorization
    if (token) {
      setToken(token)
    }
    console.log(response, 'response')

    if (response.status === 200) {
      if (resData.code === 200) {
        return resData.data
      }
      toast.warning(resData.message)
      return Promise.reject(resData)

    }
    toast.warning(resData.message)
    return Promise.reject(resData)

  },
  error => {
    if (error.response.status === 401) {
      return Promise.reject()
    }
    const msg = error.response.data || error.message
    toast.error(msg, {
      position: "top-center",
    })
    return Promise.reject()
  },
)

export class RequestApi {
  url

  constructor(url) {
    this.url = url
  }

  /**
   * 添加
   * @param data 字段内容
   * @returns
   */
  add(data) {
    return http.post(this.url, data)
  }

  /**
   * 删除
   * @param id 需要删除记录的id
   * @returns
   */
  del(id) {
    return http.delete(`${this.url}/${id}`)
  }

  /**
   * 更新
   * @param id 需要更新记录的id
   * @param data 更新的新的字段对象
   * @returns
   */
  update(id, data) {
    return http.put(`${this.url}/${id}`, data)
  }

  /**
   * 条件查询
   * @param params 查询的条件参数
   * @returns
   */
  get(params) {
    return http.get(this.url, {
      params,
    })
  }

  /**
   * 查询一个
   * @param id 记录id
   * @returns
   */
  getOne(id) {
    return http.get(`${this.url}/${id}`)
  }
}
