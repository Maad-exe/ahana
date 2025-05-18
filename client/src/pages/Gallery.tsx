import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import SubscribeSection from '@/components/home/SubscribeSection';

type GalleryFilter = 'all' | 'yoga' | 'meditation' | 'wellness' | 'spa';

interface GalleryItemProps {
  image: string;
  alt: string;
  category: GalleryFilter;
}

const galleryItems: GalleryItemProps[] = [
  {
    image: "/images/yoga1.jpg",
    alt: "Woman practicing yoga on beach at sunset",
    category: "yoga"
  },
  {
    image: "/images/yoga2.jpg",
    alt: "Yoga instructor guiding a student",
    category: "yoga"
  },
  {
    image: "/images/yoga3.jpg",
    alt: "Group yoga class in a bright studio",
    category: "yoga"
  },
  {
    image: "/images/yoga4.jpg",
    alt: "Advanced yoga pose demonstration",
    category: "yoga"
  },
  {
    image: "/images/yoga5.jpg",
    alt: "Meditation session in peaceful garden",
    category: "meditation"
  },
  {
    image: "/images/yoga6.jpg",
    alt: "Yoga retreat in natural setting",
    category: "yoga"
  },
  {
    image: "/images/yoga7.jpg",
    alt: "Partner yoga practice",
    category: "yoga"
  },
  {
    image: "/images/yoga8.jpg",
    alt: "Morning meditation by the lake",
    category: "meditation"
  },
  {
    image: "/images/spa1.jpg",
    alt: "Spa treatment setting with oils",
    category: "spa"
  },
  {
    image: "/images/spa2.jpg",
    alt: "Wellness center relaxation area",
    category: "wellness"
  },
  {
    image: "/images/spa3.jpg",
    alt: "Hot stone massage treatment",
    category: "spa"
  },
  {
    image: "/images/spa4.jpg",
    alt: "Aromatherapy spa treatment",
    category: "spa"
  },
  {
    image: "/images/spa5.jpg",
    alt: "Wellness coaching session",
    category: "wellness"
  },
  {
    image: "/images/spa6.jpg",
    alt: "Meditation and mindfulness practice",
    category: "meditation"
  },
  {
    image: "/images/treatment1.jpg",
    alt: "Ayurvedic wellness treatment",
    category: "wellness"
  },
  {
    image: "/images/treatment2.jpg",
    alt: "Luxury spa environment",
    category: "spa"
  }
];

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('all');

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Gallery - Ahana Yoga & Spa Center</title>
        <meta name="description" content="Explore our gallery of yoga classes, meditation sessions, wellness activities and spa treatments at Ahana. Get inspired for your next visit." />
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
              Our Gallery
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
              Explore our collection of photos showcasing our yoga classes, meditation sessions, wellness activities, and spa treatments.
            </motion.p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center mb-12 space-x-4">
              <button 
                className={`gallery-filter py-2 px-6 border-2 ${activeFilter === 'all' ? 'active border-primary text-primary' : 'border-transparent hover:border-primary hover:text-primary'} transition-all rounded-full font-bold mb-2`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button 
                className={`gallery-filter py-2 px-6 border-2 ${activeFilter === 'yoga' ? 'active border-primary text-primary' : 'border-transparent hover:border-primary hover:text-primary'} transition-all rounded-full font-bold mb-2`}
                onClick={() => setActiveFilter('yoga')}
              >
                Yoga
              </button>
              <button 
                className={`gallery-filter py-2 px-6 border-2 ${activeFilter === 'meditation' ? 'active border-primary text-primary' : 'border-transparent hover:border-primary hover:text-primary'} transition-all rounded-full font-bold mb-2`}
                onClick={() => setActiveFilter('meditation')}
              >
                Meditation
              </button>
              <button 
                className={`gallery-filter py-2 px-6 border-2 ${activeFilter === 'wellness' ? 'active border-primary text-primary' : 'border-transparent hover:border-primary hover:text-primary'} transition-all rounded-full font-bold mb-2`}
                onClick={() => setActiveFilter('wellness')}
              >
                Wellness
              </button>
              <button 
                className={`gallery-filter py-2 px-6 border-2 ${activeFilter === 'spa' ? 'active border-primary text-primary' : 'border-transparent hover:border-primary hover:text-primary'} transition-all rounded-full font-bold mb-2`}
                onClick={() => setActiveFilter('spa')}
              >
                Spa
              </button>
            </div>
            
            <AnimatePresence>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                layout
              >
                {filteredItems.map((item, index) => (
                  <motion.div 
                    key={`${item.image}-${index}`}
                    className="overflow-hidden rounded-lg shadow-lg h-64"
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
        
        {/* Subscribe Section */}
        <SubscribeSection />
      </main>
    </>
  );
};

export default Gallery;
