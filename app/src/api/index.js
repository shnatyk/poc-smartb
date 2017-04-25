import axios from 'axios';

const API_URL = 'http://poc-smartb-api.getsandbox.com/';
export const fetchCampaings = (filter) => axios.get(`${API_URL}overview/${filter}`);
export const toggleStatus = (id) => axios.post(`${API_URL}campaign/${id}/toggle`, {responseType: 'json'});
