import { GiMountaintop } from 'react-icons/gi';
import { FaCalendarAlt, FaMountain, FaUsers } from 'react-icons/fa';
import styles from './OverviewSection.module.scss';

export default function OverviewSection({ expedition }) {
  return (
    <section className={styles.overviewSection}>
      <h2 className={styles.sectionHeading}>Expedition Overview</h2>
      <p className={styles.expeditionDescription}>{expedition.description}</p>
      
      <div className={styles.keyInfo}>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}><GiMountaintop /></div>
          <div className={styles.infoContent}>
            <h3 className={styles.infoTitle}>Max Altitude</h3>
            <p className={styles.infoText}>{expedition.maxAltitude}</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}><FaCalendarAlt /></div>
          <div className={styles.infoContent}>
            <h3 className={styles.infoTitle}>Duration</h3>
            <p className={styles.infoText}>{expedition.duration}</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}><FaMountain /></div>
          <div className={styles.infoContent}>
            <h3 className={styles.infoTitle}>Difficulty</h3>
            <p className={styles.infoText}>{expedition.difficulty}</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}><FaUsers /></div>
          <div className={styles.infoContent}>
            <h3 className={styles.infoTitle}>Group Size</h3>
            <p className={styles.infoText}>{expedition.groupSize}</p>
          </div>
        </div>
      </div>
    </section>
  );
}