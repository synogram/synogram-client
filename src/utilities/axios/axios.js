import Axios from 'axios'

const axios = Axios.create();

axios.defaults.baseURL =  "http://localhost:5000/";

export default axios