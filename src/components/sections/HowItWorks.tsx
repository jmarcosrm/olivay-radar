import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import howItWorks1 from "@/assets/how-it-works-1.png";
import howItWorks2 from "@/assets/how-it-works-2.png";
import howItWorks3 from "@/assets/how-it-works-3.png";
import howItWorks4 from "@/assets/how-it-works-4.png";

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const cards = [
    { image: howItWorks1 },
    { image: howItWorks2 },
    { image: howItWorks3 },
    { image: howItWorks4 },
  ];

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  }, [cards.length]);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  }, [cards.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextCard, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextCard]);

  const getCardStyle = (index: number, isDesktop: boolean) => {
    const diff = (index - activeIndex + cards.length) % cards.length;
    const spacing = isDesktop ? 60 : 25;
    
    if (diff === 0) {
      return {
        transform: "translateX(0) scale(1)",
        zIndex: 40,
        opacity: 1,
      };
    } else if (diff === 1) {
      return {
        transform: `translateX(${spacing}px) scale(0.94)`,
        zIndex: 30,
        opacity: 0.7,
      };
    } else if (diff === 2) {
      return {
        transform: `translateX(${spacing * 2}px) scale(0.88)`,
        zIndex: 20,
        opacity: 0.4,
      };
    } else {
      return {
        transform: `translateX(${spacing * 3}px) scale(0.82)`,
        zIndex: 10,
        opacity: 0.2,
      };
    }
  };

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <section className="py-section-y-mobile md:py-section-y bg-bg-offwhite relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="kicker mb-4 inline-block">COMO FUNCIONA</span>
          <h2 className="text-h2 font-semibold text-olive-deep-1 tracking-headlines">
            Da detecção à decisão
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Cards Stack */}
          <div 
            className="relative w-full max-w-[380px] aspect-[3/4]"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-all duration-500 ease-out cursor-pointer"
                style={getCardStyle(index, isDesktop)}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={card.image}
                  alt={`Passo ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex lg:flex-col items-center gap-6">
            <button
              onClick={prevCard}
              className="w-10 h-10 rounded-full bg-olive-deep-1/5 hover:bg-olive-deep-1/10 flex items-center justify-center transition-colors group"
              aria-label="Card anterior"
            >
              <ChevronLeft className="w-4 h-4 text-olive-mid-1 group-hover:text-olive-deep-1 transition-colors lg:rotate-90" />
            </button>

            {/* Dots indicator */}
            <div className="flex lg:flex-col gap-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "bg-olive-deep-1 w-5 lg:w-2 lg:h-5"
                      : "bg-olive-mid-1/20 hover:bg-olive-mid-1/40"
                  )}
                  aria-label={`Ir para card ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextCard}
              className="w-10 h-10 rounded-full bg-olive-deep-1/5 hover:bg-olive-deep-1/10 flex items-center justify-center transition-colors group"
              aria-label="Próximo card"
            >
              <ChevronRight className="w-4 h-4 text-olive-mid-1 group-hover:text-olive-deep-1 transition-colors lg:rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
