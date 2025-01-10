import AllPosts from '@/components/posts/all-posts/AllPosts';
import { getAllPosts } from '@/lib/posts-util';

const BlogPage = ({posts}) => {
  return <AllPosts posts={posts} />;
}

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  }
}

export default BlogPage;
