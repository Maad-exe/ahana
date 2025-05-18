import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-secondary shadow-lg" : ""
    )}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="logo">
          <Link href="/" className="text-white">
            <img src="/images/logo.png" alt="Ahana Logo" className="h-10" />
          </Link>
        </div>
        
        <nav className="hidden lg:flex">
          <ul className="flex space-x-8 text-white">
            <li>
              <Link href="/" className={cn("nav-link font-bold", isActive("/") && "after:w-full")}>Home</Link>
            </li>
            <li className="dropdown-container relative">
              <Link href="/about" className={cn("nav-link font-bold", isActive("/about") && "after:w-full")}>About</Link>
              <div className="dropdown rounded-md py-2">
                <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary">Our Story</Link>
                <Link href="/about#team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary">Our Team</Link>
                <Link href="/about#testimonials" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary">Testimonials</Link>
              </div>
            </li>
            <li className="dropdown-container relative">
              <Link href="/classes" className={cn("nav-link font-bold", isActive("/classes") && "after:w-full")}>Classes</Link>
              <div className="dropdown rounded-md py-2">
                <Link href="/classes?type=yoga" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary">Yoga Classes</Link>
                <Link href="/classes?type=meditation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary">Meditation</Link>
                <Link href="/schedule" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary">Schedule</Link>
              </div>
            </li>
            <li>
              <Link href="/trainers" className={cn("nav-link font-bold", isActive("/trainers") && "after:w-full")}>Trainers</Link>
            </li>
            <li>
              <Link href="/gallery" className={cn("nav-link font-bold", isActive("/gallery") && "after:w-full")}>Gallery</Link>
            </li>
            <li>
              <Link href="/blog" className={cn("nav-link font-bold", isActive("/blog") && "after:w-full")}>Blog</Link>
            </li>
            <li>
              <Link href="/contact" className={cn("nav-link font-bold", isActive("/contact") && "after:w-full")}>Contact</Link>
            </li>
          </ul>
        </nav>
        
        <div className="lg:hidden">
          <button className="text-white" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "mobile-menu bg-white shadow-lg w-full absolute top-full left-0",
        isMobileMenuOpen ? "block" : "hidden"
      )}>
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="block py-2 font-bold text-secondary hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 font-bold text-secondary hover:text-primary">
                About
              </Link>
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <Link href="/about" className="block py-1 text-gray-700 hover:text-primary">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/about#team" className="block py-1 text-gray-700 hover:text-primary">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/about#testimonials" className="block py-1 text-gray-700 hover:text-primary">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/classes" className="block py-2 font-bold text-secondary hover:text-primary">
                Classes
              </Link>
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <Link href="/classes?type=yoga" className="block py-1 text-gray-700 hover:text-primary">
                    Yoga Classes
                  </Link>
                </li>
                <li>
                  <Link href="/classes?type=meditation" className="block py-1 text-gray-700 hover:text-primary">
                    Meditation
                  </Link>
                </li>
                <li>
                  <Link href="/schedule" className="block py-1 text-gray-700 hover:text-primary">
                    Schedule
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/trainers" className="block py-2 font-bold text-secondary hover:text-primary">
                Trainers
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="block py-2 font-bold text-secondary hover:text-primary">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block py-2 font-bold text-secondary hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 font-bold text-secondary hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
