import React from 'react';
import { 
  FaMountain,
  FaMapMarkerAlt,
  FaHiking,
  FaShieldAlt
} from 'react-icons/fa';
import { IoIosSnow } from 'react-icons/io';
import Image from 'next/image';
import styles from './Choose.module.scss';

const ChooseUs = () => {
  return (
    <section className={styles.whyChooseUs} id="why-choose-us">
      <div className={styles.backgroundLayer}></div>
      
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <span className={styles.sectionLabel}>WHY CHOOSE US</span>
          <h2 className={styles.sectionTitle}>Experience the Himalayan Difference</h2>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaMountain />
              </div>
              <div className={styles.featureText}>
                <h3>Expert Himalayan Guides</h3>
                <p>Our IFMGA-certified Sherpa guides average 15+ years of high-altitude experience</p>
              </div>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaShieldAlt />
              </div>
              <div className={styles.featureText}>
                <h3>Unmatched Safety</h3>
                <p>Satellite communication, medical-grade oxygen, and emergency protocols</p>
              </div>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.featureText}>
                <h3>Sustainable Journeys</h3>
                <p>Leave No Trace certified with 120% waste removal from all expeditions</p>
              </div>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaHiking />
              </div>
              <div className={styles.featureText}>
                <h3>Small Group Focus</h3>
                <p>Maximum 4:1 client-to-guide ratio for personalized attention</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <Image 
            src="/images/expeditions/lamkhaga.jpg" 
            alt="Professional Himalayan mountain guide" 
            fill
            className={styles.featureImage}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;