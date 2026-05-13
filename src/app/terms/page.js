'use client';
import Link from 'next/link';
import styles from './terms.module.scss';

const TermsPage = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <main className={styles.termsPage}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Terms of Service</h1>
          <p>Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <section className={styles.section}>
            <h2><span>1</span> Acceptance of Terms</h2>
            <p>
              By accessing or using the services of Himalayas Expedition, 
              you agree to be bound by these Terms of Service. These terms constitute a legally binding
              agreement between you and Himalayas Expedition regarding your use of our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2><span>2</span> Booking and Payments</h2>
            <p>
              All trekking and expedition bookings require a non-refundable deposit of 30% of the total cost. 
              Full payment must be completed at least 30 days before the departure date.
            </p>
            <ul>
              <li>Payments can be made via bank transfer, credit card, or other specified methods</li>
              <li>Prices are in INR and subject to change until full payment is received</li>
              <li>Late payments may result in cancellation of your reservation</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2><span>3</span> Cancellation Policy</h2>
            <div className={styles.policyGrid}>
              <div className={styles.policyItem}>
                <h3>60+ Days Before Departure</h3>
                <p>50% refund (excluding deposit)</p>
              </div>
              <div className={styles.policyItem}>
                <h3>30-59 Days Before Departure</h3>
                <p>25% refund (excluding deposit)</p>
              </div>
              <div className={styles.policyItem}>
                <h3>0-29 Days Before Departure</h3>
                <p>No refund</p>
              </div>
            </div>
            <p className={styles.note}>
              Note: We reserve the right to cancel trips due to unsafe conditions, with options for rescheduling or full refund.
            </p>
          </section>

          <section className={styles.section}>
            <h2><span>4</span> Participant Responsibilities</h2>
            <p>
              Participants must disclose any medical conditions and carry adequate insurance covering 
              high-altitude trekking up to 6,000 meters.
            </p>
            <ul>
              <li>Obtain necessary visas and vaccinations</li>
              <li>Comply with local laws and customs</li>
              <li>Follow guide instructions at all times</li>
              <li>Maintain adequate fitness level for chosen trek</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2><span>5</span> Limitation of Liability</h2>
            <p>
              Himalayas Expedition is not liable for personal injury, loss, or damage to property 
              resulting from acts of nature, civil unrest, or other unforeseeable circumstances.
            </p>
            <p>
              We act as agents for hotels, transport providers, and other service providers and 
              cannot be held responsible for their actions or omissions.
            </p>
          </section>

          <section className={styles.section}>
            <h2><span>6</span> Intellectual Property</h2>
            <p>
              All content on our website and marketing materials, including logos, photographs, 
              and trip descriptions, are our exclusive property and protected by copyright laws.
            </p>
            <p>
              Unauthorized use of any materials without express written permission is prohibited.
            </p>
          </section>

          <section className={styles.section}>
            <h2><span>7</span> Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. 
              Any disputes shall be subject to the exclusive jurisdiction of the courts in Uttarakhand.
            </p>
          </section>

          <div className={styles.contactBox}>
            <h3>Contact Our Legal Team</h3>
            <p>For questions regarding these Terms, please contact:</p>
            <div className={styles.contactInfo}>
              <Link href="mailto:legal@himalayasexpedition.com">info@himalayasexpedition.com</Link>
              <p>+91-8266882595 (Mon-Fri, 10AM-5PM IST)</p>
              <address>Himalayas Expedition, Uttarkashi, Uttarakhand 249193, India</address>
            </div>
          </div>

          <div className={styles.revision}>
            <p>© {currentYear} Himalayas Expedition. All rights reserved.</p>
            <p>This document was last revised on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsPage;