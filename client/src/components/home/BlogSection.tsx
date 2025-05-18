import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, User, ArrowRight } from "lucide-react";

interface BlogPostProps {
  image: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  link: string;
}

const BlogPostItem: React.FC<BlogPostProps> = ({ image, title, date, author, excerpt, link }) => {
  return (
    <motion.div 
      className="service-item bg-white border border-gray-200 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4 text-gray-600 text-sm">
          <span><Calendar className="inline mr-2 h-4 w-4" />{date}</span>
          <span className="mx-2">|</span>
          <span><User className="inline mr-2 h-4 w-4" />{author}</span>
        </div>
        <h3 className="text-xl font-display font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link href={link} className="inline-block text-primary font-bold">
          Read More <ArrowRight className="inline ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      image: "/images/blog1.svg",
      title: "The Power of Mindfulness Meditation",
      date: "May 20, 2023",
      author: "Admin",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque.",
      link: "/blog/1"
    },
    {
      image: "/images/blog2.svg",
      title: "5 Yoga Poses for Beginners",
      date: "May 15, 2023",
      author: "Admin",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque.",
      link: "/blog/2"
    },
    {
      image: "/images/blog3.svg",
      title: "Nutrition Tips for Yoga Practitioners",
      date: "May 10, 2023",
      author: "Admin",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque.",
      link: "/blog/3"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostItem 
              key={index}
              image={post.image}
              title={post.title}
              date={post.date}
              author={post.author}
              excerpt={post.excerpt}
              link={post.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
