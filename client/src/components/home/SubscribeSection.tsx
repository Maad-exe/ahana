import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SubscribeSection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <section 
      className="py-20 relative bg-primary" 
      style={{
        backgroundImage: `url('/images/subscribe-bg.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-primary bg-opacity-90"></div>
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center text-white relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-8">
            Sign up for our weekly newsletter to receive updates on classes, events, and special offers.
          </p>
          <form 
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            onSubmit={handleSubmit}
          >
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow py-3 px-4 rounded-full text-gray-800 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-all"
            >
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscribeSection;
