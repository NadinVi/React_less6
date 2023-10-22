import { JSON_PLACEHOLDER_BASE_URL } from '../../constant'
import { API } from '../API/API'

class JsonPlaceholderAPI extends API {
  constructor(url) {
    super(url)
  }

  async getPhotos({ signal }) {
    const response = await this.fetch({ path: 'photos', signal })
    //console.log('response', response);
    return response.slice(0, 30)
  }

  async getUsers({ signal }) {
    return await this.fetch({ path: 'users', signal })
  }

  async getUser({ signal, userId }) {
    return await this.fetch({ path: `users/${userId}`, signal })
  }

  async deleteUser({ signal, userId }) {
    return await this.fetch({ path: `users/${userId}`, signal, method: 'DELETE' })
  }

  async updateUser({ signal, userId, updates }) {
    return await this.fetch({ path: `users/${userId}`, signal, method: 'PATCH', body: updates })
  }

  async getComments({ signal }) {
    const responseComments = await this.fetch({ path: 'comments', signal });

    return responseComments.slice(0, 50)
  }

  async getComment({ signal, commentId }) {
    return await this.fetch({ path: `comments/${commentId}`, signal })
  }

  async deleteComment({ signal, commentId }) {
    return await this.fetch({ path: `comments/${commentId}`, signal, method: 'DELETE' })
  }

  async getPosts({ signal }) {
    return await this.fetch({ path: 'posts', signal })
  }

  async getPost({ signal, postId }) {
    return await this.fetch({ path: `posts/${postId}`, signal })
  }

  async deletePost({ signal, postId }) {
    return await this.fetch({ path: `posts/${postId}`, signal, method: 'DELETE' })
  }

  async updatePost({ signal, postId, updates }) {
    return await this.fetch({ path: `posts/${postId}`, signal, method: 'PATCH', body: updates })
  }

}

export default new JsonPlaceholderAPI(JSON_PLACEHOLDER_BASE_URL)
