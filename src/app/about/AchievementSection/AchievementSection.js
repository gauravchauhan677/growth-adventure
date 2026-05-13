// /app/about/components/AchievementSection/AchievementSection.jsx
import Image from 'next/image';
import { statsData } from '../data/statsData';
import styles from './AchievementSection.module.scss';

export default function AchievementSection() {
  return (
    <section className={styles.achievementSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.achievementGrid}>
          <div className={styles.achievementContent}>
            <span className={styles.sectionSubtitle}>OUR LEGACY</span>
            <h2>Expedition Milestones</h2>
            <p>
              We measure our success not just in summits reached, but in lives transformed through mountain experiences.
            </p>
            
            <div className={styles.milestoneStats}>
              {statsData.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.achievementMedia}>
            <div className={styles.mediaContainer}>
              <Image
                src="/images/expeditions/audens-col.jpg"
                alt="Team celebrating at summit"
                fill
                className={styles.achievementImage}
              />
              {/* <div className={styles.achievementBadge}>
                <span>Featured in</span>
                <div className={styles.publicationLogos}>
                  <Image src="/images/vasukital.jpg" alt="National Geographic" width={120} height={40} />
                  <Image src="/images/kedar.jpg" alt="Outside Magazine" width={100} height={40} />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}