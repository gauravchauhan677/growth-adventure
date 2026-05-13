"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './GallerySection.module.scss';

export default function GallerySection({ expedition }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

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
      newIndex = (currentImageIndex - 1 + expedition.gallery.length) % expedition.gallery.length;
    } else {
      newIndex = (currentImageIndex + 1) % expedition.gallery.length;
    }
    setCurrentImageIndex(newIndex);
  };

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.sectionHeading}>Expedition Gallery</h2>
      <div className={styles.galleryGrid}>
        {expedition.gallery.map((image, index) => (
          <div 
            key={index} 
            className={styles.galleryItem}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image}
              alt={`${expedition.title} photo ${index + 1}`}
              fill
              className={styles.galleryImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {currentImageIndex !== null && (
        <div className={styles.lightbox}>
          <button 
            className={styles.closeButton}
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          
          <div className={styles.lightboxContent}>
            <Image
              src={expedition.gallery[currentImageIndex]}
              alt={`${expedition.title} photo ${currentImageIndex + 1}`}
              fill
              className={styles.lightboxImage}
              priority
            />
          </div>

          <div className={styles.navButtonsContainer}>
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
              {currentImageIndex + 1} / {expedition.gallery.length}
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
      )}
    </section>
  );
}