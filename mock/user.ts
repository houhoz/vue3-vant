import Mock from 'mockjs'

interface Iresponse {
  code: 200
  message: 'success'
  data?: Record<string, unknown>[] | Record<string, unknown>
}

export default {
  'post|/api/auth/login': (): Iresponse => {
    return {
      code: 200,
      message: 'success',
      data: {
        token: Mock.mock('@guid'),
      },
    }
  },
  'get|/api/user/info': (): Iresponse => {
    return {
      code: 200,
      message: 'success',
      data: {
        name: Mock.mock('@name'),
        age: Mock.mock('@integer(18, 40)'),
      },
    }
  },
}
