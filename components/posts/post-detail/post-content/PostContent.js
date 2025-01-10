import PostHeader from "../post-header/PostHeader";
import classes from './postContent.module.css';
import ReactMarkdown from 'react-markdown';

const PostContent = ({post}) => {
  const {slug, title, description, image} = post;

  return (
    <article className={classes.content}>
      <PostHeader
        title={title}
        image={`/images/posts/${slug}/${image}`}
      />
      <ReactMarkdown>{description}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
