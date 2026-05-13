"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './GallerySection.module.scss';

export default function GallerySection({ trek }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const lightboxRef = useRef(null);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setCurrentImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentImageIndex - 1 + trek.gallery.length) % trek.gallery.length;
    } else {
      newIndex = (currentImageIndex + 1) % trek.gallery.length;
    }
    setCurrentImageIndex(newIndex);
  };

  // Close lightbox when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (lightboxRef.current && !lightboxRef.current.contains(event.target)) {
        closeLightbox();
      }
    };

    if (currentImageIndex !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [currentImageIndex]);

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.sectionHeading}>Photo Gallery</h2>
      <div className={styles.galleryGrid}>
        {trek.gallery.map((image, index) => (
          <div 
            key={index} 
            className={styles.galleryItem}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image}
              alt={`${trek.title} photo ${index + 1}`}
              fill
              className={styles.galleryImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {currentImageIndex !== null && (
        <div className={styles.lightboxOverlay}>
          <div className={styles.lightbox} ref={lightboxRef}>
            <button 
              className={styles.closeButton}
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              &times;
            </button>
            
            <div className={styles.lightboxContent}>
              <Image
                src={trek.gallery[currentImageIndex]}
                alt={`${trek.title} photo ${currentImageIndex + 1}`}
                fill
                className={styles.lightboxImage}
                priority
              />
            </div>

            <div className={styles.navControls}>
              <button 
                className={styles.navButton}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('prev');
                }}
                aria-label="Previous image"
              >
                &#10094;
              </button>
              
              <span className={styles.imageCounter}>
                {currentImageIndex + 1} / {trek.gallery.length}
              </span>
              
              <button 
                className={styles.navButton}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('next');
                }}
                aria-label="Next image"
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}