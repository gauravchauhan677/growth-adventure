import React from 'react';
import styles from './cta.module.scss';
import Link from 'next/link';
import { FaCompass, FaPhoneAlt } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className={styles.ctaSection}>
      {/* Video Background */}
      <div className={styles.videoContainer}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className={styles.videoBackground}
          poster="/images/himalayas-poster.jpg" // Fallback image
        >
          <source src="/videos/mountain-hero1.mp4" type="video/mp4" />
          <source src="/videos/himalayas-background.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.videoOverlay}></div>
      </div>
      
      {/* Content */}
      <div className={styles.container}>
        <h2 className={styles.heading}>Begin Your Himalayan Journey</h2>
        <p className={styles.subheading}>
          Our expert guides are ready to craft your perfect mountain adventure. 
          Whether you&apos;re seeking a challenging summit or a cultural trek, we&apos;ll make it unforgettable.
        </p>
        
        <div className={styles.ctaButtons}>
          <Link href="/expeditions" className={styles.primaryButton}>
            <FaCompass style={{ marginRight: '8px' }} />
            Explore Expeditions
          </Link>
          <Link href="/contact" className={styles.secondaryButton}>
            <FaPhoneAlt style={{ marginRight: '8px' }} />
            Speak to a Guide
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;