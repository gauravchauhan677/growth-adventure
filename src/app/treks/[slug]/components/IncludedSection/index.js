import styles from './IncludedSection.module.scss';

export default function IncludedSection({ trek }) {
  return (
    <section className={styles.includedSection}>
      <div className={styles.includedColumn}>
        <h3 className={styles.includedHeading}>Included</h3>
        <ul className={styles.includedList}>
          {trek.included.map((item, index) => (
            <li key={index} className={styles.includedItem}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.excludedColumn}>
        <h3 className={styles.excludedHeading}>Not Included</h3>
        <ul className={styles.excludedList}>
          {trek.notIncluded.map((item, index) => (
            <li key={index} className={styles.excludedItem}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}