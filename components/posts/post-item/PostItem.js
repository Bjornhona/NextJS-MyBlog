import classes from './postItem.module.css';
import Link from 'next/link';
import Image from 'next/image';

const PostItem = ({post}) => {
  const {slug, title, image, createdAt, description} = post;
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
  
  return (
    <li className={classes.post}>
      <Link href={`/blog/${slug}`}>
        <div className={classes.image}>
          <Image
            src={`/images/posts/${slug}/${image}`}
            alt={'image'}
            width={300}
            height={200}
            layout={'responsive'} // fills out the surrounding container and shrink and grow together with that container.
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{description}</p>
        </div>
      </Link>
    </li>
  )
}

export default PostItem;
