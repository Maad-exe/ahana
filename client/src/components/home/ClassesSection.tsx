import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, User } from "lucide-react";

interface ClassProps {
  image: string;
  title: string;
  schedule: string;
  instructor: string;
  description: string;
  link: string;
}

const ClassItem: React.FC<ClassProps> = ({ image, title, schedule, instructor, description, link }) => {
  return (
    <motion.div 
      className="service-item bg-white border border-gray-200 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
        <h3 className="text-xl font-display font-bold mb-2">{title}</h3>
        <div className="flex justify-between mb-4 text-gray-600">
          <span><Clock className="inline mr-2 h-4 w-4" />{schedule}</span>
          <span><User className="inline mr-2 h-4 w-4" />{instructor}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link} className="inline-block bg-primary hover:bg-opacity-90 transition-all text-white font-bold py-2 px-6 rounded-full text-sm">
          Join Now
        </Link>
      </div>
    </motion.div>
  );
};

const ClassesSection: React.FC = () => {
  const classes = [
    {
      image: "/images/yoga5.svg",
      title: "Yoga For Beginners",
      schedule: "Mon, Wed, Fri",
      instructor: "Emma Wilson",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/classes/1"
    },
    {
      image: "/images/yoga6.svg",
      title: "Advanced Yoga",
      schedule: "Tue, Thu",
      instructor: "Robert Chen",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/classes/2"
    },
    {
      image: "/images/yoga7.svg",
      title: "Meditation 101",
      schedule: "Wed, Sat",
      instructor: "Sarah Johnson",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/classes/3"
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
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Popular Classes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <ClassItem 
              key={index}
              image={classItem.image}
              title={classItem.title}
              schedule={classItem.schedule}
              instructor={classItem.instructor}
              description={classItem.description}
              link={classItem.link}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/classes" className="inline-block bg-transparent border-2 border-primary hover:bg-primary hover:text-white transition-all text-primary font-bold py-3 px-8 rounded-full">
            View All Classes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
