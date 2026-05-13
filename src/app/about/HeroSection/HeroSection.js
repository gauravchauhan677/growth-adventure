// /app/about/components/HeroSection/HeroSection.jsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <span className={styles.subtitle}>HIMALAYAN EXPEDITIONS</span>

          <h1>Where Passion Meets the Peaks</h1>

          <p className={styles.heroDescription}>
            <strong>Professional</strong> mountain guides delivering{" "}
            <strong>successful ascents</strong> on every expedition.
          </p>

          <div className={styles.buttonGroup}>
            <Link
              href="/expeditions"
              className={`${styles.button} ${styles.primaryButton}`}
            >
              Explore Expeditions
            </Link>

            <Link
              href="/contact"
              className={`${styles.button} ${styles.secondaryButton}`}
            >
              Meet Our Guides
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.heroOverlay}></div>

      <Image
        src="/images/treks/kyarkoti.jpg"
        alt="Panoramic view of Himalayan peaks"
        fill
        priority
        className={styles.heroImage}
        sizes="100vw"
        quality={90}
      />
    </section>
  );
}