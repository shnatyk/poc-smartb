import axios from 'axios';

const API_URL = 'http://poc-smartb-api.getsandbox.com/overview';
export const fetchCampaings = () => axios.get(API_URL);
