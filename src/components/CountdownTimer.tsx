import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to tomorrow night (for demo purposes)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 1);
    targetDate.setHours(23, 59, 59, 999);

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center space-x-4 md:space-x-8 my-8">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg p-4 shadow-lg border border-purple-400/30">
            <motion.div
              key={unit.value}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-white"
            >
              {unit.value.toString().padStart(2, '0')}
            </motion.div>
            <div className="text-xs md:text-sm text-white/80 font-medium">
              {unit.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;