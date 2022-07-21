import HttpClient from "./utils/HttpClient";

class PostsService {
  constructor() {
    this.httpClient = new HttpClient('https://dev.to/api');
  }

  async listPosts() {
    return this.httpClient.get('/articles?username=viniciuslucena');
  }
}

export default new PostsService();
