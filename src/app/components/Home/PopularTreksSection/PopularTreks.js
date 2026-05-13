// components/PopularTreks/PopularTreks.js
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './popularTreks.module.scss';
import { FiMapPin, FiCalendar, FiUsers, FiStar, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import { popularTreks } from './popularTreksData';

export default function PopularTreks() {
  const router = useRouter();

  const handleViewAll = () => {
    router.push('/treks');
  };

  const handleCardClick = (slug, e) => {
    if (e.target.closest(`.${styles.viewButton}`)) {
      return;
    }
    router.push(`/treks/${slug}`);
  };

  const handleViewDetails = (slug, e) => {
    e.stopPropagation();
    router.push(`/treks/${slug}`);
  };

  return (
    <section className={styles.popularTreks} aria-labelledby="popular-treks-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id="popular-treks-heading" className={styles.sectionTitle}>
            Most Popular Treks in Uttarkashi
          </h2>
          <p className={styles.sectionSubtitle}>
            Experience the breathtaking Himalayan trails with our expertly crafted trekking adventures
          </p>
        </div>

        <div className={styles.treksGrid}>
          {popularTreks.map((trek) => (
            <article 
              key={trek.id} 
              className={`${styles.trekCard} ${trek.featured ? styles.featuredCard : ''}`}
              onClick={(e) => handleCardClick(trek.slug, e)}
              itemScope
              itemType="https://schema.org/TouristAttraction"
            >
              <meta itemProp="name" content={trek.title} />
              <meta itemProp="description" content={`${trek.duration} trek to ${trek.title} in Nepal`} />
              
              {trek.featured && (
                <div className={styles.featuredBadge} aria-label="Featured trek">
                  <FiStar className={styles.starIcon} />
                  Popular
                </div>
              )}
              
              <div className={styles.cardImage}>
                <Image
                  src={trek.image}
                  alt={`${trek.title} trek in Nepal`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.overlay}></div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle} itemProp="name">{trek.title}</h3>
                  <span className={styles.difficulty}>{trek.difficulty}</span>
                </div>
                
                <div className={styles.cardMeta}>
                  <div className={styles.metaItem}>
                    <FiCalendar className={styles.metaIcon} aria-hidden="true" />
                    <span>{trek.duration}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <FiUsers className={styles.metaIcon} aria-hidden="true" />
                    <span>{trek.groupSize}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <FiMapPin className={styles.metaIcon} aria-hidden="true" />
                    <span>Uttarakhand</span>
                  </div>
                </div>
                
                <div className={styles.highlights}>
                  <h4 className={styles.highlightsTitle}>Key Highlights:</h4>
                  <ul className={styles.highlightsList}>
                    {trek.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className={styles.highlightItem}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.cardFooter}>
                  <div className={styles.priceContainer} itemScope itemType="https://schema.org/Offer">
                    <span className={styles.priceLabel}>From</span>
                    <span className={styles.priceValue} itemProp="price">{trek.price}</span>
                    <meta itemProp="priceCurrency" content="USD" />
                  </div>
                  <button 
                    className={styles.viewButton}
                    onClick={(e) => handleViewDetails(trek.slug, e)}
                    aria-label={`View details for ${trek.title}`}
                  >
                    View Details <FiArrowRight className={styles.arrowIcon} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <button 
            className={styles.primaryButton}
            onClick={handleViewAll}
            aria-label="View all treks"
          >
            Explore All Treks
          </button>
        </div>
      </div>
    </section>
  );
}