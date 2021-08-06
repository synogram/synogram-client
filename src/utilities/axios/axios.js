import Axios from "axios";

const axios = Axios.create();

axios.defaults.baseURL = "https://synogram.herokuapp.com/";

export default axios;
