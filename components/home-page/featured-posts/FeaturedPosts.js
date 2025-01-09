import classes from './featuredPosts.module.css';
import PostsGrid from '../../posts/posts-grid/PostsGrid';

const FeaturedPosts = (props) => {

  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
