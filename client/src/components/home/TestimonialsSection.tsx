import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialProps {
  id: number;
  image: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    image: "/images/testimonial1.svg",
    name: "Jennifer Lawrence",
    role: "Yoga Student",
    content: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.\"",
    rating: 5
  },
  {
    id: 2,
    image: "/images/testimonial2.svg",
    name: "Michael Johnson",
    role: "Meditation Client",
    content: "\"Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"",
    rating: 5
  },
  {
    id: 3,
    image: "/images/testimonial3.svg",
    name: "Sophia Williams",
    role: "Wellness Member",
    content: "\"Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.\"",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

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
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque.
          </p>
        </motion.div>
        
        <div className="testimonial-slider relative h-auto min-h-[300px]">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`absolute w-full transition-opacity duration-500 ${
                index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/4 flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-24 h-24 object-cover rounded-full mx-auto" 
                    />
                  </div>
                  <div className="md:w-3/4">
                    <div className="flex mb-3 text-primary">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="fill-current" size={16} />
                      ))}
                    </div>
                    <p className="italic text-gray-700 mb-4">{testimonial.content}</p>
                    <h4 className="font-display font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === activeSlide ? 'bg-primary' : 'bg-gray-300'}`}
              onClick={() => setActiveSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
