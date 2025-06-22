import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    text: "The Lo Shu Grid completely changed my perspective on life decisions. Ankiit's teaching style is incredible!",
    rating: 5,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    name: 'Rajesh Kumar',
    text: 'I discovered hidden patterns in my life that I never knew existed. This workshop is pure gold!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    name: 'Meera Patel',
    text: 'Amazing insights! The 4000-year-old wisdom combined with modern applications is fascinating.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-purple-500/30 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full object-cover border-2 border-purple-500"
            />
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-purple-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-4 italic">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="text-purple-400 font-semibold">
                - {testimonials[currentIndex].name}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-purple-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;