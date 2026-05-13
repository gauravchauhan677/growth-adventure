import styles from './IncludedSection.module.scss';

export default function IncludedSection({ expedition }) {
  return (
    <section className={styles.includedSection}>
      <div className={styles.includedColumn}>
        <h3 className={styles.includedHeading}>What&apos;s Included</h3>
        <ul className={styles.includedList}>
          {expedition.included.map((item, index) => (
            <li key={index} className={styles.includedItem}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.excludedColumn}>
        <h3 className={styles.excludedHeading}>What&apos;s Not Included</h3>
        <ul className={styles.excludedList}>
          {expedition.notIncluded.map((item, index) => (
            <li key={index} className={styles.excludedItem}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}