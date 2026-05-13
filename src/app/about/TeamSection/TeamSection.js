// /app/about/components/TeamSection/TeamSection.jsx
import { FaUsers } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { teamData } from "../data/teamData";
import styles from "./TeamSection.module.scss";

export default function TeamSection() {
  return (
    <div className={styles.teamAngleWrapper}>
      <section className={styles.teamSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>MEET THE TEAM</span>
            <h2>Our Mountain Specialists</h2>
            <div className={styles.divider}>
              <div className={styles.dividerLine}></div>
              <FaUsers className={styles.dividerIcon} />
              <div className={styles.dividerLine}></div>
            </div>
          </div>

          <div className={styles.teamGrid}>
            {teamData.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.teamImageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={350}
                    height={400}
                    className={styles.teamImage}
                  />
                </div>
                <div className={styles.teamInfo}>
                  <h3>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p className={styles.teamBio}>{member.bio}</p>
                  <div className={styles.socialLinks}>
                    {member.socialLinks.map((link, i) => (
                      <Link
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon} {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
