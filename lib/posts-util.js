import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

// postIdentifier can refer to either a post slug or a post file name.
export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const {data, content} = matter(fileContent);
  const postData = {
    slug: postSlug,
    ...data,
    content,
  }
  return postData;
}

export const getPostFiles = () => {
  return fs.readdirSync(postsDirectory);
}

export const getAllPosts = () => {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) => postA.createdAt > postB.createdAt ? -1 : 1);
  return sortedPosts;
}

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter(post => post.isFeatured);
  return featuredPosts;
}
