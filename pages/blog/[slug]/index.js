import PostContent from "@/components/posts/post-detail/post-content/PostContent";
import { getPostData, getPostFiles } from "@/lib/posts-util";

const PostPage = ({post}) => {
  return (
    <PostContent post={post} />
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

export const getStaticPaths = (context) => {
  const postFiles = getPostFiles();
  const paths = postFiles.map(file => ({ params: { slug: file.replace(/\.md$/, '') } }));
  return {
    paths,
    fallback: false,
  }
}

export default PostPage;
