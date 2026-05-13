import Image from 'next/image';
import styles from './HeroSection.module.scss';

export default function HeroSection({ expedition }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{expedition.title}</h1>
        <div className={styles.heroMeta}>
          <span className={styles.duration}>{expedition.duration}</span>
          <span className={styles.difficulty} data-difficulty={expedition.difficulty.toLowerCase()}>
            {expedition.difficulty}
          </span>
        </div>
      </div>
      <div className={styles.heroOverlay}></div>
      <Image
        src={expedition.image}
        alt={expedition.title}
        fill
        priority
        className={styles.heroImage}
        sizes="100vw"
      />
    </section>
  );
}