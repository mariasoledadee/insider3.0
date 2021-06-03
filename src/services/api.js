import axios from 'axios';

export const key = 'efab5a48364fc665c5c4b28e93701217f6d2532b';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${key}`
  }
})
export default api;