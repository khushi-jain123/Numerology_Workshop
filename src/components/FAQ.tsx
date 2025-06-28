import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is the Lo Shu Grid?',
    answer: 'The Lo Shu Grid is a 4000-year-old Chinese numerological system that reveals hidden patterns in your life through your birth date. It helps decode your personality, strengths, challenges, and life path.',
  },
  {
    question: 'Do I need any prior knowledge?',
    answer: 'No prior knowledge is required! This workshop is designed for beginners and will teach you everything from scratch. All you need is your birth date and an open mind.',
  },
  {
    question: 'Is this workshop live or recorded?',
    answer: 'This is a LIVE 2-day workshop where you can interact directly with Ankiit Batra, ask questions, and get personalized guidance. The interactive format ensures maximum learning.',
  },
  {
    question: 'What if I miss a session?',
    answer: 'All sessions will be recorded and shared with participants. However, we highly recommend attending live for the interactive experience and to get your questions answered in real-time.',
  },
  {
    question: 'How long are the sessions?',
    answer: 'Each day includes 3-4 hours of intensive training with breaks. The exact schedule will be shared after registration.',
  },
  {
    question: 'What bonuses are included?',
    answer: 'You will receive a personalized Lo Shu Grid analysis, lifetime access to recordings, a digital numerology toolkit, and access to our exclusive community group.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-center text-teal-400 mb-12"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg border border-teal-500/30 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-teal-600/50 transition-colors"
            >
              <span className="text-teal font-semibold">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-teal-400" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-white leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;