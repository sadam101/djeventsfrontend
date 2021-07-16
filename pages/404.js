import Layout from '@/components/Layout';
import Link from 'next/link';
import styles from '@/styles/404.module.css';
import { RiErrorWarningLine } from 'react-icons/ri';
export default function NotFoundPage() {
  return (
    <Layout title="Page not found">
      <div className={styles.error}>
        <h1>
          <RiErrorWarningLine /> 404
        </h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href="/">GO BACK HOME</Link>
      </div>
    </Layout>
  );
}
