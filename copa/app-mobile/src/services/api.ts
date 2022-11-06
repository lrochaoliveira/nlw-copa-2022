import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://26.221.184.15:3333'
});