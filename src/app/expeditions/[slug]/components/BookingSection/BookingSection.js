import Link from 'next/link';
import { FaCalendarAlt, FaUsers } from 'react-icons/fa';
import styles from './BookingSection.module.scss';

export default function BookingSection({ expedition }) {
  return (
    <section className={styles.bookingSection}>
      <div className={styles.bookingCard}>
        <h2 className={styles.bookingTitle}>Ready to Take the Challenge?</h2>
        <div className={styles.priceContainer}>
          <span className={styles.priceLabel}>From</span>
          <span className={styles.priceAmount}>{expedition.price}</span>
        </div>
        <div className={styles.bookingInfo}>
          <div className={styles.infoItem}>
            <FaCalendarAlt className={styles.infoIcon} />
            <span className={styles.infoText}>Next Departure: April 30, 2025</span>
          </div>
          <div className={styles.infoItem}>
            <FaUsers className={styles.infoIcon} />
            <span className={styles.infoText}>Group Size: {expedition.groupSize}</span>
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <Link href="/contact" className={styles.bookButton}>
            Book Now
          </Link>
          <Link href="/expeditions" className={styles.secondaryButton}>
            Other Expeditions
          </Link>
        </div>
      </div>
    </section>
  );
}