'use client'
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './hero.module.scss';

export default function Hero() {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if mobile device
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    
    // Video play handler with mobile fallback
    const video = videoRef.current;
    const playVideo = () => {
      if (video) {
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            // Fallback for autoplay restrictions
            video.muted = true;
            video.play();
          });
        }
      }
    };

    // Try playing immediately
    playVideo();

    // Add touchstart listener for mobile devices
    if (isMobile) {
      document.addEventListener('touchstart', playVideo, { once: true });
    }

    return () => {
      if (isMobile) {
        document.removeEventListener('touchstart', playVideo);
      }
    };
  }, [isMobile]);

  const handleViewTreks = () => {
    router.push('/treks');
  };

  const handlePlanTrip = () => {
    router.push('/contact');
  };

  return (
    <section className={styles.hero}>
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMobile}
          playsInline
          className={styles.video}
          preload="auto"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/mountain-hero.mp4" type="video/mp4" />
          <source src="/videos/mountain-hero.webm" type="video/webm" />
          Your browser does not support HTML5 video.
        </video>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Discover <span>Himalayas Expedition</span> Wonders
        </h1>
        <p className={styles.subtitle}>
        Experience the thrill of the Himalayas with expert-led expeditions. Explore, challenge, and conquer the untouched beauty of nature.
        </p>
        <div className={styles.buttonContainer}>
          <button 
            className={`${styles.button} ${styles.primaryButton}`}
            aria-label="Explore our Himalayan treks"
            onClick={handleViewTreks}
          >
            View Treks
          </button>
          <button 
            className={`${styles.button} ${styles.secondaryButton}`}
            aria-label="Contact our expedition team"
            onClick={handlePlanTrip}
          >
            Plan Your Trip
          </button>
        </div>
      </div>
    </section>
  );
}