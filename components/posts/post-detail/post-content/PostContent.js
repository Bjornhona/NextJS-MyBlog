import PostHeader from "../post-header/PostHeader";
import classes from './postContent.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

const PostContent = ({post}) => {
  const {slug, title, content, image} = post;

  const customComponent = {
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
    code({className, children}) {
      const language = className.split('-')[1];
      return <SyntaxHighlighter style={atomDark} language={language}>{children}</SyntaxHighlighter>
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
