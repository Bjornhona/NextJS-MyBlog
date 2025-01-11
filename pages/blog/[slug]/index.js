import PostContent from "@/components/posts/post-detail/post-content/PostContent";
import { getPostData, getPostFiles } from "@/lib/posts-util";
import Head from 'next/head';

const PostPage = ({post}) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <PostContent post={post} />
    </>
  );
}

export const getStaticProps = (context) => {
  const { slug } = context.params;
  const post = getPostData(slug);
  return {
    props: {
      post
    },
    revalidate: 600
  }
}

export const getStaticPaths = () => {
  const postFiles = getPostFiles();
  const paths = postFiles.map(file => ({ params: { slug: file.replace(/\.md$/, '') } }));
  return {
    paths,
    fallback: false,
  }
}

export default PostPage;
