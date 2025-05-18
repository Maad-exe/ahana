import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import TrainerSection from '@/components/home/TrainerSection';
import SubscribeSection from '@/components/home/SubscribeSection';


const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Ahana Yoga & Spa Center</title>
        <meta name="description" content="Learn about Ahana Yoga & Spa Center's mission, values, and team. Discover our approach to yoga, meditation, and wellness." />
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
              About Ahana
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
              Learn about our journey, our mission, and what makes Ahana special.
            </motion.p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat.
                </p>
                <p className="text-gray-600 mb-4">
                  Etiam nec velit erat. Fusce a magna id nisi lobortis rhoncus. Ut eu nisi id lectus pellentesque molestie quis sit amet lacus. Nulla ultricies lacus eu libero dictum, id fermentum sem finibus.
                </p>
                <p className="text-gray-600">
                  Aliquam erat volutpat. Donec sodales condimentum magna fringilla egestas. In non pellentesque magna, at mollis velit. Morbi nec dapibus diam.
                </p>
              </motion.div>
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/images/yoga7.jpg" 
                  alt="Ahana Yoga Studio" 
                  className="rounded-lg shadow-xl w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Mission & Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We are dedicated to promoting holistic wellness and inner peace through our specialized yoga and meditation practices.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-center">Wellness</h3>
                <p className="text-gray-600 text-center">
                  We believe in a holistic approach to wellness that nurtures the mind, body, and spirit through focused practice and mindful living.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-center">Mindfulness</h3>
                <p className="text-gray-600 text-center">
                  We teach the practice of being fully present and engaged in the moment, cultivating awareness without judgment.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-center">Balance</h3>
                <p className="text-gray-600 text-center">
                  We help you find harmony between physical strength, mental clarity, and emotional well-being for a balanced life.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
       

        {/* Our Team Section */}
        <section id="team" className="pt-20 bg-white">
          <TrainerSection />
        </section>
        
        

        {/* Testimonials Section */}
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        {/* Subscribe Section */}
        <SubscribeSection />
      </main>
    </>
  );
};

export default About;
