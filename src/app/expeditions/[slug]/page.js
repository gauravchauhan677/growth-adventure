import HeroSection from './components/HeroSection/HeroSection';
import OverviewSection from './components/OverviewSection/OverviewSection';
import ItinerarySection from './components/ItinerarySection/ItinerarySection';
import HighlightsSection from './components/HighlightsSection/HighlightsSection';
import RequirementsSection from './components/RequirementsSection/RequirementsSection';
import IncludedSection from './components/IncludedSection/IncludedSection';
import GallerySection from './components/GallerySection/GallerySection';
import BookingSection from './components/BookingSection/BookingSection';
import NotFound from './components/NotFound/NotFound';
import { expeditionDetails } from './expeditionDetailData';
import styles from './expeditionDetail.module.scss';

export default async function ExpeditionDetailPage({ params }) {

  const { slug } = await params;

  const expedition = expeditionDetails[slug];

  if (!expedition) {
    return <NotFound />;
  }

  return (
    <div className={styles.expeditionDetailContainer}>
      <HeroSection expedition={expedition} />

      <div className={styles.contentWrapper}>
        <OverviewSection expedition={expedition} />
        <ItinerarySection expedition={expedition} />
        <HighlightsSection expedition={expedition} />
        <RequirementsSection expedition={expedition} />
        <IncludedSection expedition={expedition} />
        <GallerySection expedition={expedition} />
        <BookingSection expedition={expedition} />
      </div>
    </div>
  );
}