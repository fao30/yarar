import axios from "axios";
import { REACT_APP_URL, REACT_APP_TOKEN } from "@env";

const api = axios.create({
  baseURL: REACT_APP_URL, // Set your base URL here
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${REACT_APP_TOKEN}`,
  },
});

export default api;
