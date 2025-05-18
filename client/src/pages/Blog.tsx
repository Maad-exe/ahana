import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import SubscribeSection from '@/components/home/SubscribeSection';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { blogPosts, categories } from '@/data/mockData';

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = category === 'all' || post.categories.includes(category);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Ahana Yoga & Spa Center</title>
        <meta name="description" content="Read our latest articles on yoga, meditation, wellness tips, healthy living, and mindfulness practices. Stay informed with Ahana's expert guides." />
      </Helmet>
      
      <main>
        {/* Hero Banner */}
        <section className="py-32 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-display font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Blog
            </motion.h1>
            <motion.div 
              className="w-20 h-1 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            ></motion.div>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Stay up to date with our latest articles on yoga, meditation, wellness, and healthy living.
            </motion.p>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 gap-10">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                      <motion.article 
                        key={post.id}
                        className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-2/5">
                            <div className="h-64 md:h-full overflow-hidden">
                              <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                              />
                            </div>
                          </div>
                          <div className="md:w-3/5 p-6">
                            <div className="flex items-center mb-4 text-gray-600 text-sm">
                              <span><Calendar className="inline mr-2 h-4 w-4" />{post.date}</span>
                              <span className="mx-2">|</span>
                              <span><User className="inline mr-2 h-4 w-4" />{post.author}</span>
                            </div>
                            <h2 className="text-2xl font-display font-bold mb-4">
                              <Link href={`/blog/${post.id}`}>
                                <a className="hover:text-primary transition-colors">
                                  {post.title}
                                </a>
                              </Link>
                            </h2>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <Link href={`/blog/${post.id}`}>
                              <a className="inline-block text-primary font-bold">
                                Read More <ArrowRight className="inline ml-2 h-4 w-4" />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </motion.article>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <h3 className="text-xl font-bold mb-2">No posts found</h3>
                      <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                    </div>
                  )}
                </div>

                {/* Pagination */}
                {filteredPosts.length > 0 && (
                  <div className="flex justify-center mt-12">
                    <nav className="flex space-x-2">
                      <a className="px-4 py-2 bg-primary text-white rounded-md font-bold">1</a>
                      <a className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md font-bold">2</a>
                      <a className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md font-bold">3</a>
                      <span className="px-4 py-2">...</span>
                      <a className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md font-bold">Next</a>
                    </nav>
                  </div>
                )}
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
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="rounded-l-lg"
                    />
                    <Button className="rounded-l-none bg-primary">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="bg-gray-100 rounded-lg p-6 mb-8">
                  <h3 className="font-display font-bold text-xl mb-4">Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <button 
                        className={`w-full text-left py-2 px-3 rounded hover:bg-gray-200 transition-colors ${category === 'all' ? 'text-primary font-bold' : 'text-gray-700'}`}
                        onClick={() => setCategory('all')}
                      >
                        All Categories
                      </button>
                    </li>
                    {categories.map((cat, index) => (
                      <li key={index}>
                        <button 
                          className={`w-full text-left py-2 px-3 rounded hover:bg-gray-200 transition-colors ${category === cat.slug ? 'text-primary font-bold' : 'text-gray-700'}`}
                          onClick={() => setCategory(cat.slug)}
                        >
                          {cat.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Recent Posts */}
                <div className="bg-gray-100 rounded-lg p-6 mb-8">
                  <h3 className="font-display font-bold text-xl mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex gap-4">
                        <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">
                            <Link href={`/blog/${post.id}`}>
                              <a className="hover:text-primary transition-colors">
                                {post.title}
                              </a>
                            </Link>
                          </h4>
                          <p className="text-gray-600 text-sm">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tags */}
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="font-display font-bold text-xl mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <a href="#" className="bg-white px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors">Yoga</a>
                    <a href="#" className="bg-white px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors">Meditation</a>
                    <a href="#" className="bg-white px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors">Wellness</a>
                    <a href="#" className="bg-white px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors">Health</a>
                    <a href="#" className="bg-white px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors">Mindfulness</a>
                    <a href="#" className="bg-white px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors">Fitness</a>
                    <a href="#" className="bg-white px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors">Lifestyle</a>
                    <a href="#" className="bg-white px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors">Nutrition</a>
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

export default Blog;
