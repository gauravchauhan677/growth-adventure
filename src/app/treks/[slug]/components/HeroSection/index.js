import Image from 'next/image';
import styles from './HeroSection.module.scss';

export default function HeroSection({ trek }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{trek.title}</h1>
        <div className={styles.heroMeta}>
          <span className={styles.duration}>{trek.duration}</span>
          <span className={styles.difficulty} data-difficulty={trek.difficulty.toLowerCase()}>
            {trek.difficulty}
          </span>
        </div>
      </div>
      <div className={styles.heroOverlay}></div>
      <div className={styles.imageContainer}>
        <Image
          src={trek.image}
          alt={trek.title}
          fill
          priority
          className={styles.heroImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          quality={90}
          placeholder="blur"
          blurDataURL={trek.imageBlurData || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="}
          style={{
            objectPosition: trek.imagePosition || "center center"
          }}
        />
      </div>
    </section>
  );
}