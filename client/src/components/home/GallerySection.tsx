import { useState } from "react";
import { motion } from "framer-motion";

type GalleryFilter = 'all' | 'yoga' | 'meditation' | 'wellness';

interface GalleryItemProps {
  image: string;
  alt: string;
  category: GalleryFilter;
}

const galleryItems: GalleryItemProps[] = [
  {
    image: "/images/gallery1.svg",
    alt: "Yoga pose",
    category: "yoga"
  },
  {
    image: "/images/gallery2.svg",
    alt: "Meditation space",
    category: "meditation"
  },
  {
    image: "/images/gallery3.svg",
    alt: "Spa treatment",
    category: "wellness"
  },
  {
    image: "/images/gallery4.svg",
    alt: "Group yoga",
    category: "yoga"
  },
  {
    image: "/images/gallery5.svg",
    alt: "Lake meditation",
    category: "meditation"
  },
  {
    image: "/images/gallery6.svg",
    alt: "Wellness studio",
    category: "wellness"
  },
  {
    image: "/images/gallery7.svg",
    alt: "Yoga headstand",
    category: "yoga"
  },
  {
    image: "/images/gallery8.svg",
    alt: "Hot stone therapy",
    category: "wellness"
  }
];

const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('all');

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center mb-10 space-x-4">
          <button 
            className={`gallery-filter py-2 px-5 border-2 ${activeFilter === 'all' ? 'active border-primary text-primary' : 'border-transparent hover:border-primary hover:text-primary'} transition-all rounded-full font-bold`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`gallery-filter py-2 px-5 border-2 ${activeFilter === 'yoga' ? 'active border-primary text-primary' : 'border-transparent hover:border-primary hover:text-primary'} transition-all rounded-full font-bold`}
            onClick={() => setActiveFilter('yoga')}
          >
            Yoga
          </button>
          <button 
            className={`gallery-filter py-2 px-5 border-2 ${activeFilter === 'meditation' ? 'active border-primary text-primary' : 'border-transparent hover:border-primary hover:text-primary'} transition-all rounded-full font-bold`}
            onClick={() => setActiveFilter('meditation')}
          >
            Meditation
          </button>
          <button 
            className={`gallery-filter py-2 px-5 border-2 ${activeFilter === 'wellness' ? 'active border-primary text-primary' : 'border-transparent hover:border-primary hover:text-primary'} transition-all rounded-full font-bold`}
            onClick={() => setActiveFilter('wellness')}
          >
            Wellness
          </button>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          layout
        >
          {filteredItems.map((item, index) => (
            <motion.div 
              key={index}
              className="gallery-item overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              layout
            >
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
