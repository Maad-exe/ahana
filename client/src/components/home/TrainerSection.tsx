import { motion } from "framer-motion";
import { Link } from "wouter";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";

interface TrainerProps {
  image: string;
  name: string;
  role: string;
  socials: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

const TrainerItem: React.FC<TrainerProps> = ({ image, name, role, socials }) => {
  return (
    <motion.div 
      className="service-item bg-white border border-gray-200 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="h-80 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-display font-bold mb-2">{name}</h3>
        <p className="text-primary mb-4">{role}</p>
        <div className="flex justify-center space-x-3">
          <a href={socials.facebook} className="text-gray-700 hover:text-primary transition-colors">
            <FacebookIcon size={18} />
          </a>
          <a href={socials.twitter} className="text-gray-700 hover:text-primary transition-colors">
            <TwitterIcon size={18} />
          </a>
          <a href={socials.instagram} className="text-gray-700 hover:text-primary transition-colors">
            <InstagramIcon size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const TrainerSection: React.FC = () => {
  const trainers = [
    {
      image: "/images/trainer1.svg",
      name: "Olivia Mitchell",
      role: "Yoga Instructor",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      image: "/images/trainer2.svg",
      name: "David Wilson",
      role: "Meditation Expert",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      image: "/images/trainer3.svg",
      name: "Emma Johnson",
      role: "Wellness Coach",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
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
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Trainers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <TrainerItem 
              key={index}
              image={trainer.image}
              name={trainer.name}
              role={trainer.role}
              socials={trainer.socials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
