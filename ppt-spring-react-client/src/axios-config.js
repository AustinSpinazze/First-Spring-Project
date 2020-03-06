import axios from "axios";

const instance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset\u003dUTF-8"
  },
  baseURL: process.env.REACT_APP_API_URL
});

export default instance;
