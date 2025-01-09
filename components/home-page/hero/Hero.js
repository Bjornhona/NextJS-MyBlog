import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/me.jpg"
          alt="Me saying hello!"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Åsa</h1>
      <p>I blog about Web Development - especially frontend frameworks like React or React Native.</p>
    </section>
  )
}

export default Hero;
