import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
  });

export default {
    results:{
        get:(text) => axiosInstance({
            url:'/api/items?q='+text,
            method:'get'
        })
    },
    item:{
        get:(itemId) => axiosInstance({
            url:'/api/items/'+itemId,
            method:'get'
        })
    }
}
