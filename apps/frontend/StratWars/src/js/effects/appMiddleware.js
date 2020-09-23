import { addAuth } from '../utils/api'
import { addAxiosAuth, init, setAxiosInstance } from '../store/app'
import { setLogged } from '../store/me'
import { setModale } from '../store/app'
import axios from 'axios'

export const appMiddlewareFactory = () => store => next => action => {
  switch (true) {
  case (action.type === init.type):
    let instance = axios.create({ baseURL: "http://localhost:80" })

    instance.defaults.headers.post["Content-Type"] = `application/json`;

    instance.interceptors.response.use(response => response, error => {
      if (error.response.status === 403) store.dispatch(setModale({ type: 'login', title: 'Login' }))
      throw error
    })

    store.dispatch(setAxiosInstance(instance))
    
    instance.get('/api/authenticate', { withCredentials: true })
      .then(response => {
        if (response.data.payload.token) {
          store.dispatch(addAxiosAuth(response.data.payload.token))
          store.dispatch(setLogged(true))
        }
      })
      .catch(err => console.log(err))

    action.type = ""

    break

  default:

    break
  }

  next(action)
}

export default appMiddlewareFactory()