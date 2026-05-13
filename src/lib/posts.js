export const blogPosts = [
    {
      id: 1,
      title: 'Preparing for High Altitude Trekking',
      excerpt: 'Essential tips for high altitude trekking in the Himalayas.',
      category: 'trekking',
      tags: ['training', 'altitude'],
      date: '2023-05-15',
      readTime: '8 min read',
      author: 'Rajiv Sharma',
      authorBio: 'Mountain guide with 15 years experience.',
      authorImage: '/images/authors/rajiv.jpg',
      imageUrl: '/images/vasukital.jpg',
      slug: 'preparing-for-high-altitude-trekking',
      content: `
        <h2>Understanding High Altitude</h2>
        <p>Trekking at high altitudes presents unique challenges...</p>
        <!-- Full content here -->
      `,
      relatedPosts: [2, 6]
    },
    // Include ALL your posts here with unique slugs
  ];
  
  export const getPostBySlug = (slug) => 
    blogPosts.find(post => post.slug === slug);
  
  export const getRelatedPosts = (ids) => 
    blogPosts.filter(post => ids.includes(post.id));
  
  export const getAllSlugs = () => 
    blogPosts.map(post => ({ slug: post.slug }));