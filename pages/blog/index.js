import AllPosts from '@/components/posts/all-posts/AllPosts';
import { getAllPosts } from '@/lib/posts-util';
import Head from 'next/head';

const BlogPage = ({posts}) => {
  return <>
    <Head>
      <title>My Blog</title>
      <meta name="description" content="A list of all programming related tutorials and posts." />
    </Head>
    <AllPosts posts={posts} />
  </>;
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
