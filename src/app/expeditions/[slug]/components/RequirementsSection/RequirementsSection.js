import { FaSnowflake } from 'react-icons/fa';
import styles from './RequirementsSection.module.scss';

export default function RequirementsSection({ expedition }) {
  return (
    <section className={styles.requirementsSection}>
      <h2 className={styles.sectionHeading}>Participation Requirements</h2>
      <ul className={styles.requirementsList}>
        {expedition.requirements.map((requirement, index) => (
          <li key={index} className={styles.requirementItem}>
            <FaSnowflake className={styles.requirementIcon} />
            <span>{requirement}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}