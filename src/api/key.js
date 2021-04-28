import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

let headers = {};


const axiosInstance = axios.create({
  baseURL: 'http://f5f0b63575b6.ngrok.io',
  headers,
});


axiosInstance.interceptors.request.use(
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