import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
  });

const api = {
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

export default api; 