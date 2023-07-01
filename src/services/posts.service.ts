import { IPost } from '@/interfaces/posts';
import { IResponse } from '@/interfaces/services';

const URL = 'http://localhost:1337/api';

const getPosts = async (): Promise<Array<IPost>> => {
  try {
    const response = await fetch(`${URL}/posts`, {
      method: 'GET',
    });
    const posts = (await response.json()) as IResponse<Array<IPost>>;
    return await Promise.resolve(posts.data);
  } catch (error) {
    console.error('There was an ERROR:\n', error);
    return await Promise.reject(error);
  }
};

const getPost = async (id: number): Promise<IPost> => {
  try {
    const response = await fetch(`${URL}/posts/${id}`, {
      method: 'GET',
    });
    const post = (await response.json()) as IPost;
    return await Promise.resolve(post);
  } catch (error) {
    console.error('There was an ERROR:\n', error);
    return await Promise.reject(error);
  }
};

export default { getPosts, getPost };
