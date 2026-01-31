import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';
import { useIsMobile } from '../hooks/use-mobile';
const HeroSection = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [opacity, setOpacity] = useState(1);
  const isMobile = useIsMobile();
  const phrases = ['Developer', 'Problem Solver', 'CS Student'];
  const fullPhrase = phrases[loopNum % phrases.length];
  useEffect(() => {
    const typeWriter = () => {
      if (isDeleting) {
        setText(fullPhrase.substring(0, text.length - 1));
        setTypingSpeed(80); // faster when deleting
      } else {
        setText(fullPhrase.substring(0, text.length + 1));
        setTypingSpeed(150); // normal speed when typing
      }
      if (!isDeleting && text === fullPhrase) {
        setIsDeleting(true);
        setTypingSpeed(1500); // pause at the end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // pause before starting next word
      }
    };
    const timer = setTimeout(typeWriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, fullPhrase, typingSpeed]);

  // Add scroll effect to make the background image dull
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 500; // Adjust based on when you want full effect
      const newOpacity = Math.max(0.3, 1 - scrollPosition / maxScroll);
      setOpacity(newOpacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section id="home" className="relative min-h-screen flex items-center pt-16 bg-black">
      {/* Background image with dynamic opacity */}
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300" style={{
      backgroundImage: `url(https://i.postimg.cc/vZtRgFP6/gigapixel-11.jpg)`,
      opacity: opacity,
      filter: 'brightness(1.9)',
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          
          
          <div className="md:order-1 max-w-3xl text-center md:text-left">
            <h3 className="text-amber-400 font-medium mb-2">Hi, I'm</h3>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Aaditya Varshney
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-300 mb-6 h-14">
              I'm a <span className="text-amber-400">{text}</span>
              <span className="text-amber-400 animate-blink">|</span>
            </h2>
            <p className="text-gray-300 text-xl mb-8 max-w-2xl">
              A Computer Science student passionate about technology, problem-solving, 
              and continuous learning. I specialize in programming, data analysis, 
              and building innovative solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="bg-amber-400 hover:bg-amber-500 text-black font-medium" asChild>
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 font-bold text-base shadow-lg bg-gray-900/60 border-2" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;