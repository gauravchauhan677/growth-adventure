import { FaCalendarAlt, FaUsers } from 'react-icons/fa';
import Link from 'next/link';
import styles from './BookingSection.module.scss';

export default function BookingSection({ trek }) {
  return (
    <section className={styles.bookingSection}>
      <div className={styles.bookingCard}>
        <h2 className={styles.bookingTitle}>Ready for Your Adventure?</h2>
        <div className={styles.priceContainer}>
          <span className={styles.priceLabel}>From</span>
          <span className={styles.priceAmount}>{trek.price}</span>
          <span className={styles.pricePerPerson}>per person</span>
        </div>
        <div className={styles.bookingInfo}>
          <div className={styles.infoItem}>
            <FaCalendarAlt className={styles.infoIcon} />
            <span className={styles.infoText}>Next Departure: April 15, 2025</span>
          </div>
          <div className={styles.infoItem}>
            <FaUsers className={styles.infoIcon} />
            <span className={styles.infoText}>Group Size: {trek.groupSize}</span>
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <Link href="/contact" className={styles.bookButton}>
            Book This Trek
          </Link>
          <Link href="/treks" className={styles.secondaryButton}>
            Explore Other Treks
          </Link>
        </div>
      </div>
    </section>
  );
}