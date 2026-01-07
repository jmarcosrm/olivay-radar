import { Button } from "@/components/ui/button";
import RadarRings from "@/components/RadarRings";
import Kicker from "@/components/Kicker";
import GlassCard from "@/components/GlassCard";
import heroBg1 from "@/assets/Generated Image December 23, 2025 - 11_14AM (1).jpeg";
import heroBg2 from "@/assets/Generated Image December 23, 2025 - 11_18AM.jpeg";
import heroBg3 from "@/assets/Generated Image December 23, 2025 - 11_28AM.jpeg";
const heroImages = [heroBg1, heroBg2, heroBg3];
import { Bell, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 rounded-b-3xl border border-olive-deep-2/10 shadow-lg">
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </AnimatePresence>
      {/* Radar Rings Background */}
      <RadarRings />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-white/60 backdrop-blur-sm" />
      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-center justify-center">
          {/* Content */}
        </div>
      </div>
      
          </section>
  );
};

export default HeroSection;
