import axios from "axios";

export const api = axios.create({
  baseURL: "https://desafio-fullstack-backend.onrender.com",
  timeout: 10000,
});
