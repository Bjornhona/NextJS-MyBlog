import Hero from '../components/home-page/hero/Hero';
import FeaturedPosts from '../components/home-page/featured-posts/FeaturedPosts';
import { getFeaturedPosts } from '@/lib/posts-util';
import Head from 'next/head';

const HomePage = ({featuredPosts}) => {
  return (
    <>
      <Head>
        <title>Åsas Blog</title>
        <meta name="author" content="Åsa Eriksson" />
        <meta name="description" content="A blog about programming and web development." />
      </Head>
      <Hero/>
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      featuredPosts,
    }
  }
}

export default HomePage;
