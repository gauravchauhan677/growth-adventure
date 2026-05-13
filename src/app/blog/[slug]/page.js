import { FiArrowLeft, FiClock, FiMapPin, FiTrendingUp, FiCalendar } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import styles from './blogDetail.module.scss';
import { postDetails } from './blogDetailData';

export default function BlogDetailPage({ params }) {
  const post = postDetails[params.slug];
  
  if (!post) {
    return <div className={styles.notFound}>Post not found</div>;
  }

  // Helper function to render formatted text with bold markers
  const renderFormattedText = (text) => {
    if (Array.isArray(text)) {
      return text.map((line, lineIndex) => {
        if (line === '') {
          return <br key={lineIndex} />;
        }
        if (line.startsWith('- ')) {
          return (
            <span key={lineIndex}>
              <br />• {renderBoldText(line.substring(2))}
            </span>
          );
        }
        return (
          <span key={lineIndex}>
            {renderBoldText(line)}
            <br />
          </span>
        );
      });
    }
    return renderBoldText(text);
  };

  const renderBoldText = (text) => {
    const parts = text.split('**');
    return parts.map((part, partIndex) => 
      partIndex % 2 === 1 ? <strong key={partIndex}>{part}</strong> : part
    );
  };

  return (
    <div className={styles.detailContainer}>
      <article>
        <header className={styles.detailHeader}>
          <Link href="/blog" className={styles.backLink}>
            <FiArrowLeft /> Back to Blog
          </Link>
          
          <h1>{post.title}</h1>
          
          <div className={styles.postMeta}>
            <span><FiCalendar /> {post.date}</span>
            <span><FiClock /> {post.readTime} min read</span>
            {post.altitude && <span><FiMapPin /> {post.altitude}</span>}
            <span><FiTrendingUp /> {post.difficulty}</span>
            {post.season && <span>Season: {post.season}</span>}
          </div>
          
          {typeof post.image === 'string' ? (  // Handle both string and object formats
            <div className={styles.featuredImage}>
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={450}
                priority
                className={styles.image}
              />
            </div>
          ) : post.image?.src ? (
            <div className={styles.featuredImage}>
              <Image
                src={post.image.src}
                alt={post.image.alt || post.title}
                width={post.image.width || 800}
                height={post.image.height || 450}
                priority
                className={styles.image}
              />
            </div>
          ) : null}
        </header>
        
        <div className={styles.detailContent}>
          {post.content?.map((item, index) => {
            switch (item.type) {
              case 'paragraph':
                return (
                  <p key={index} className={styles.paragraph}>
                    {renderFormattedText(item.text)}
                  </p>
                );
              case 'heading':
                return <h2 key={index}>{item.text}</h2>;
              case 'subheading':
                return <h3 key={index}>{item.text}</h3>;
              case 'image':
                return item.src ? (
                  <figure key={index} className={styles.contentImage}>
                    <Image
                      src={item.src}
                      alt={item.alt || ''}
                      width={item.width || 800}
                      height={item.height || 450}
                      className={styles.image}
                    />
                    {item.caption && <figcaption>{item.caption}</figcaption>}
                  </figure>
                ) : null;
              case 'quote':
                return (
                  <blockquote key={index} className={styles.quote}>
                    <p>{renderBoldText(item.text)}</p>
                    {item.author && <footer>— {item.author}</footer>}
                  </blockquote>
                );
              default:
                return null;
            }
          })}
        </div>
        
        {post.gallery?.length > 0 && (
          <section className={styles.gallerySection}>
            <h2>Expedition Gallery</h2>
            <div className={styles.galleryGrid}>
              {post.gallery.map((image, index) => {
                const imgSrc = typeof image === 'string' ? image : image.src;
                const imgAlt = typeof image === 'string' ? `Gallery image ${index + 1}` : image.alt;
                
                return imgSrc ? (
                  <div key={index} className={styles.galleryImage}>
                    <Image
                      src={imgSrc}
                      alt={imgAlt || `Gallery image ${index + 1}`}
                      width={400}
                      height={300}
                      className={styles.image}
                    />
                  </div>
                ) : null;
              })}
            </div>
          </section>
        )}
        
         {/* Tips Section - Updated Handling */}
    {post.tips?.length > 0 && (
      <section className={styles.tipsSection}>
        <h2 className={styles.sectionTitle}>Key Tips</h2>
        <div className={styles.tipsGrid}>
          {post.tips.map((tip, index) => (
            <div key={index} className={styles.tipCard}>
              <div className={styles.tipIcon}>✓</div>
              <div className={styles.tipContent}>
                {renderBoldText(tip)}
              </div>
            </div>
          ))}
        </div>
      </section>
    )}

    {/* FAQ Section - New Handling */}
    {post.faqs?.length > 0 && (
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {post.faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>{faq.question}</h3>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    )}
    
        {post.author?.image?.src && (
          <section className={styles.authorSection}>
            <div className={styles.authorImage}>
              <Image
                src={post.author.image.src}
                alt={post.author.image.alt || post.author.name}
                width={100}
                height={100}
                className={styles.avatar}
              />
            </div>
            <div className={styles.authorInfo}>
              <h3>About {post.author.name}</h3>
              <div className={styles.authorBio}>
                {post.author.bio}
              </div>
            </div>
          </section>
        )}
      </article>
      
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h2>Join Our Trekking Community</h2>
          <p>Get monthly expedition updates, gear guides, and special offers</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}