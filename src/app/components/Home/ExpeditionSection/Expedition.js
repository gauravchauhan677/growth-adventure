// components/Expedition/Expedition.js
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './expedition.module.scss';
import { FiMapPin, FiCalendar, FiUsers, FiArrowRight } from 'react-icons/fi';
import { expeditions } from './expeditionData';

export default function Expedition() {
  const router = useRouter();

  const handleViewAll = () => {
    router.push('/expeditions');
  };

  const handleCardClick = (slug, e) => {
    if (e.target.closest(`.${styles.viewButton}`)) {
      return;
    }
    router.push(`/expeditions/${slug}`);
  };

  const handleViewDetails = (slug, e) => {
    e.stopPropagation();
    router.push(`/expeditions/${slug}`);
  };

  return (
    <section className={styles.expeditionSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Featured Expeditions</h2>
          <p className={styles.sectionSubtitle}>Journeys crafted for unforgettable experiences in the Himalayas</p>
        </div>

        <div className={styles.expeditionGrid}>
          {expeditions.map((expedition) => (
            <div 
              key={expedition.id} 
              className={`${styles.expeditionCard} ${expedition.featured ? styles.featuredCard : ''}`}
              onClick={(e) => handleCardClick(expedition.slug, e)}
            >
              {expedition.featured && <div className={styles.featuredBadge}>Featured</div>}
              <div className={styles.cardImage}>
                <Image 
                  src={expedition.image} 
                  alt={expedition.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={expedition.featured}
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{expedition.title}</h3>
                  <span className={styles.difficulty}>{expedition.difficulty}</span>
                </div>
                
                <div className={styles.cardMeta}>
                  <div className={styles.metaItem}>
                    <FiCalendar className={styles.metaIcon} />
                    <span>{expedition.duration}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <FiUsers className={styles.metaIcon} />
                    <span>{expedition.groupSize}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <FiMapPin className={styles.metaIcon} />
                    <span>Uttarakhand</span>
                  </div>
                </div>
                
                <div className={styles.cardFooter}>
                  <div className={styles.priceContainer}>
                    <span className={styles.priceLabel}>From</span>
                    <span className={styles.priceValue}>{expedition.price}</span>
                  </div>
                  <button 
                    className={styles.viewButton}
                    onClick={(e) => handleViewDetails(expedition.slug, e)}
                  >
                    View Details <FiArrowRight className={styles.arrowIcon} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <button 
            className={styles.primaryButton}
            onClick={handleViewAll}
          >
            Explore All Expeditions
          </button>
        </div>
      </div>
    </section>
  );
}