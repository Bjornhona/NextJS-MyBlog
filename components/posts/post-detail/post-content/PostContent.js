import PostHeader from "../post-header/PostHeader";
import classes from './postContent.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const PostContent = ({post}) => {
  const {slug, title, content, image} = post;

  const customComponent = {
    // img(props) {
    //   return (
    //     <div className={classes.image}>
    //       <Image
    //         src={`/images/posts/${slug}/${props.src}`}
    //         alt={props.alt}
    //         width={600}
    //         height={300}
    //       />
    //     </div>
    //   )
    // },
    p(props) {
      const {node} = props;
      if (node.children[0].tagName === 'img') {
        const image = node.children[0].properties;
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${slug}/${image.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }
      return (<p>{props.children}</p>)
    },
    code({children}) {
      return <SyntaxHighlighter style={atomDark} language={'tsx'}>{children}</SyntaxHighlighter>
    }
  }

  return (
    <article className={classes.content}>
      <PostHeader
        title={title}
        image={`/images/posts/${slug}/${image}`}
      />
      <ReactMarkdown components={customComponent}>{content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
