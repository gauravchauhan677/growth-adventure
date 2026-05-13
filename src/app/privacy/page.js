'use client';
import Link from 'next/link';
import styles from './privacy.module.scss';

const PrivacyPage = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <main className={styles.privacyPage}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Privacy Policy</h1>
          <p>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.intro}>
            <p>
              Himalayas Expedition operates the himalayasexpedition.com website.
              This page informs you of our policies regarding the collection, use, and disclosure of personal data.
            </p>
            <p>
              We are committed to protecting your privacy and handling your data in an open and transparent manner.
            </p>
          </div>

          <section className={styles.section}>
            <h2><span>1</span> Information Collection</h2>
            <p>We collect several types of information for various purposes:</p>
            
            <div className={styles.dataTable}>
              <div className={styles.tableRow}>
                <div className={styles.tableHeader}>Data Type</div>
                <div className={styles.tableHeader}>Purpose</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}>Personal Identification</div>
                <div className={styles.tableCell}>Booking processing, communication</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}>Medical Information</div>
                <div className={styles.tableCell}>Safety during treks</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}>Payment Details</div>
                <div className={styles.tableCell}>Transaction processing</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}>Usage Data</div>
                <div className={styles.tableCell}>Website improvement</div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2><span>2</span> Data Usage</h2>
            <p>We use the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To allow participation in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis for service improvement</li>
              <li>To monitor service usage</li>
              <li>To detect and prevent technical issues</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2><span>3</span> Data Sharing</h2>
            <p>We may share your information with:</p>
            
            <div className={styles.sharingGrid}>
              <div className={styles.sharingCard}>
                <h3>Service Providers</h3>
                <p>Guides, hotels, transport for trip operations</p>
              </div>
              <div className={styles.sharingCard}>
                <h3>Legal Authorities</h3>
                <p>When required by law or for safety reasons</p>
              </div>
              <div className={styles.sharingCard}>
                <h3>Emergency Services</h3>
                <p>In case of medical or safety emergencies</p>
              </div>
            </div>
            
            <p className={styles.note}>
              We do not sell your personal data to third parties for marketing purposes.
            </p>
          </section>

          <section className={styles.section}>
            <h2><span>4</span> Data Security</h2>
            <p>
              We implement industry-standard security measures including:
            </p>
            <ul>
              <li>SSL encryption for data transmission</li>
              <li>Secure payment processing</li>
              <li>Limited access to personal data</li>
              <li>Regular security audits</li>
            </ul>
            <p>
              However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className={styles.section}>
            <h2><span>5</span> Your Rights</h2>
            <p>Under data protection laws, you have rights including:</p>
            
            <div className={styles.rightsGrid}>
              <div className={styles.rightsItem}>
                <h3>Access</h3>
                <p>Request copies of your data</p>
              </div>
              <div className={styles.rightsItem}>
                <h3>Rectification</h3>
                <p>Request correction of inaccurate data</p>
              </div>
              <div className={styles.rightsItem}>
                <h3>Erasure</h3>
                <p>Request deletion of your data</p>
              </div>
              <div className={styles.rightsItem}>
                <h3>Restriction</h3>
                <p>Request limited processing</p>
              </div>
              <div className={styles.rightsItem}>
                <h3>Objection</h3>
                <p>Object to certain processing</p>
              </div>
              <div className={styles.rightsItem}>
                <h3>Portability</h3>
                <p>Request transfer of your data</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2><span>6</span> Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our service.
            </p>
            <div className={styles.cookieTypes}>
              <div>
                <h3>Essential Cookies</h3>
                <p>Necessary for website functionality</p>
              </div>
              <div>
                <h3>Analytics Cookies</h3>
                <p>Help us improve our services</p>
              </div>
              <div>
                <h3>Preference Cookies</h3>
                <p>Remember your settings</p>
              </div>
            </div>
            <p>
              You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
            </p>
          </section>

          <div className={styles.contactBox}>
            <h3>Contact Our Data Protection Officer</h3>
            <div className={styles.contactInfo}>
              <Link href="mailto:privacy@himalayasexpedition.com">info@himalayasexpedition.com</Link>
              <p>+91-8266882595 (Mon-Fri, 10AM-5PM IST)</p>
              <address>Himalayas Expedition, Uttarkashi, Uttarakhand 249193, India</address>
            </div>
          </div>

          <div className={styles.revision}>
            <p>© {currentYear} Himalayas Expedition. All rights reserved.</p>
            <p>This policy may change periodically. Please review it regularly.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;