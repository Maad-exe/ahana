import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import SubscribeSection from '@/components/home/SubscribeSection';
import { schedule, scheduleFilters } from '@/data/mockData';

type DayFilter = 'all' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
type ClassFilter = 'all' | 'yoga' | 'meditation' | 'wellness' | 'pilates' | 'tai-chi';

const Schedule: React.FC = () => {
  const [dayFilter, setDayFilter] = useState<DayFilter>('all');
  const [classFilter, setClassFilter] = useState<ClassFilter>('all');

  const filteredSchedule = schedule.filter(item => {
    const matchesDay = dayFilter === 'all' || item.day.toLowerCase() === dayFilter;
    const matchesClass = classFilter === 'all' || item.type === classFilter;
    return matchesDay && matchesClass;
  });

  return (
    <>
      <Helmet>
        <title>Class Schedule - Ahana Yoga & Spa Center</title>
        <meta name="description" content="View our weekly class schedule at Ahana Yoga & Spa Center. Find the perfect yoga, meditation, or wellness class that fits your schedule and goals." />
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
              Class Schedule
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
              Find the perfect class that fits your schedule and wellness goals.
            </motion.p>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-8">
                <motion.h2 
                  className="text-3xl font-display font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Weekly Class Schedule
                </motion.h2>
                
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <select 
                    className="bg-gray-100 border border-gray-200 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                    value={classFilter}
                    onChange={(e) => setClassFilter(e.target.value as ClassFilter)}
                  >
                    <option value="all">All Classes</option>
                    {scheduleFilters.classTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                  
                  <select 
                    className="bg-gray-100 border border-gray-200 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                    value={dayFilter}
                    onChange={(e) => setDayFilter(e.target.value as DayFilter)}
                  >
                    <option value="all">All Days</option>
                    {scheduleFilters.days.map((day) => (
                      <option key={day.value} value={day.value}>{day.label}</option>
                    ))}
                  </select>
                </motion.div>
              </div>
              
              <motion.div 
                className="bg-gray-100 p-4 rounded-lg text-center text-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p>All classes are subject to change. Please check back regularly for updates or call us at +1 (800) 123-4567.</p>
              </motion.div>
            </div>
            
            {/* Schedule Table */}
            <motion.div 
              className="overflow-x-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-4 px-6 text-left font-display font-bold border-b">Time</th>
                    <th className="py-4 px-6 text-left font-display font-bold border-b">Class</th>
                    <th className="py-4 px-6 text-left font-display font-bold border-b">Instructor</th>
                    <th className="py-4 px-6 text-left font-display font-bold border-b">Duration</th>
                    <th className="py-4 px-6 text-left font-display font-bold border-b">Location</th>
                    <th className="py-4 px-6 text-center font-display font-bold border-b">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSchedule.length > 0 ? (
                    filteredSchedule.map((item, index) => (
                      <tr 
                        key={index} 
                        className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}
                      >
                        <td className="py-4 px-6 border-r">
                          <div className="font-bold">{item.time}</div>
                          <div className="text-gray-600 text-sm">{item.day}</div>
                        </td>
                        <td className="py-4 px-6 border-r">
                          <div className="font-bold">{item.class}</div>
                          <div 
                            className={`inline-block px-2 py-1 text-xs rounded-full ${
                              item.type === 'yoga' ? 'bg-blue-100 text-blue-800' :
                              item.type === 'meditation' ? 'bg-purple-100 text-purple-800' :
                              item.type === 'wellness' ? 'bg-green-100 text-green-800' : 
                              item.type === 'pilates' ? 'bg-orange-100 text-orange-800' :
                              'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </div>
                        </td>
                        <td className="py-4 px-6 border-r">
                          <div className="font-bold">{item.instructor}</div>
                        </td>
                        <td className="py-4 px-6 border-r">{item.duration}</td>
                        <td className="py-4 px-6 border-r">{item.location}</td>
                        <td className="py-4 px-6 text-center">
                          <Link href={`/classes/${item.id}`}>
                            <a className="inline-block bg-primary hover:bg-opacity-90 transition-all text-white font-bold py-2 px-4 rounded-full text-sm">
                              Book
                            </a>
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-gray-600">
                        <p className="font-bold mb-2">No classes match your filters</p>
                        <p>Try selecting different filters or <button onClick={() => { setDayFilter('all'); setClassFilter('all'); }} className="text-primary font-bold">view all classes</button>.</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </motion.div>
            
            {/* Download Schedule */}
            <div className="text-center mt-12">
              <a 
                href="#" 
                className="inline-flex items-center bg-secondary hover:bg-opacity-90 transition-all text-white font-bold py-3 px-8 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Full Schedule (PDF)
              </a>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-display font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Class Pricing
              </motion.h2>
              <motion.p 
                className="text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We offer flexible pricing options to suit your needs. Choose from drop-in sessions, class packages, or monthly memberships.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-secondary text-white p-6 text-center">
                  <h3 className="text-2xl font-display font-bold">Drop-in</h3>
                  <div className="text-4xl font-bold mt-4 mb-2">$20</div>
                  <p>Per Class</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Access to any single class</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>No commitment required</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Mat and towel service</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Locker room access</span>
                    </li>
                  </ul>
                  <div className="mt-8 text-center">
                    <Link href="/contact">
                      <a className="inline-block bg-primary hover:bg-opacity-90 transition-all text-white font-bold py-3 px-8 rounded-full">
                        Book Now
                      </a>
                    </Link>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden transform md:scale-105 z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary text-white p-6 text-center relative">
                  <div className="absolute top-0 right-0 bg-secondary text-white text-xs py-1 px-3 uppercase font-bold">Popular</div>
                  <h3 className="text-2xl font-display font-bold">10 Class Package</h3>
                  <div className="text-4xl font-bold mt-4 mb-2">$150</div>
                  <p>$15 per class</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>10 classes of your choice</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Valid for 3 months</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Mat and towel service</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Locker room access</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>25% discount on workshops</span>
                    </li>
                  </ul>
                  <div className="mt-8 text-center">
                    <Link href="/contact">
                      <a className="inline-block bg-primary hover:bg-opacity-90 transition-all text-white font-bold py-3 px-8 rounded-full">
                        Get Started
                      </a>
                    </Link>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-secondary text-white p-6 text-center">
                  <h3 className="text-2xl font-display font-bold">Monthly Unlimited</h3>
                  <div className="text-4xl font-bold mt-4 mb-2">$120</div>
                  <p>Per Month</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Unlimited classes</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Auto-renewing monthly</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Mat and towel service</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Locker room access</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>50% off spa treatments</span>
                    </li>
                  </ul>
                  <div className="mt-8 text-center">
                    <Link href="/contact">
                      <a className="inline-block bg-primary hover:bg-opacity-90 transition-all text-white font-bold py-3 px-8 rounded-full">
                        Subscribe
                      </a>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Subscribe Section */}
        <SubscribeSection />
      </main>
    </>
  );
};

export default Schedule;
