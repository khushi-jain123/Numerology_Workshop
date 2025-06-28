import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  Star,
  Clock,
  Users,
  Award,
  BookOpen,
  Brain,
  Target,
  Gift,
  Check,
  ArrowRight,
} from 'lucide-react';
// import ParticleBackground from './components/ParticleBackground';
import CountdownTimer from './components/CountdownTimer';
import TestimonialCarousel from './components/TestimonialCarousel';
import FAQ from './components/FAQ';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Learnings', id: 'learnings' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Register', id: 'register' },
  ];

  return (
    <div className="min-h-screen bg-teal text-teal overflow-x-hidden relative">
      {/* Constellation Background */}
      <div 
        className="fixed inset-0 z-0 opacity-20"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(3px) hue-rotate(240deg) saturate(1.5)',
        }}
      />
      
      {/* <ParticleBackground /> */}

      {/* Sticky Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? 'bg-teal/90 backdrop-blur-md border-b border-teal-400/30'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Star className="w-8 h-8 text-teal-400" />
              <span className="text-xl font-bold text-teal-600">Numerology Mastery</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-teal hover:text-teal-600 transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-teal"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 py-4 border-t border-teal-600/30"
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-teal hover:text-teal-600 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 30px rgba(249, 250, 250, 0.97)',
            }}
          >
            Decode Your Life with the
            <br />
            4000-Year-Old Lo Shu Grid
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-teal-600 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Unlock the ancient secrets of Chinese numerology and discover hidden patterns
            that shape your destiny, relationships, and success in this exclusive 2-day live workshop.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 0',
  }}
>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/t4g7TgjF-DQ?si=KwUBaN70xYCAmKQ8"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>





            <button
              onClick={() => scrollToSection('register')}
              className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-600 hover:to-teal-700 text-teal font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{
                boxShadow: '0 0 30px rgba(61, 196, 219, 0.3)',
              }}
            >
              Book Your Spot for ₹97
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <p className="text-teal-600 text-lg font-semibold mb-4 animate-pulse">
              ⚡ Offer ends tonight! ⚡
            </p>
            <CountdownTimer />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6">
              Meet Your Guide
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/3"
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Ankiit Batra"
                  className="w-80 h-80 rounded-full object-cover mx-auto border-4 border-teal-500 shadow-2xl"
                  style={{
                    boxShadow: '0 0 50px rgba(255, 255, 255, 0.93)',
                  }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-600/20 to-teal-800/20"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-2/3"
            >
              <h3 className="text-3xl font-bold text-teal-600 mb-4">Ankiit Batra</h3>
              <p className="text-xl text-teal mb-6 leading-relaxed">
                Master Numerologist & Life Transformation Coach
              </p>
              <div className="space-y-4 text-teal">
                <p>
                  With over 15 years of experience in ancient numerological systems, Ankiit has
                  helped thousands of individuals unlock their true potential through the power
                  of the Lo Shu Grid.
                </p>
                <p>
                  His unique approach combines traditional Chinese wisdom with modern psychology,
                  making complex numerological concepts accessible and actionable for everyone.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-teal-600" />
                    <span>5000+ Students Guided</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-teal-600" />
                    <span>15+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-teal-600" />
                    <span>4.9/5 Rating</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learnings Section */}
      <section id="learnings" className="py-20 px-4 bg-gradient-to-b from-teal to-teal relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6">
              What You'll Master
            </h2>
            <p className="text-xl text-teal-600 max-w-3xl mx-auto">
              Comprehensive training covering all aspects of the Lo Shu Grid system
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: 'Core Numerology Principles',
                description: 'Master the fundamental concepts of the 4000-year-old Lo Shu Grid system and its mathematical foundations.',
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Personal Life Analysis',
                description: 'Learn to create and interpret your own Lo Shu Grid to understand your strengths, weaknesses, and life path.',
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: 'Relationship Compatibility',
                description: 'Discover how to analyze relationship dynamics and compatibility using numerological principles.',
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Timing & Life Cycles',
                description: 'Understand the cosmic timing for major life decisions, career moves, and personal transformations.',
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: 'Career & Business Insights',
                description: 'Apply numerology to identify ideal career paths and make strategic business decisions.',
              },
              {
                icon: <Gift className="w-8 h-8 teal-600" />,
                title: 'Advanced Techniques',
                description: 'Master advanced Lo Shu Grid applications for wealth, health, and spiritual growth analysis.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-teal to-teal p-6 rounded-xl border border-teal-600/30 hover:border-teal-600/60 transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  boxShadow: '0 10px 30px rgba(19, 88, 84, 0.97)',
                }}
              >
                <div className="text-teal-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-teal mb-3">{item.title}</h3>
                <p className="text-teal leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6">
              Exclusive Bonuses
            </h2>
            <p className="text-xl text-teal-600 max-w-3xl mx-auto">
              Valued at over ₹15,000 - Yours FREE with workshop registration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Personalized Lo Shu Grid Analysis',
                value: '₹5,000',
                description: 'Complete personal numerology reading with detailed insights and recommendations.',
                icon: <Star className="w-8 h-8" />,
              },
              {
                title: 'Lifetime Workshop Recordings',
                value: '₹3,000',
                description: 'HD recordings of all sessions for unlimited review and reference.',
                icon: <BookOpen className="w-8 h-8" />,
              },
              {
                title: 'Digital Numerology Toolkit',
                value: '₹4,000',
                description: 'Comprehensive templates, calculators, and reference guides.',
                icon: <Gift className="w-8 h-8" />,
              },
              {
                title: 'Exclusive Community Access',
                value: '₹3,000',
                description: 'Join our private community for ongoing support and advanced teachings.',
                icon: <Users className="w-8 h-8" />,
              },
            ].map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-teal-600/10 to-teal-700/10 p-6 rounded-xl border-2 border-teal-500/50 hover:border-teal-500 transition-all duration-300"
                style={{
                  boxShadow: '0 0 30px rgb(236, 241, 241)',
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-teal-400 flex-shrink-0">{bonus.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-teal">{bonus.title}</h3>
                      <span className="text-teal-600 font-bold">{bonus.value}</span>
                    </div>
                    <p className="text-gray-300">{bonus.description}</p>
                    <div className="flex items-center mt-3 text-teal-600">
                      <Check className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Included FREE</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-gradient-to-b from-teal to-teal relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6">
              What Our Students Say
            </h2>
            <p className="text-xl text-teal max-w-3xl mx-auto">
              Real transformations from real people
            </p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Register Section */}
      <section id="register" className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6">
              Secure Your Seat Today
            </h2>
            <p className="text-xl text-teal mb-8 max-w-2xl mx-auto">
              Join thousands who have transformed their lives with the ancient wisdom of numerology
            </p>

            <div className="bg-gradient-to-br from-teal to-teal p-8 rounded-2xl border-2 border-teal-600/50 mb-8 max-w-lg mx-auto">
              <div className="text-center">
                <p className="text-teal text-lg line-through mb-2">Regular Price: ₹497</p>
                <p className="text-5xl font-bold text-teal-600 mb-4">₹97</p>
                <p className="text-teal-600 font-semibold mb-4 animate-pulse">
                  Limited Time Offer - 80% OFF!
                </p>
                <CountdownTimer />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-600 hover:to-teal-700 text-teal font-bold py-6 px-12 rounded-full text-2xl shadow-2xl transition-all duration-300 mb-6 inline-flex items-center space-x-3"
              style={{
                boxShadow: '0 0 50px rgba(235, 234, 236, 0.91)',
              }}
            >
              <span>Join Now - ₹97</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>

            <div className="text-center space-y-2 teal">
              <p>✅ 30-Day Money Back Guarantee</p>
              <p>✅ Instant Access After Payment</p>
              <p>✅ All Bonuses Included</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-teal to-teal relative z-10">
        <div className="container mx-auto max-w-6xl">
          <FAQ />
        </div>
      </section>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-teal/70 to-teal/20 p-4 z-50 shadow-2xl">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-teal font-semibold">
            <span className="hidden md:inline">Limited Time: ₹97 Only - </span>
            <span className="text-sm teal-600">Offer ends tonight!</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('register')}
            className="bg-teal text-teal-600 font-bold py-2 px-6 rounded-full hover:bg-gray-900 transition-colors"
          >
            Join Now
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default App; 