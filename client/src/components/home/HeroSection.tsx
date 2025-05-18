import { Link } from "wouter";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section
      className="hero-section min-h-[90vh] bg-cover bg-center relative flex items-center"
      style={{ 
        backgroundImage: `url('/images/hero-bg.svg')`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 py-20 flex items-center relative z-10">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            Yoga & Meditation
          </h1>
          <p className="text-xl text-white mb-8">
            Find your inner peace through our yoga and meditation classes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/classes" className="bg-primary hover:bg-opacity-90 transition-all text-white font-bold py-3 px-8 rounded-full">
              Book Now
            </Link>
            <Link href="/schedule" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary transition-all text-white font-bold py-3 px-8 rounded-full">
              View Schedule
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
