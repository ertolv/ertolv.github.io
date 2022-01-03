import Post from '../Post';
import * as posts from '../../utils/posts.json';

export default function Blog() {
    return (
     <div>
         <Post title="Blog Posts" posts={posts} />
     </div>
    );
  }