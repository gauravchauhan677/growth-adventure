import HeroSection from './components/Home/HeroSection/Hero';
import ExpeditionSection from './components/Home/ExpeditionSection/Expedition';
import PopularTreks from './components/Home/PopularTreksSection/PopularTreks';
import ChooseUs from './components/Home/ChooseUsSection/ChooseUs';
import Cta from './components/Home/CtaSection/Cta';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExpeditionSection />
       <PopularTreks />
       <ChooseUs />
       <Cta />
    </main>
  );
}