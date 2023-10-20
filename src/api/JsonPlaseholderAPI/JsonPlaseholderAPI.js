
import { JSON_PLACEHOLDER_BASE_URL } from '../../constant'
import { API } from '../API/API'

class JsonPlaceholderAPI extends API {
  constructor(url) {
    super(url)
  }

  async getPhotos({ signal }) {
    const response = await this.fetch({ path: 'photos', signal })
      //console.log('response', response);
      return response.slice(0,30)
  }
}

export default new JsonPlaceholderAPI(JSON_PLACEHOLDER_BASE_URL)
