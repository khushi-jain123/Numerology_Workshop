import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeDirection: number;
      color: string;
    }> = [];

    const constellationLines: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.min(80, Math.floor(window.innerWidth / 15));
      particles.length = 0;
      
      for (let i = 0; i < particleCount; i++) {
        const colors = [`#00796B`, `#009688`, `#26A69A`, `#B2DFDB`, `#E0F7F4`];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.6 + 0.2,
          fadeDirection: Math.random() > 0.5 ? 1 : -1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      // Create constellation connections
      constellationLines.length = 0;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) +
            Math.pow(particles[i].y - particles[j].y, 2)
          );
          
          if (distance < 150 && Math.random() > 0.85) {
            constellationLines.push({
              x1: particles[i].x,
              y1: particles[i].y,
              x2: particles[j].x,
              y2: particles[j].y,
              opacity: Math.random() * 0.3 + 0.1,
            });
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw constellation lines
      constellationLines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.strokeStyle = `rgba(147, 51, 234, ${line.opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Update opacity for twinkling effect
        particle.opacity += particle.fadeDirection * 0.008;
        if (particle.opacity <= 0.1 || particle.opacity >= 0.8) {
          particle.fadeDirection *= -1;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Update constellation line positions
        constellationLines.forEach((line) => {
          if (line.x1 === particles[index].x && line.y1 === particles[index].y) {
            line.x1 = particle.x;
            line.y1 = particle.y;
          }
          if (line.x2 === particles[index].x && line.y2 === particles[index].y) {
            line.x2 = particle.x;
            line.y2 = particle.y;
          }
        });

        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw the core star
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;