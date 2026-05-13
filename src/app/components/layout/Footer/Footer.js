'use client';
import {
  FaMountain,
  FaMapMarkedAlt,
  FaCalendarDay,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaFacebookF,
  FaInstagram,
  FaTripadvisor,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa';
import Link from 'next/link';
import styles from './footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>

        {/* Brand Column */}
        <div className={styles.brandColumn}>
          <div className={styles.logo}>
            <FaMountain className={styles.logoIcon} />
            <span className={styles.logoText}>Growth Adventure</span>
          </div>
          <p className={styles.tagline}>
            Crafting unforgettable Himalayan adventures since 2010.
            Sustainable tourism with certified guides.
          </p>
          <div className={styles.certifications}>
            <span>Eco-Friendly</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.linksColumn}>
          <h4 className={styles.columnTitle}>Explore</h4>
          <ul className={styles.linkList}>
            <li>
              <Link href="/treks" className={styles.link}>
                <FaMapMarkedAlt /> Trekking Packages
              </Link>
            </li>
            <li>
              <Link href="/expeditions" className={styles.link}>
                Peak Expeditions
              </Link>
            </li>
            <li>
              <Link href="/blog" className={styles.link}>
                <FaCalendarDay /> Travel Blog
              </Link>
            </li>
            <li>
              <Link href="/gallery" className={styles.link}>
                Photo Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.contactColumn}>
          <h4 className={styles.columnTitle}>Contact</h4>
          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.contactIcon} />
            <div>
              <p>+91-94107 03518</p>
              <small>Office (10AM-5PM)</small>
            </div>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <p>growthadventure.uttarkashi@gmail.com</p>
          </div>
          <div className={styles.contactItem}>
            <FaHome className={styles.contactIcon} />
            <p>Uttarkashi, Uttarakhand</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletterColumn}>
          <h4 className={styles.columnTitle}>Newsletter</h4>
          <p className={styles.newsletterText}>
            Get trekking tips and exclusive offers
          </p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Your email"
              className={styles.newsletterInput}
              required
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
          <div className={styles.socialLinks}>
            <a
              href="https://www.facebook.com/profile.php?id=100072234413841"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/growth_adventure/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            {/* <a 
              href="https://www.linkedin.com/company/himalayas-expedition/" 
              aria-label="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a> */}
            <a
              href="https://wa.me/919410703518"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.bottomContent}>
          <p>© {currentYear} Growth Adventure. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/terms" className={styles.legalLink}>Terms</Link>
            <Link href="/privacy" className={styles.legalLink}>Privacy</Link>
            <Link href="/sitemap" className={styles.legalLink}>Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;