import axios from "axios";
import userApi from "./user";
import eventsApi from "./events";
const API_BASE_URL = "https://testproject-api-v2.strv.com";

export const UserApi = userApi(API_BASE_URL);
export const EventsApi = eventsApi(API_BASE_URL);
export const setApiKey = key => {
  axios.defaults.headers.common["APIKey"] = key;
};
export const setAuthorizationToken = token => {
  axios.defaults.headers.common["Authorization"] = token;
};
export const removeAuth = () => {
  delete axios.defaults.headers.common["Authorization"];
};

export const setupInterceptors = cb => {
  // Add a response interceptor
  axios.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      if (error.response.status === 403 || error.response.status === 401) {
        console.log("forbbiden unauthrized ");
        delete axios.defaults.headers.common["Authorization"];
        localStorage.clear();
        cb();
      }
    }
  );
};
