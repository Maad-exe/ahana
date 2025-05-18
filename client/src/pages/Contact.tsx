import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Ahana Yoga & Spa Center</title>
        <meta name="description" content="Get in touch with Ahana Yoga & Spa Center. Contact us for class inquiries, bookings, or any questions about our services. We're here to help you on your wellness journey." />
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
              Contact Us
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
              We'd love to hear from you. Reach out with any questions or to book a class.
            </motion.p>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[400px] bg-gray-300 relative">
          {/* Replace with an actual map component if needed */}
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6305.552138209902!2d-74.00597297770993!3d40.71274577212997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDAyJzI2LjAiTiA3NMKwMDAnMzYuMCJX!5e0!3m2!1sen!2sus!4v1635186398640!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Ahana Location"
            ></iframe>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Information */}
              <div className="lg:w-1/3">
                <motion.div 
                  className="bg-gray-100 p-8 rounded-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-display font-bold mb-6">Get in Touch</h2>
                  <p className="text-gray-600 mb-8">
                    Have questions or want to book a class? Reach out to us using the contact information below or fill out the form.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-primary rounded-full p-2 text-white mr-4">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Our Location</h3>
                        <p className="text-gray-600">123 Main Street, New York, NY 10001</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary rounded-full p-2 text-white mr-4">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Phone Number</h3>
                        <p className="text-gray-600">+1 (800) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary rounded-full p-2 text-white mr-4">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Email Address</h3>
                        <p className="text-gray-600">info@ahana.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary rounded-full p-2 text-white mr-4">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Working Hours</h3>
                        <p className="text-gray-600">Mon-Sat: 8:00am - 9:00pm</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:w-2/3">
                <motion.div 
                  className="bg-white border border-gray-200 p-8 rounded-lg shadow-md"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-display font-bold mb-6">Send us a Message</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full min-h-[200px]"
                      />
                    </div>
                    
                    <div>
                      <Button 
                        type="submit" 
                        className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full"
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
