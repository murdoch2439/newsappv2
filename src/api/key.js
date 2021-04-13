import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

let headers = {};


const axiosInstance = axios.create({
  baseURL: 'https://7sur7.cd/api/v1/articles',
  headers,
});


instance.interceptors.request.use(
  async (config) =>{
    const token =  await AsyncStorage.getItem("token")
    if(token){
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, (error) =>{
    return Promise.reject(error)
  }
)

export default axiosInstance