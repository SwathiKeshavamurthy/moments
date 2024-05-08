import axios from "axios";

axios.defaults.baseURL = "https://drf-api-p5-76a52f692867.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();