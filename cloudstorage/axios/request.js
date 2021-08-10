import axios from 'axios'
import router from '../src/router/index'

const requestAxios = axios.create({
    baseURL: 'https://cloudstorage-a6a00-default-rtdb.europe-west1.firebasedatabase.app/'
})

requestAxios.interceptors.response.use(null, error => {
    if (error.response.status === 401) {
        router.push('/authenfication?message=auth')
    }

    return Promise.reject(error)
})

export default requestAxios
