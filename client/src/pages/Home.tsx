import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/HeroSection';
import AboutIntro from '@/components/home/AboutIntro';
import ServicesSection from '@/components/home/ServicesSection';
import ClassesSection from '@/components/home/ClassesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import TrainerSection from '@/components/home/TrainerSection';
import GallerySection from '@/components/home/GallerySection';
import BlogSection from '@/components/home/BlogSection';
import SubscribeSection from '@/components/home/SubscribeSection';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ahana - Yoga & Spa Center</title>
        <meta name="description" content="Find your inner peace at Ahana, a premier yoga and spa center offering a variety of classes, meditation sessions, and wellness treatments." />
      </Helmet>
      
      <main>
        <HeroSection />
        <AboutIntro />
        <ServicesSection />
        <ClassesSection />
        <TestimonialsSection />
        <TrainerSection />
        <GallerySection />
        <BlogSection />
        <SubscribeSection />
      </main>
    </>
  );
};

export default Home;
