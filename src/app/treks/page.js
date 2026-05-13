import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaCalendarAlt, FaHiking } from 'react-icons/fa';
import styles from './treks.module.scss';
import { allTreks } from './treksData';

export default function TreksPage() {
  return (
    <main className={styles.treksContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Himalayas Treks</h1>
          <p className={styles.heroSubtitle}>Expertly guided adventures in the worlds highest mountains</p>
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/dayara.jpg"
            alt="Panoramic mountain view"
            fill
            priority
            className={styles.heroImage}
            sizes="100vw"
          />
        </div>
      </section>

      {/* Treks Grid */}
      <section className={styles.treksGridSection}>
        <div className={styles.treksGrid}>
          {allTreks.map((trek) => (
            <article key={trek.id} className={styles.trekCard}>
              <Link href={`/treks/${encodeURIComponent(trek.slug)}`} className={styles.trekLink}>
                <div className={styles.trekImage}>
                  <Image
                    src={trek.image}
                    alt={trek.alt}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.difficultyBadge} data-difficulty={trek.difficulty.toLowerCase()}>
                    {trek.difficulty}
                  </div>
                </div>
                <div className={styles.trekContent}>
                  <h3 className={styles.trekTitle}>{trek.title}</h3>
                  <p className={styles.shortDescription}>{trek.shortDescription}</p>
                  <div className={styles.trekMeta}>
                    <div className={styles.metaItem}>
                      <FaMapMarkerAlt className={styles.metaIcon} />
                      <span>{trek.maxAltitude}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FaCalendarAlt className={styles.metaIcon} />
                      <span>{trek.duration}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FaHiking className={styles.metaIcon} />
                      <span>{trek.bestSeason}</span>
                    </div>
                  </div>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>{trek.price}</span>
                    <span className={styles.groupSize}>{trek.groupSize}</span>
                  </div>
                  <ul className={styles.highlights}>
                    {trek.highlights.slice(0, 3).map((highlight, index) => (
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
          <h2 className={styles.ctaTitle}>Need Help Choosing Your Trek?</h2>
          <p className={styles.ctaText}>Our mountain experts will help you find the perfect adventure</p>
          <Link href="/contact" className={styles.ctaButton}>
            Get Personalized Advice
          </Link>
        </div>
      </section>
    </main>
  );
}