import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaCalendarAlt, FaMountain } from 'react-icons/fa';
import styles from './expeditions.module.scss';
import { allExpeditions } from './expeditionsData';

export default function ExpeditionsPage() {
  return (
    <main className={styles.expeditionsContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>High Altitude Expeditions</h1>
          <p className={styles.heroSubtitle}>Professional guided ascents to the world&apos;s most spectacular peaks</p>
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/dayara.jpg"
            alt="Mountain expedition team climbing"
            fill
            priority
            className={styles.heroImage}
            sizes="100vw"
          />
        </div>
      </section>

      {/* Expeditions Grid */}
      <section className={styles.expeditionsGridSection}>
        <div className={styles.expeditionsGrid}>
          {allExpeditions.map((expedition) => (
            <article key={expedition.id} className={styles.expeditionCard}>
              <Link href={`/expeditions/${encodeURIComponent(expedition.slug)}`} className={styles.expeditionLink}>
                <div className={styles.expeditionImage}>
                  <Image
                    src={expedition.image}
                    alt={expedition.alt}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.difficultyBadge} data-difficulty={expedition.difficulty.toLowerCase()}>
                    {expedition.difficulty}
                  </div>
                </div>
                <div className={styles.expeditionContent}>
                  <h3 className={styles.expeditionTitle}>{expedition.title}</h3>
                  <p className={styles.shortDescription}>{expedition.shortDescription}</p>
                  <div className={styles.expeditionMeta}>
                    <div className={styles.metaItem}>
                      <FaMapMarkerAlt className={styles.metaIcon} />
                      <span>{expedition.maxAltitude}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FaCalendarAlt className={styles.metaIcon} />
                      <span>{expedition.duration}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FaMountain className={styles.metaIcon} />
                      <span>{expedition.bestSeason}</span>
                    </div>
                  </div>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>{expedition.price}</span>
                    <span className={styles.groupSize}>{expedition.groupSize}</span>
                  </div>
                  <ul className={styles.highlights}>
                    {expedition.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className={styles.highlightItem}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready for Your Next Challenge?</h2>
          <p className={styles.ctaText}>Our expedition specialists will help you prepare for high altitude success</p>
          <Link href="/contact" className={styles.ctaButton}>
            Plan Your Expedition
          </Link>
        </div>
      </section>
    </main>
  );
}