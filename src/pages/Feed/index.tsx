import { useState } from 'react';

import { IPost } from '@/interfaces/posts';
import services from '@/services';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Array<IPost>>([]);

  const getAllPosts = async () => {
    setPosts(await services.postsService.getPosts());
  };

  const getPost = async () => {
    const onePost = await services.postsService.getPost(1);
    console.log(onePost);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-10 text-center text-xl font-bold">
        This is a Testing Feed page
      </h1>
      <button type="button" onClick={getAllPosts}>
        Get Posts
      </button>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <div>{post.title}</div>
            <img
              src={`${import.meta.env.VITE_IMG_URL}${post.cover.url}`}
              alt={post.cover.name}
            />
          </div>
        ))}
      <button type="button" onClick={getPost}>
        Get One Post
      </button>
    </div>
  );
};

export default Feed;
