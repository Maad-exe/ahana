import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ServiceProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ServiceItem: React.FC<ServiceProps> = ({ image, title, description, link }) => {
  return (
    <motion.div 
      className="service-item bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
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
      <div className="p-8">
        <h3 className="text-xl font-display font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link href={link} className="inline-block text-primary font-bold">
          Read More <ArrowRight className="inline ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      image: "/images/yoga3.svg",
      title: "Yoga Classes",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.",
      link: "/classes?type=yoga"
    },
    {
      image: "/images/yoga4.svg",
      title: "Meditation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.",
      link: "/classes?type=meditation"
    },
    {
      image: "/images/spa1.svg",
      title: "Spa Treatments",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.",
      link: "/classes?type=spa"
    }
  ];

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
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
