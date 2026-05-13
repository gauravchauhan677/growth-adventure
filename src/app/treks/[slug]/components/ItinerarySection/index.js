import { GiPathDistance } from 'react-icons/gi';
import styles from './ItinerarySection.module.scss';

export default function ItinerarySection({ trek }) {
  return (
    <section className={styles.itinerarySection}>
      <h2 className={styles.sectionHeading}>Detailed Itinerary</h2>
      <div className={styles.itineraryTimeline}>
        {trek.itinerary.map((day) => (
          <div key={day.day} className={styles.timelineItem}>
            <div className={styles.timelineDay}>
              <span className={styles.dayNumber}>Day {day.day}</span>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.dayTitle}>{day.title}</h3>
              <p className={styles.dayDescription}>{day.description}</p>
              {day.distance && (
                <div className={styles.distance}>
                  <GiPathDistance className={styles.distanceIcon} />
                  <span className={styles.distanceText}>{day.distance}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}