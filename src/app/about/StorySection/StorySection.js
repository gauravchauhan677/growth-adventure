// /app/about/components/StorySection/StorySection.jsx
import Image from 'next/image';
import Link from 'next/link';
import { GiMountainRoad, GiMountainClimbing } from 'react-icons/gi';
import { FaShieldAlt, FaUsers } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { RiLeafLine } from 'react-icons/ri';
import styles from './StorySection.module.scss';

export default function StorySection() {
  return (
    <section className={styles.storySection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.sectionHeader}>
              <span className={styles.subtitle}>OUR JOURNEY</span>
              <h2 className={styles.title}>Crafting Unforgettable Mountain Experiences</h2>
              <div className={styles.divider}>
                <div className={styles.dividerLine}></div>
                <GiMountainClimbing className={styles.dividerIcon} />
                <div className={styles.dividerLine}></div>
              </div>
            </div>

            <p className={styles.introText}>
              Founded in the heart of the Himalayas, we combine decades of mountaineering expertise with 
              sustainable tourism practices to create transformative mountain adventures. Our passion for 
              the peaks is matched only by our commitment to safety and environmental stewardship.
            </p>

            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>
                  <GiMountainRoad />
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Expeditions</span>
                </div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>
                  <FaShieldAlt />
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Safety Record</span>
                </div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>
                  <FaUsers />
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>5,00+</span>
                  <span className={styles.statLabel}>Happy Climbers</span>
                </div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>
                  <RiLeafLine />
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>12</span>
                  <span className={styles.statLabel}>Eco Awards</span>
                </div>
              </div>
            </div>

            <div className={styles.ctaWrapper}>
              <Link href="/expeditions" className={styles.primaryBtn}>
                Explore Our Adventures <IoIosArrowForward />
              </Link>
              <Link href="/about" className={styles.secondaryBtn}>
                Learn Our Story
              </Link>
            </div>
          </div>

          <div className={styles.mediaContent}>
            <div className={styles.imageContainer}>
              <div className={styles.mainImageWrapper}>
                <Image
                  src="/images/about.jpeg"
                  alt="Our team in the mountains"
                  fill
                  className={styles.mainImage}
                  priority
                />
              </div>
              <div className={styles.imageBadge}>
                <span className={styles.badgeYears}>5</span>
                <span className={styles.badgeText}>Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}