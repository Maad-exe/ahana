import { motion } from "framer-motion";
import { Link } from "wouter";

const AboutIntro: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/yoga2.svg" 
              alt="Yoga instruction" 
              className="rounded-lg shadow-xl w-full" 
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Welcome to Ahana Yoga
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
            </p>
            <p className="text-gray-600 mb-8">
              Curabitur rhoncus sem et eros pharetra, in pellentesque lacus tempus. Sed varius ipsum ligula, in tempor velit elementum eget. Proin sollicitudin purus mauris, non gravida urna sollicitudin quis.
            </p>
            <Link href="/about" className="inline-block bg-primary hover:bg-opacity-90 transition-all text-white font-bold py-3 px-8 rounded-full">
              Discover More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
