// /app/about/components/CtaSection/CtaSection.jsx
import Link from 'next/link';
import styles from './CtaSection.module.scss';

export default function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <h2>Ready to Write Your Mountain Story?</h2>
        <p>Join our next expedition and experience the Himalayas with the regions most trusted guides</p>
        <div className={styles.ctaButtons}>
          <Link href="/expeditions" className={styles.primaryButton}>
            View Upcoming Treks
          </Link>
          <Link href="/contact" className={styles.secondaryButton}>
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}