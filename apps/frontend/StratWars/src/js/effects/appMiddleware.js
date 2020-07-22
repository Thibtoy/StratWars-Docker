import { init, setAxiosInstance } from '../store/app'
import { setModale } from '../store/app'
import axios from 'axios'

export const appMiddlewareFactory = () => store => next => action => {
  switch (true) {
  case (action.type === init.type):
    let instance = axios.create({ baseURL: "http://localhost:80" }) 

    instance.interceptors.response.use(response => response, error => {
      if (error.response.status === 403) store.dispatch(setModale({ type: 'login', title: 'Login' }))
      throw error
    })

    store.dispatch(setAxiosInstance(instance))

    action.type = ""
    break

  default:
    break
  }
  next(action)
}

export default appMiddlewareFactory()