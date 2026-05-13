import styles from './ItinerarySection.module.scss';

export default function ItinerarySection({ expedition }) {
  return (
    <section className={styles.itinerarySection}>
      <h2 className={styles.sectionHeading}>Expedition Itinerary</h2>
      <div className={styles.itineraryTimeline}>
        {expedition.itinerary.map((day) => (
          <div key={day.day} className={styles.timelineItem}>
            <div className={styles.timelineDay}>
              <span className={styles.dayNumber}>Day {day.day}</span>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.dayTitle}>{day.title}</h3>
              <p className={styles.dayDescription}>{day.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}