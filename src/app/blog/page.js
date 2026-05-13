import Link from 'next/link';
import Image from 'next/image';
import styles from './blog.module.scss';
import { FiClock, FiMapPin, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import { trekkingPosts, heroContent, newsletterContent } from './blogData';

export default function BlogPage() {
  return (
    <main className={styles.blogContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>{heroContent.title}</h1>
          <p>{heroContent.description}</p>
        </div>
        <div className={styles.heroOverlay}></div>
        <Image 
          src={heroContent.image} 
          alt={heroContent.alt} 
          fill
          className={styles.heroImage}
          priority
          sizes="100vw"
        />
      </section>

      <section className={styles.featuredPosts}>
        <h2 className={styles.sectionTitle}>Summit Stories & Trail Tales</h2>
        <div className={styles.postGrid}>
          {trekkingPosts.map((post) => (
            <article key={post.id} className={styles.postCard}>
              <div className={styles.cardImage}>
                <Image 
                  src={post.image} 
                  alt={`Featured image for ${post.title}`}
                  fill
                  className={styles.postImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={post.id === 1}
                />
                <span className={styles.difficultyBadge}>{post.difficulty}</span>
                <div className={styles.imageOverlay}></div>
              </div>
              
              <div className={styles.cardContent}>
                <span className={styles.postCategory}>{post.category}</span>
                <h3>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.postMeta}>
                  <span><FiClock className={styles.metaIcon} /> {post.readTime} min read</span>
                  <span><FiMapPin className={styles.metaIcon} /> {post.altitude}</span>
                  <span><FiTrendingUp className={styles.metaIcon} /> {post.difficulty}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                  Read Expedition Report
                  <FiArrowRight className={styles.arrowIcon} />
                </Link>
              </div>
              <Link href={`/blog/${post.slug}`} className={styles.cardLink} aria-label={`Read more about ${post.title}`} />
            </article>
          ))}
        </div>
      </section>

      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h2>{newsletterContent.title}</h2>
          <p>{newsletterContent.description}</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  );
}