import { Link } from "wouter";
import { FacebookIcon, TwitterIcon, InstagramIcon, Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <Link href="/" className="text-white font-display text-3xl font-bold">Ahana</Link>
            </div>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Heart size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-bold mb-6">Our Classes</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/classes?type=beginners" className="hover:text-primary transition-colors">
                  Yoga For Beginners
                </Link>
              </li>
              <li>
                <Link href="/classes?type=advanced" className="hover:text-primary transition-colors">
                  Advanced Yoga
                </Link>
              </li>
              <li>
                <Link href="/classes?type=meditation" className="hover:text-primary transition-colors">
                  Meditation Classes
                </Link>
              </li>
              <li>
                <Link href="/classes?type=kundalini" className="hover:text-primary transition-colors">
                  Kundalini Yoga
                </Link>
              </li>
              <li>
                <Link href="/classes?type=ashtanga" className="hover:text-primary transition-colors">
                  Ashtanga Yoga
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <span>123 Main Street, New York, NY 10001</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </span>
                <span>info@ahana.com</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </span>
                <span>Mon-Sat: 8:00am - 9:00pm</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-bold mb-6">Recent Posts</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded">
                  <img src="/images/blog1.svg" alt="Yoga post thumbnail" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">The Benefits of Yoga</h4>
                  <p className="text-gray-400 text-sm">May 20, 2023</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded">
                  <img src="/images/blog2.svg" alt="Meditation post thumbnail" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Meditation for Beginners</h4>
                  <p className="text-gray-400 text-sm">May 15, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ahana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
