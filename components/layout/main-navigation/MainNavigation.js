import Logo from '../logo/Logo';
import Link from 'next/link';
import classes from './mainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
