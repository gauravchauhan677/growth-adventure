// /app/about/page.js
import Head from 'next/head';
import HeroSection from './HeroSection/HeroSection';
import StorySection from './StorySection/StorySection';
import ValuesSection from './ValuesSection/ValuesSection';
import TeamSection from './TeamSection/TeamSection';
import AchievementSection from './AchievementSection/AchievementSection';
import CtaSection from './CtaSection/CtaSection';
import styles from './about.module.scss';

export default function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>About Us | Himalayan Expedition Experts Since 2012</title>
        <meta name="description" content="Professional mountain guides with 98% summit success rate. Learn about our team, values, and commitment to sustainable Himalayan expeditions." />
        <meta name="keywords" content="Himalayan expeditions, mountain guides, trekking, climbing, adventure travel" />
        <meta property="og:title" content="About Our Himalayan Expedition Team" />
        <meta property="og:description" content="Discover our story, meet our expert guides, and learn what makes our expeditions unique." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Head>

      <HeroSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <AchievementSection />
      <CtaSection />
    </div>
  );
}