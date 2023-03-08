import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-projeto-front-end-grupo-3-okmo.onrender.com",
  timeout: 5000,
});
