import axios, { AxiosInstance } from 'axios';

const baseURL = process.env.API_URL || 'http://localhost:3000';

export class ApiClient {
  private defaultOptions = {
    baseURL,
  };
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create(this.defaultOptions);

    this.instance.interceptors.response.use(
      async (response) => {
        return response.data;
      },
      (error) => {
        console.log(`error`, error);
        throw new Error(error.response.data.message);
      }
    );
  }
}
