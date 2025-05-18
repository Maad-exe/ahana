import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import SubscribeSection from '@/components/home/SubscribeSection';
import { Clock, User } from 'lucide-react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Sample class data
const classesData = [
  {
    id: 1,
    image: "/images/yoga1.jpg",
    title: "Yoga For Beginners",
    schedule: "Mon, Wed, Fri",
    instructor: "Emma Wilson",
    description: "Perfect for those new to yoga. Learn fundamental poses and breathing techniques in a supportive environment.",
    category: "beginners",
    link: "/classes/1"
  },
  {
    id: 2,
    image: "/images/yoga2.jpg",
    title: "Advanced Yoga",
    schedule: "Tue, Thu",
    instructor: "Robert Chen",
    description: "For experienced practitioners looking to deepen their practice with advanced poses and transitions.",
    category: "advanced",
    link: "/classes/2"
  },
  {
    id: 3,
    image: "/images/yoga3.jpg",
    title: "Meditation 101",
    schedule: "Wed, Sat",
    instructor: "Sarah Johnson",
    description: "Learn the fundamentals of meditation to bring mindfulness into your daily life and reduce stress.",
    category: "meditation",
    link: "/classes/3"
  },
  {
    id: 4,
    image: "/images/yoga4.jpg",
    title: "Hatha Yoga",
    schedule: "Mon, Fri",
    instructor: "Michael Brown",
    description: "A gentle introduction to the most basic yoga postures. Perfect for all levels, especially beginners.",
    category: "beginners",
    link: "/classes/4"
  },
  {
    id: 5,
    image: "/images/yoga5.jpg",
    title: "Vinyasa Flow",
    schedule: "Tue, Thu, Sat",
    instructor: "Jennifer Lee",
    description: "A dynamic practice that synchronizes movement with breath for a flowing, energetic sequence.",
    category: "advanced",
    link: "/classes/5"
  },
  {
    id: 6,
    image: "/images/yoga6.jpg",
    title: "Kundalini Yoga",
    schedule: "Wed, Sun",
    instructor: "David Wilson",
    description: "Focuses on awakening energy at the base of the spine and drawing it upward through the chakras.",
    category: "kundalini",
    link: "/classes/6"
  },
  {
    id: 7,
    image: "/images/yoga7.jpg",
    title: "Ashtanga Yoga",
    schedule: "Mon, Thu",
    instructor: "Olivia Mitchell",
    description: "A rigorous style of yoga that follows a specific sequence of postures linked by breath.",
    category: "ashtanga",
    link: "/classes/7"
  },
  {
    id: 8,
    image: "/images/yoga8.jpg",
    title: "Deep Meditation",
    schedule: "Tue, Sat",
    instructor: "Emma Johnson",
    description: "Advanced meditation techniques to achieve deeper states of consciousness and inner peace.",
    category: "meditation",
    link: "/classes/8"
  }
];

const ClassCard: React.FC<{
  id: number;
  image: string;
  title: string;
  schedule: string;
  instructor: string;
  description: string;
  link: string;
}> = ({ image, title, schedule, instructor, description, link }) => {
  return (
    <motion.div 
      className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-2">{title}</h3>
        <div className="flex justify-between mb-4 text-gray-600">
          <span><Clock className="inline mr-2 h-4 w-4" />{schedule}</span>
          <span><User className="inline mr-2 h-4 w-4" />{instructor}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link}>
          <a className="inline-block bg-primary hover:bg-opacity-90 transition-all text-white font-bold py-2 px-6 rounded-full text-sm">
            Learn More
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

type CategoryFilter = 'all' | 'beginners' | 'advanced' | 'meditation' | 'kundalini' | 'ashtanga';

const Classes: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredClasses = classesData.filter(cls => {
    // Filter by category
    if (filter !== 'all' && cls.category !== filter) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !cls.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !cls.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <>
      <Helmet>
        <title>Classes - Ahana Yoga & Spa Center</title>
        <meta name="description" content="Discover our wide range of yoga, meditation, and wellness classes at Ahana. From beginners to advanced practitioners, we have something for everyone." />
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
              Our Classes
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
              Explore our diverse range of yoga and meditation classes designed for all experience levels.
            </motion.p>
          </div>
        </section>

        {/* Classes Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              {/* Sidebar Filters */}
              <div className="md:w-1/4">
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="font-display font-bold text-xl mb-4">Search Classes</h3>
                  <div className="flex mb-6">
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

                  <h3 className="font-display font-bold text-xl mb-4">Class Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <button 
                        className={`w-full text-left py-2 px-3 rounded hover:bg-gray-200 transition-colors ${filter === 'all' ? 'text-primary font-bold' : 'text-gray-700'}`}
                        onClick={() => setFilter('all')}
                      >
                        All Classes
                      </button>
                    </li>
                    <li>
                      <button 
                        className={`w-full text-left py-2 px-3 rounded hover:bg-gray-200 transition-colors ${filter === 'beginners' ? 'text-primary font-bold' : 'text-gray-700'}`}
                        onClick={() => setFilter('beginners')}
                      >
                        For Beginners
                      </button>
                    </li>
                    <li>
                      <button 
                        className={`w-full text-left py-2 px-3 rounded hover:bg-gray-200 transition-colors ${filter === 'advanced' ? 'text-primary font-bold' : 'text-gray-700'}`}
                        onClick={() => setFilter('advanced')}
                      >
                        Advanced
                      </button>
                    </li>
                    <li>
                      <button 
                        className={`w-full text-left py-2 px-3 rounded hover:bg-gray-200 transition-colors ${filter === 'meditation' ? 'text-primary font-bold' : 'text-gray-700'}`}
                        onClick={() => setFilter('meditation')}
                      >
                        Meditation
                      </button>
                    </li>
                    <li>
                      <button 
                        className={`w-full text-left py-2 px-3 rounded hover:bg-gray-200 transition-colors ${filter === 'kundalini' ? 'text-primary font-bold' : 'text-gray-700'}`}
                        onClick={() => setFilter('kundalini')}
                      >
                        Kundalini
                      </button>
                    </li>
                    <li>
                      <button 
                        className={`w-full text-left py-2 px-3 rounded hover:bg-gray-200 transition-colors ${filter === 'ashtanga' ? 'text-primary font-bold' : 'text-gray-700'}`}
                        onClick={() => setFilter('ashtanga')}
                      >
                        Ashtanga
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Classes Grid */}
              <div className="md:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredClasses.length > 0 ? (
                    filteredClasses.map((cls) => (
                      <ClassCard
                        key={cls.id}
                        id={cls.id}
                        image={cls.image}
                        title={cls.title}
                        schedule={cls.schedule}
                        instructor={cls.instructor}
                        description={cls.description}
                        link={cls.link}
                      />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <h3 className="text-xl font-bold mb-2">No classes found</h3>
                      <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                    </div>
                  )}
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

export default Classes;
