import { FaMapMarkerAlt, FaCalendarAlt, FaHiking, FaUsers } from 'react-icons/fa';
import styles from './OverviewSection.module.scss';

export default function OverviewSection({ trek }) {
  return (
    <section className={styles.overviewSection}>
      <h2 className={styles.sectionHeading}>Trek Overview</h2>
      <p className={styles.trekDescription}>{trek.description}</p>
      
      <div className={styles.keyInfo}>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}><FaMapMarkerAlt /></div>
          <div className={styles.infoContent}>
            <h3 className={styles.infoTitle}>Max Altitude</h3>
            <p className={styles.infoText}>{trek.maxAltitude}</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}><FaCalendarAlt /></div>
          <div className={styles.infoContent}>
            <h3 className={styles.infoTitle}>Duration</h3>
            <p className={styles.infoText}>{trek.duration}</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}><FaHiking /></div>
          <div className={styles.infoContent}>
            <h3 className={styles.infoTitle}>Difficulty</h3>
            <p className={styles.infoText}>{trek.difficulty}</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}><FaUsers /></div>
          <div className={styles.infoContent}>
            <h3 className={styles.infoTitle}>Group Size</h3>
            <p className={styles.infoText}>{trek.groupSize}</p>
          </div>
        </div>
      </div>
    </section>
  );
}