import Hero from '../components/home-page/hero/Hero';
import FeaturedPosts from '../components/home-page/featured-posts/FeaturedPosts';

const HomePage = () => {
  const DUMMY_POSTS = [
    {
      slug: 'getting-started-with-nextjs-1',
      title: 'Getting started with NextJS',
      image: 'getting-started-nextjs.png',
      description: 'NextJS is the React Framework for production. It makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      createdAt: '2022-02-10',
    },
    {
      slug: 'getting-started-with-nextjs-2',
      title: 'Getting started with NextJS',
      image: 'getting-started-nextjs.png',
      description: 'NextJS is the React Framework for production. It makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      createdAt: '2022-02-10',
    },
    {
      slug: 'getting-started-with-nextjs-3',
      title: 'Getting started with NextJS',
      image: 'getting-started-nextjs.png',
      description: 'NextJS is the React Framework for production. It makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      createdAt: '2022-02-10',
    },
    {
      slug: 'getting-started-with-nextjs-4',
      title: 'Getting started with NextJS',
      image: 'getting-started-nextjs.png',
      description: 'NextJS is the React Framework for production. It makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      createdAt: '2022-02-10',
    }
  ]

  return (
    <>
      <Hero/>
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
