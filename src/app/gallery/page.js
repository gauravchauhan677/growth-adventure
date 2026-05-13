'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from './gallery.module.scss';
import { FiSearch, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { galleryData } from './galleryData';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile device on component mount
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Filter images based on category and search query
  const filteredImages = galleryData.filter(image => {
    const matchesCategory = activeCategory === 'all' || image.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      image.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Lightbox navigation with useCallback
  const navigateLightbox = useCallback((direction) => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => 
        prev === 0 ? filteredImages.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex(prev => 
        prev === filteredImages.length - 1 ? 0 : prev + 1
      );
    }
  }, [filteredImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') {
          setLightboxOpen(false);
        } else if (e.key === 'ArrowLeft') {
          navigateLightbox('prev');
        } else if (e.key === 'ArrowRight') {
          navigateLightbox('next');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, navigateLightbox]);

  return (
    <>
      <Head>
        <title>Gallery | Himalayas Expedition</title>
        <meta name="description" content="Explore stunning visuals from our Himalayan adventures" />
      </Head>

      <div className={styles.galleryPage}>
        {/* Compact Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Himalayas Gallery</h1>
            <p>Discover the majestic beauty of the Himalayas</p>
          </div>
          <div className={styles.heroOverlay}></div>
          <Image 
            src="/images/dayara.jpg"
            alt="Himalayan mountains"
            fill
            className={styles.heroImage}
            priority
          />
        </section>

        {/* Gallery Controls */}
        <section className={styles.controls}>
          <div className={styles.searchBar}>
            <FiSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search photos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className={styles.clearSearch} 
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <FiX />
              </button>
            )}
          </div>

          <div className={styles.categoryFilters}>
            {['all', 'trek', 'expedition', 'nature', 'culture'].map(category => (
              <button
                key={category}
                className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className={styles.galleryGrid}>
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className={styles.galleryItem}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={image.imageUrl}
                    alt={image.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="/images/placeholder.jpg"
                  />
                </div>
                <div className={`${styles.imageOverlay} ${isMobile ? styles.alwaysVisible : ''}`}>
                  <h3>{image.title}</h3>
                  <div className={styles.tags}>
                    {image.tags.map(tag => (
                      <span key={tag} className={styles.tag}>#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              <h3>No images found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </section>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className={styles.lightbox}>
            <button 
              className={styles.closeButton}
              onClick={() => setLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              <FiX />
            </button>

            <div className={styles.lightboxContent}>
              <button 
                className={styles.navButtonPrev}
                onClick={() => navigateLightbox('prev')}
                aria-label="Previous image"
              >
                <FiChevronLeft />
              </button>

              <div className={styles.lightboxImageContainer}>
                <Image
                  src={filteredImages[currentImageIndex].imageUrl}
                  alt={filteredImages[currentImageIndex].title}
                  fill
                  className={styles.lightboxImage}
                  priority
                />
                <div className={styles.lightboxInfo}>
                  <h3>{filteredImages[currentImageIndex].title}</h3>
                  <div className={styles.tags}>
                    {filteredImages[currentImageIndex].tags.map(tag => (
                      <span key={tag} className={styles.tag}>#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                className={styles.navButtonNext}
                onClick={() => navigateLightbox('next')}
                aria-label="Next image"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;