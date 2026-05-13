import { getTrekData } from './trekDetailData';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import ItinerarySection from './components/ItinerarySection';
import HighlightsSection from './components/HighlightsSection';
import IncludedSection from './components/IncludedSection';
import GallerySection from './components/GallerySection';
import BookingSection from './components/BookingSection';
import TrekNotFound from './components/TrekNotFound';
import styles from './trekDetail.module.scss';

export default async function TrekDetailPage({ params }) {
  const { slug } = await params;
const trek = await getTrekData(slug);

  if (!trek) {
    return <TrekNotFound />;
  }

  return (
    <div className={styles.trekDetailContainer}>
      <HeroSection trek={trek} />
      
      <div className={styles.contentWrapper}>
        <OverviewSection trek={trek} />
        <ItinerarySection trek={trek} />
        <HighlightsSection trek={trek} />
        <IncludedSection trek={trek} />
        <GallerySection trek={trek} />
        <BookingSection trek={trek} />
      </div>
    </div>
  );
}