import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useRoute, Link } from 'wouter';
import SubscribeSection from '@/components/home/SubscribeSection';
import { Calendar, User, Tag, Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { blogPosts, categories } from '@/data/mockData';

const BlogDetails: React.FC = () => {
  const [match, params] = useRoute<{ id: string }>('/blog/:id');
  
  if (!match) return null;
  
  const { id } = params;
  const post = blogPosts.find(post => post.id.toString() === id);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-display font-bold mb-4">Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link href="/blog">
          <a className="inline-block bg-primary hover:bg-opacity-90 transition-all text-white font-bold py-3 px-8 rounded-full">
            Back to Blog
          </a>
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.categories.some(cat => post.categories.includes(cat)))
    .slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{post.title} - Ahana Yoga & Spa Center</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <main>
        {/* Hero Banner */}
        <section 
          className="py-32 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1 
              className="text-4xl md:text-5xl font-display font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {post.title}
            </motion.h1>
            <motion.div 
              className="w-20 h-1 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            ></motion.div>
            <motion.div 
              className="flex justify-center items-center text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span><Calendar className="inline mr-2 h-4 w-4" />{post.date}</span>
              <span className="mx-4">|</span>
              <span><User className="inline mr-2 h-4 w-4" />{post.author}</span>
            </motion.div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <motion.article 
                  className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div 
                    className="prose prose-lg max-w-none mb-8"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></div>
                  
                  {/* Tags */}
                  <div className="flex items-center flex-wrap gap-2 mb-8 pt-8 border-t border-gray-200">
                    <span className="font-bold flex items-center">
                      <Tag className="h-4 w-4 mr-2" /> Tags:
                    </span>
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Share */}
                  <div className="flex items-center flex-wrap gap-4 mb-8 pb-8 border-b border-gray-200">
                    <span className="font-bold">Share:</span>
                    <a href="#" className="text-blue-600 hover:text-primary transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-blue-400 hover:text-primary transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-pink-600 hover:text-primary transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                  
                  {/* Author Bio */}
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start p-6 bg-gray-50 rounded-lg mb-12">
                    <img 
                      src="/images/yoga8.jpg" 
                      alt={post.author} 
                      className="w-24 h-24 rounded-full object-cover" 
                    />
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2">{post.author}</h3>
                      <p className="text-gray-600 mb-4">
                        Yoga instructor and wellness blogger with over 10 years of experience. 
                        Passionate about helping others find balance and inner peace through mindful practices.
                      </p>
                      <div className="flex space-x-3">
                        <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                          <Facebook className="h-4 w-4" />
                        </a>
                        <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                          <Twitter className="h-4 w-4" />
                        </a>
                        <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                          <Instagram className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Related Posts */}
                  {relatedPosts.length > 0 && (
                    <div className="mb-12">
                      <h3 className="text-2xl font-display font-bold mb-6">Related Posts</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {relatedPosts.map((relatedPost) => (
                          <div key={relatedPost.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                            <div className="h-48 overflow-hidden">
                              <img 
                                src={relatedPost.image} 
                                alt={relatedPost.title} 
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                              />
                            </div>
                            <div className="p-4">
                              <div className="flex items-center mb-2 text-gray-600 text-sm">
                                <span><Calendar className="inline mr-2 h-3 w-3" />{relatedPost.date}</span>
                              </div>
                              <h4 className="font-display font-bold mb-2">
                                <Link href={`/blog/${relatedPost.id}`}>
                                  <a className="hover:text-primary transition-colors">
                                    {relatedPost.title}
                                  </a>
                                </Link>
                              </h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Comments */}
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-6 flex items-center">
                      <MessageCircle className="h-5 w-5 mr-2" /> Comments (3)
                    </h3>
                    
                    <div className="space-y-6 mb-10">
                      <div className="flex gap-4">
                        <img 
                          src="/images/spa2.jpg" 
                          alt="Comment author" 
                          className="w-12 h-12 rounded-full object-cover flex-shrink-0" 
                        />
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-bold">Sarah Johnson</h4>
                            <span className="text-sm text-gray-500">2 days ago</span>
                          </div>
                          <p className="text-gray-700 mb-2">
                            Great article! The mindfulness techniques you shared have been really helpful for my daily practice.
                          </p>
                          <button className="text-primary text-sm font-bold">Reply</button>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 pl-12">
                        <img 
                          src="/images/yoga8.jpg" 
                          alt="Comment author" 
                          className="w-12 h-12 rounded-full object-cover flex-shrink-0" 
                        />
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-bold">{post.author}</h4>
                            <span className="text-sm text-gray-500">1 day ago</span>
                          </div>
                          <p className="text-gray-700 mb-2">
                            Thank you, Sarah! I'm so glad you found the techniques helpful. Keep up with your practice!
                          </p>
                          <button className="text-primary text-sm font-bold">Reply</button>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <img 
                          src="/images/spa3.jpg" 
                          alt="Comment author" 
                          className="w-12 h-12 rounded-full object-cover flex-shrink-0" 
                        />
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-bold">Michael Chen</h4>
                            <span className="text-sm text-gray-500">12 hours ago</span>
                          </div>
                          <p className="text-gray-700 mb-2">
                            I've been looking for a comprehensive guide like this for a while. Will definitely be incorporating these practices into my routine.
                          </p>
                          <button className="text-primary text-sm font-bold">Reply</button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Comment Form */}
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-6">Leave a Comment</h3>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Input
                              type="text"
                              placeholder="Your Name *"
                              className="w-full"
                              required
                            />
                          </div>
                          <div>
                            <Input
                              type="email"
                              placeholder="Your Email *"
                              className="w-full"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Input
                            type="text"
                            placeholder="Website"
                            className="w-full"
                          />
                        </div>
                        <div>
                          <Textarea
                            placeholder="Your Comment *"
                            className="w-full min-h-[150px]"
                            required
                          />
                        </div>
                        <div>
                          <Button 
                            type="submit" 
                            className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full"
                          >
                            Post Comment
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </motion.article>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/3">
                {/* Search */}
                <div className="bg-gray-100 rounded-lg p-6 mb-8">
                  <h3 className="font-display font-bold text-xl mb-4">Search</h3>
                  <div className="flex">
                    <Input
                      type="text"
                      placeholder="Search..."
                      className="rounded-l-lg"
                    />
                    <Button className="rounded-l-none bg-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </Button>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="bg-gray-100 rounded-lg p-6 mb-8">
                  <h3 className="font-display font-bold text-xl mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link href={`/blog?category=${category.slug}`}>
                          <a className="flex justify-between items-center py-2 px-3 rounded hover:bg-gray-200 transition-colors text-gray-700 hover:text-primary">
                            {category.name}
                            <span className="bg-white px-2 py-1 rounded-full text-xs">
                              {category.count}
                            </span>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Recent Posts */}
                <div className="bg-gray-100 rounded-lg p-6 mb-8">
                  <h3 className="font-display font-bold text-xl mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((recentPost) => (
                      <div key={recentPost.id} className="flex gap-4">
                        <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded">
                          <img 
                            src={recentPost.image} 
                            alt={recentPost.title} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">
                            <Link href={`/blog/${recentPost.id}`}>
                              <a className="hover:text-primary transition-colors">
                                {recentPost.title}
                              </a>
                            </Link>
                          </h4>
                          <p className="text-gray-600 text-sm">{recentPost.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tags */}
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="font-display font-bold text-xl mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Yoga', 'Meditation', 'Wellness', 'Health', 'Mindfulness', 'Fitness', 'Lifestyle', 'Nutrition'].map((tag, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="bg-white px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                      >
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Subscribe Section */}
        <SubscribeSection />
      </main>
    </>
  );
};

export default BlogDetails;
