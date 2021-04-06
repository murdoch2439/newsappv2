import axios from 'axios'


export default axios.create({
  baseURL: 'https://7sur7.cd/api/v1/articles'
})