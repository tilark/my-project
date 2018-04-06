import axios from 'axios';
let base = '';

export const getLingHuAssertList = params => { return axios.post(`${base}/login`, params).then(res => res.data); };