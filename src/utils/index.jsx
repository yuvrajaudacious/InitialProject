import axios from "axios";
import Cookies from "js-cookie";
const ApiCaller = (url, method, data = {}, host) => {
  return axios({
    url: `http://localhost:8000/api/v1${url}`,
  method,
    data,
    headers: { Authorization: Cookies.get("authToken") || "" },
  });
};
export default ApiCaller;