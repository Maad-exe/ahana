import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SubscribeSection from '@/components/home/SubscribeSection';
import { FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';

interface TrainerProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  certifications: string[];
  socials: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

const trainers: TrainerProps[] = [
  {
    image: "/images/yoga8.jpg",
    name: "Olivia Mitchell",
    role: "Yoga Instructor",
    bio: "Olivia has been practicing yoga for over 10 years and teaching for 6. Her approach focuses on alignment and mindfulness, helping students connect with their bodies and breath. She specializes in Vinyasa and Hatha yoga, creating flows that are both challenging and accessible.",
    specialties: ["Vinyasa Flow", "Hatha Yoga", "Yoga for Beginners", "Prenatal Yoga"],
    certifications: ["500-Hour RYT Certification", "Prenatal Yoga Certification", "Yin Yoga Certification"],
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    image: "/images/spa5.jpg",
    name: "David Wilson",
    role: "Meditation Expert",
    bio: "David discovered meditation during a difficult period in his life and was transformed by its benefits. Now, with over 8 years of teaching experience, he guides others in finding peace and clarity through various meditation techniques. His classes are known for their accessibility and profound impact.",
    specialties: ["Mindfulness Meditation", "Transcendental Meditation", "Breath Work", "Sound Healing"],
    certifications: ["Mindfulness-Based Stress Reduction", "Sound Healing Certification", "Meditation Teacher Training"],
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    image: "/images/spa6.jpg",
    name: "Emma Johnson",
    role: "Wellness Coach",
    bio: "Emma combines her background in nutrition, yoga, and holistic health to offer a comprehensive approach to wellness. She believes in the power of small, sustainable changes and helps clients create balanced lifestyles that support their unique goals and needs.",
    specialties: ["Holistic Nutrition", "Stress Management", "Life Balance", "Habit Formation"],
    certifications: ["Holistic Health Coach Certification", "200-Hour RYT Certification", "Nutritional Therapy Practitioner"],
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    image: "/images/yoga4.jpg",
    name: "Michael Brown",
    role: "Yoga & Pilates Instructor",
    bio: "Michael's teaching integrates the core-strengthening principles of Pilates with the flexibility and mindfulness of yoga. His dynamic classes challenge students while maintaining a focus on proper form and breath awareness. With 7 years of teaching experience, he creates a supportive environment for all levels.",
    specialties: ["Yoga-Pilates Fusion", "Core Strength", "Power Yoga", "Flexibility Training"],
    certifications: ["300-Hour RYT Certification", "Comprehensive Pilates Certification", "Sports Yoga Certification"],
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    image: "/images/treatment1.jpg",
    name: "Jennifer Lee",
    role: "Ayurvedic Practitioner",
    bio: "Jennifer has studied traditional Ayurvedic medicine for over a decade, both in the US and India. She brings this ancient healing system to modern life through personalized consultations, workshops, and therapeutic practices. Her gentle approach helps clients find balance according to their unique constitution.",
    specialties: ["Ayurvedic Consultation", "Dosha Balancing", "Ayurvedic Nutrition", "Self-Care Rituals"],
    certifications: ["Ayurvedic Practitioner Certification", "Ayurvedic Massage Therapy", "Herbal Medicine"],
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    image: "/images/treatment2.jpg",
    name: "Robert Chen",
    role: "Tai Chi & Qigong Instructor",
    bio: "Robert has practiced Tai Chi and Qigong for over 20 years, studying with masters in China and the US. His teaching emphasizes the meditative aspects of these arts, helping students develop internal awareness while improving balance, flexibility, and energy flow. His classes are suitable for all ages and abilities.",
    specialties: ["Yang Style Tai Chi", "8 Brocades Qigong", "Five Element Qigong", "Meditation in Motion"],
    certifications: ["Traditional Yang Style Tai Chi", "Medical Qigong Practitioner", "Tai Chi for Arthritis"],
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#"
    }
  }
];

const TrainerCard: React.FC<TrainerProps> = ({ image, name, role, bio, specialties, certifications, socials }) => {
  return (
    <motion.div 
      className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <div className="h-full">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        <div className="md:w-2/3 p-6">
          <h3 className="text-2xl font-display font-bold mb-2">{name}</h3>
          <p className="text-primary font-bold mb-4">{role}</p>
          
          <p className="text-gray-700 mb-4">{bio}</p>
          
          <div className="mb-4">
            <h4 className="font-bold mb-2">Specialties:</h4>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                  {specialty}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-bold mb-2">Certifications:</h4>
            <ul className="list-disc list-inside text-gray-700">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex space-x-4">
            <a href={socials.facebook} className="text-gray-700 hover:text-primary transition-colors">
              <FacebookIcon size={20} />
            </a>
            <a href={socials.twitter} className="text-gray-700 hover:text-primary transition-colors">
              <TwitterIcon size={20} />
            </a>
            <a href={socials.instagram} className="text-gray-700 hover:text-primary transition-colors">
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Trainers: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Trainers - Ahana Yoga & Spa Center</title>
        <meta name="description" content="Meet our expert team of yoga instructors, meditation guides, and wellness coaches. Experienced professionals dedicated to your well-being and personal growth." />
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
              Our Expert Trainers
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
              Meet our dedicated team of experienced instructors who are passionate about guiding you on your wellness journey.
            </motion.p>
          </div>
        </section>

        {/* Trainers Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {trainers.map((trainer, index) => (
                <TrainerCard 
                  key={index}
                  image={trainer.image}
                  name={trainer.name}
                  role={trainer.role}
                  bio={trainer.bio}
                  specialties={trainer.specialties}
                  certifications={trainer.certifications}
                  socials={trainer.socials}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Subscribe Section */}
        <SubscribeSection />
      </main>
    </>
  );
};

export default Trainers;
