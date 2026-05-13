'use client';
import Link from 'next/link';
import styles from './sitemap.module.scss';

const SitemapPage = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <main className={styles.sitemapPage}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Website Sitemap</h1>
          <p>Explore all sections of Himalayas Expedition</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.intro}>
            <p>
              This sitemap provides an overview of all the main sections and pages available on our website.
              Use it to navigate directly to the content you are interested in.
            </p>
          </div>

          <div className={styles.sitemapGrid}>
            <div className={styles.sitemapSection}>
              <h2><span>Main</span> Navigation</h2>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/blog">Travel Blog</Link></li>
                <li><Link href="/gallery">Photo Gallery</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className={styles.sitemapSection}>
              <h2><span>Trekking</span> Packages</h2>
              <ul>
                <li><Link href="/treks/everest-base-camp">Everest Base Camp Trek</Link></li>
                <li><Link href="/treks/annapurna-circuit">Annapurna Circuit</Link></li>
                <li><Link href="/treks/valley-of-flowers">Valley of Flowers</Link></li>
                <li><Link href="/treks/kedarkantha">Kedarkantha Trek</Link></li>
                <li><Link href="/treks/gaumukh-tapovan">Gaumukh Tapovan</Link></li>
                <li><Link href="/treks/kuari-pass">Kuari Pass Trek</Link></li>
              </ul>
            </div>

            <div className={styles.sitemapSection}>
              <h2><span>Peak</span> Expeditions</h2>
              <ul>
                <li><Link href="/expeditions/island-peak">Island Peak</Link></li>
                <li><Link href="/expeditions/mera-peak">Mera Peak</Link></li>
                <li><Link href="/expeditions/stok-kangri">Stok Kangri</Link></li>
                <li><Link href="/expeditions/bandarpunch">Bandarpunch</Link></li>
                <li><Link href="/expeditions/chaukhamba">Chaukhamba Expedition</Link></li>
              </ul>
            </div>

            <div className={styles.sitemapSection}>
              <h2><span>Travel</span> Resources</h2>
              <ul>
                <li><Link href="/faq">FAQs</Link></li>
                <li><Link href="/packing-list">Packing List</Link></li>
                <li><Link href="/altitude-sickness">Altitude Sickness Guide</Link></li>
                <li><Link href="/training">Fitness Training</Link></li>
                <li><Link href="/best-time-to-visit">Best Time to Visit</Link></li>
                <li><Link href="/permits">Permit Information</Link></li>
              </ul>
            </div>

            <div className={styles.sitemapSection}>
              <h2><span>Company</span> Information</h2>
              <ul>
                <li><Link href="/about/team">Our Team</Link></li>
                <li><Link href="/about/mission">Our Mission</Link></li>
                <li><Link href="/sustainability">Sustainability</Link></li>
                <li><Link href="/testimonials">Client Testimonials</Link></li>
                <li><Link href="/partners">Our Partners</Link></li>
              </ul>
            </div>

            <div className={styles.sitemapSection}>
              <h2><span>Legal</span> Pages</h2>
              <ul>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/sitemap">Sitemap</Link></li>
                <li><Link href="/cancellation-policy">Cancellation Policy</Link></li>
                <li><Link href="/insurance">Insurance Information</Link></li>
              </ul>
            </div>
          </div>

          <div className={styles.searchBox}>
            <h3>Can not Find What You are Looking For?</h3>
            <form className={styles.searchForm}>
              <input 
                type="text" 
                placeholder="Search our website..." 
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton}>
                Search
              </button>
            </form>
          </div>

          <div className={styles.revision}>
            <p>© {currentYear} Himalayas Expedition. All rights reserved.</p>
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SitemapPage;