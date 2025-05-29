import axios from 'axios';
import { getSession } from 'next-auth/react';

const http = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(async config => {
  const session = await getSession();
  const token = session?.user.accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
})

export default http;