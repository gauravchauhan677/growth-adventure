import Link from 'next/link';
import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFoundContent}>
        <h2 className={styles.notFoundHeading}>Expedition Not Found</h2>
        <p className={styles.notFoundText}>We couldn&apos;t find the expedition you&apos;re looking for.</p>
        <Link href="/expeditions" className={styles.homeLink}>
          ← Back to All Expeditions
        </Link>
      </div>
    </div>
  );
}