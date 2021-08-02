import axios from 'axios'
import router from '../router'

const requestAxios = axios.create({
    baseURL: 'https://rent-rest-340e6-default-rtdb.firebaseio.com/'
})

requestAxios.interceptors.response.use(null, error => {
    if (error.response.status === 401) {
        router.push('/authenfication?message=auth')
    }

    return Promise.reject(error)
})

export default requestAxios
