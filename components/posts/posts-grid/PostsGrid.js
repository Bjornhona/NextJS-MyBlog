import classes from './postsGrid.module.css';
import PostItem from '../post-item/PostItem';

const PostsGrid = ({posts}) => {
  return (
    <ul className={classes.grid}>
      {posts.map(post => <PostItem key={post.slug} post={post} />)}
    </ul>
  );
}

export default PostsGrid;
