import axios from "axios";
import { baseUrl } from "../config/app";

export const courseApi = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
