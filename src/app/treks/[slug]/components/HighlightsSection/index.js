import styles from './HighlightsSection.module.scss';

export default function HighlightsSection({ trek }) {
  return (
    <section className={styles.highlightsSection}>
      <h2 className={styles.sectionHeading}>Trek Highlights</h2>
      <div className={styles.highlightsGrid}>
        {trek.highlights.map((highlight, index) => (
          <div key={index} className={styles.highlightCard}>
            <div className={styles.highlightNumber}>{index + 1}</div>
            <p className={styles.highlightText}>{highlight}</p>
          </div>
        ))}
      </div>
    </section>
  );
}