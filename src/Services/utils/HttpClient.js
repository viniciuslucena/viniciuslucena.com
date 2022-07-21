import axios from 'axios';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await axios.get(`${this.baseURL}${path}`);
    return response.data;
  }
}

export default HttpClient;
