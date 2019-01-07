import Cookie from 'js-cookie'

export default function({ $axios, redirect }) {
  $axios.onRequest(config => {
    const jwt = 'Bearer '+Cookie.get('jwt')
    if (jwt) {
      config.headers['Authorization'] = jwt
    }
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      Cookie.remove('jwt')
      redirect('/login')
    }
  })
}




