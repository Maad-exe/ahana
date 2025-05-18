import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useRoute, Link } from 'wouter';
import SubscribeSection from '@/components/home/SubscribeSection';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, MapPin, DollarSign } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const classDetails = {
  "1": {
    id: 1,
    title: "Yoga For Beginners",
    image: "/images/yoga1.svg",
    scheduleShort: "Mon, Wed, Fri",
    time: "8:00 AM - 9:30 AM",
    instructor: "Emma Wilson",
    instructorImage: "/images/instructor1.svg",
    location: "Studio A, Main Building",
    price: "$15 per class / $120 monthly",
    description: "Perfect for those new to yoga. Learn fundamental poses and breathing techniques in a supportive environment.",
    longDescription: `
      <p>This beginner-friendly class introduces the fundamentals of yoga in a supportive and nurturing environment. You'll learn essential poses (asanas), breathing techniques (pranayama), and basic alignment principles to build a strong foundation for your yoga practice.</p>
      
      <p>Our experienced instructor, Emma Wilson, will guide you step-by-step through each posture, offering modifications to accommodate different body types and abilities. This class focuses on creating awareness of breath and movement, helping you develop flexibility, strength, and balance.</p>
      
      <p>No prior experience is necessary, and all props are provided. Wear comfortable clothing that allows for movement, and bring your own mat if you have one (rentals are available).</p>
    `,
    benefits: [
      "Improved flexibility and joint mobility",
      "Increased strength and muscle tone",
      "Stress reduction and relaxation",
      "Better posture and body awareness",
      "Enhanced breathing techniques",
      "Foundation for more advanced practices"
    ],
    schedule: [
      { day: "Monday", time: "8:00 AM - 9:30 AM" },
      { day: "Wednesday", time: "8:00 AM - 9:30 AM" },
      { day: "Friday", time: "8:00 AM - 9:30 AM" }
    ]
  },
  "2": {
    id: 2,
    title: "Advanced Yoga",
    image: "/images/yoga2.svg",
    scheduleShort: "Tue, Thu",
    time: "6:00 PM - 7:30 PM",
    instructor: "Robert Chen",
    instructorImage: "/images/instructor2.svg",
    location: "Studio B, Main Building",
    price: "$18 per class / $150 monthly",
    description: "For experienced practitioners looking to deepen their practice with advanced poses and transitions.",
    longDescription: `
      <p>This advanced yoga class is designed for experienced practitioners who are looking to deepen their practice and challenge themselves. The class includes complex poses, inversions, arm balances, and intricate sequences that require a solid foundation in yoga.</p>
      
      <p>Instructor Robert Chen will guide you through powerful flows that build strength, flexibility, and concentration. You'll learn to move with precision and awareness, refining your technique and exploring the subtleties of advanced asanas.</p>
      
      <p>This class is suitable for those with at least 1-2 years of consistent yoga practice. Come prepared for an intense and rewarding experience that will take your practice to the next level.</p>
    `,
    benefits: [
      "Mastery of advanced postures and transitions",
      "Increased core strength and stability",
      "Enhanced focus and mental clarity",
      "Deeper understanding of alignment principles",
      "Improved balance and coordination",
      "Greater body awareness and control"
    ],
    schedule: [
      { day: "Tuesday", time: "6:00 PM - 7:30 PM" },
      { day: "Thursday", time: "6:00 PM - 7:30 PM" }
    ]
  },
  "3": {
    id: 3,
    title: "Meditation 101",
    image: "/images/yoga3.svg",
    scheduleShort: "Wed, Sat",
    time: "7:00 AM - 8:00 AM",
    instructor: "Sarah Johnson",
    instructorImage: "/images/instructor3.svg",
    location: "Meditation Room, East Wing",
    price: "$12 per class / $100 monthly",
    description: "Learn the fundamentals of meditation to bring mindfulness into your daily life and reduce stress.",
    longDescription: `
      <p>This foundational meditation class is perfect for beginners seeking to establish a meditation practice. You'll learn various meditation techniques, mindfulness principles, and practical strategies to quiet the mind and cultivate inner peace.</p>
      
      <p>Sarah Johnson, our experienced meditation instructor, will guide you through progressive sessions designed to make meditation accessible and enjoyable. You'll discover how to work with thoughts, emotions, and sensations, and develop skills to bring mindfulness into your everyday life.</p>
      
      <p>Each class includes guided meditation practice, gentle stretching to prepare the body, and time for questions and discussion. No previous experience is necessary, and all are welcome.</p>
    `,
    benefits: [
      "Reduced stress and anxiety",
      "Improved concentration and mental clarity",
      "Better emotional regulation",
      "Enhanced self-awareness",
      "Improved sleep quality",
      "Greater sense of calm and well-being"
    ],
    schedule: [
      { day: "Wednesday", time: "7:00 AM - 8:00 AM" },
      { day: "Saturday", time: "7:00 AM - 8:00 AM" }
    ]
  }
};

const ClassDetails: React.FC = () => {
  const [match, params] = useRoute<{ id: string }>('/classes/:id');
  const [activeTab, setActiveTab] = useState("description");
  
  if (!match) return null;
  
  const { id } = params;
  const classData = classDetails[id as keyof typeof classDetails];
  
  if (!classData) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-display font-bold mb-4">Class Not Found</h1>
        <p className="mb-8">The class you're looking for doesn't exist or has been removed.</p>
        <Link href="/classes" className="inline-block bg-primary hover:bg-opacity-90 transition-all text-white font-bold py-3 px-8 rounded-full">
          View All Classes
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{classData.title} - Ahana Yoga & Spa Center</title>
        <meta name="description" content={classData.description} />
      </Helmet>
      
      <main>
        {/* Hero Banner */}
        <section 
          className="py-32 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${classData.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1 
              className="text-4xl md:text-5xl font-display font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {classData.title}
            </motion.h1>
            <motion.div 
              className="w-20 h-1 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            ></motion.div>
            <motion.p 
              className="text-xl text-white max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {classData.description}
            </motion.p>
          </div>
        </section>

        {/* Class Details Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <Tabs defaultValue="description" className="w-full" onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="description" className="text-base">Description</TabsTrigger>
                    <TabsTrigger value="benefits" className="text-base">Benefits</TabsTrigger>
                    <TabsTrigger value="schedule" className="text-base">Schedule</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="mt-0">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-3xl font-display font-bold mb-6">About This Class</h2>
                      <div 
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: classData.longDescription }}
                      ></div>
                    </motion.div>
                  </TabsContent>
                  
                  <TabsContent value="benefits" className="mt-0">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-3xl font-display font-bold mb-6">Class Benefits</h2>
                      <ul className="space-y-4">
                        {classData.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-primary mr-3 mt-1">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </TabsContent>
                  
                  <TabsContent value="schedule" className="mt-0">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-3xl font-display font-bold mb-6">Class Schedule</h2>
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                          <thead>
                            <tr>
                              <th className="py-3 px-4 bg-gray-100 font-display font-bold text-left">Day</th>
                              <th className="py-3 px-4 bg-gray-100 font-display font-bold text-left">Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            {classData.schedule.map((item, index) => (
                              <tr key={index} className="border-b border-gray-200">
                                <td className="py-4 px-4">{item.day}</td>
                                <td className="py-4 px-4">{item.time}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="bg-gray-100 rounded-lg p-6 sticky top-24">
                  <h3 className="font-display font-bold text-xl mb-6 pb-4 border-b border-gray-300">Class Information</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-primary mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Schedule</h4>
                        <p className="text-gray-700">{classData.scheduleShort}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-primary mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Time</h4>
                        <p className="text-gray-700">{classData.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Location</h4>
                        <p className="text-gray-700">{classData.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <DollarSign className="w-5 h-5 text-primary mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Price</h4>
                        <p className="text-gray-700">{classData.price}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-6 pb-6 border-b border-gray-300">
                    <img 
                      src={classData.instructorImage} 
                      alt={classData.instructor} 
                      className="w-16 h-16 rounded-full object-cover mr-4" 
                    />
                    <div>
                      <h4 className="font-bold">Instructor</h4>
                      <p className="text-gray-700">{classData.instructor}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full bg-primary text-white py-3 rounded-full font-bold hover:bg-opacity-90">
                      Book This Class
                    </Button>
                    <Link href="/contact" className="block w-full text-center bg-transparent border-2 border-primary text-primary py-2.5 rounded-full font-bold hover:bg-primary hover:text-white transition-colors">
                      Contact Us
                    </Link>
                  </div>
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

export default ClassDetails;
