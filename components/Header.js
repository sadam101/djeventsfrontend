import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import Image from 'next/image';
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src="/DjEvents.svg" height={70} width={70} />
          </a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events" passHref>
              <a>Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
