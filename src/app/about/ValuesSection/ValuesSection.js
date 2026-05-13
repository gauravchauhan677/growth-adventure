// /app/about/components/ValuesSection/ValuesSection.jsx
import { FaLeaf } from 'react-icons/fa';
import { valuesData } from '../data/valuesData';
import styles from './ValuesSection.module.scss';

export default function ValuesSection() {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionSubtitle}>OUR PHILOSOPHY</span>
          <h2>Core Expedition Values</h2>
          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <FaLeaf className={styles.dividerIcon} />
            <div className={styles.dividerLine}></div>
          </div>
        </div>

        <div className={styles.valuesGrid}>
          {valuesData.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>
                <div className={styles.valueIcon}>{value.icon}</div>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}