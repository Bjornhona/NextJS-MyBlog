import classes from './postHeader.module.css';
import Image from 'next/image';

const PostHeader = ({title, image}) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={120} priority />
    </header>
  );
}

export default PostHeader;
