import axios from 'axios';

const instance = axios.create({
    baseURL: '',
    withCredentials: true,   //跨域请求时是否需要使用凭证,是否允许带cookie这些
    responseType: JSON,   //默认
    timeout: 5000,  //请求超时
    headers: {
        'Content-Type': 'application/json'   //现在基本采用json格式，必须发送json格式的字符串
    }
})

//  Add a request interceptor
instance.interceptors.request.use(config => {
    if(token) {
        config.headers.Authorization = token 
    }
    return config
}, err => {
    return Promise.reject(err)
})

//  Add a response interceptor
instance.interceptors.response.use(response => {
    return response
}, err => {
    if(err.response) {

    }
    return err.response.data;
})


const axios = {
    get(url, params) {
        return instance.get(url, params)
    },
    post(url, params) {
        return instance.post(url, params)
    }
}

export default axios;