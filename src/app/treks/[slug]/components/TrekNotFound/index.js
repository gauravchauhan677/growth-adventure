import Link from 'next/link';
import styles from './TrekNotFound.module.scss';

export default function TrekNotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFoundContent}>
        <h2 className={styles.notFoundHeading}>Trek Not Found</h2>
        <p className={styles.notFoundText}>We could not find the trek you are looking for.</p>
        <SuggestedTreks />
        <Link href="/treks" className={styles.homeLink}>
          ← Back to All Treks
        </Link>
      </div>
    </div>
  );
}

function SuggestedTreks() {
  return (
    <div className={styles.suggestedTreks}>
      <h3 className={styles.suggestedHeading}>Explore our popular treks:</h3>
      <ul className={styles.trekList}>
        {Object.values(trekDetails).map((t) => (
          <li key={t.slug} className={styles.trekListItem}>
            <Link href={`/treks/${t.slug}`} className={styles.trekLink}>{t.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}