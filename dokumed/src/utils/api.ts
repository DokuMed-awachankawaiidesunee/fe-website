import { VITE_REST_API_URL } from "./config";
import axios from "axios";

interface ToastErrorEventInit extends EventInit {
  message: string;
}

// Create a custom event class
export class ToastErrorEvent extends Event {
  public message: string;
  
  constructor(message: string) {
    super('toast-error');
    this.message = message;
  }
}

const api = axios.create({
  baseURL: VITE_REST_API_URL || 'http://localhost:3000/', 
  withCredentials: true, 
});

api.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  } else {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

api.interceptors.response.use(
  (response) => response, 
  (error) => {
    if (error.response) {
      console.log(error.response.data);
      const errorMessage = 
        error.response.data.body.error || error.response.data.body.message || 
        `Error: ${error.response.status}`;

      window.dispatchEvent(new ToastErrorEvent(errorMessage));
    } else if (error.request) {
      window.dispatchEvent(new ToastErrorEvent("No response received from server"));
    } else {
      window.dispatchEvent(new ToastErrorEvent("Error preparing the request"));
    }
    return Promise.reject(error);
  }
);

export default api;