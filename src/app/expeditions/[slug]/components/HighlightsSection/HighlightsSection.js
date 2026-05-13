import styles from './HighlightsSection.module.scss';

export default function HighlightsSection({ expedition }) {
  return (
    <section className={styles.highlightsSection}>
      <h2 className={styles.sectionHeading}>Expedition Highlights</h2>
      <div className={styles.highlightsGrid}>
        {expedition.highlights.map((highlight, index) => (
          <div key={index} className={styles.highlightCard}>
            <div className={styles.highlightNumber}>{index + 1}</div>
            <p className={styles.highlightText}>{highlight}</p>
          </div>
        ))}
      </div>
    </section>
  );
}