import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import howItWorks1 from "@/assets/how-it-works-1.jpeg";
import howItWorks2 from "@/assets/how-it-works-2.jpeg";
import howItWorks3 from "@/assets/how-it-works-3.jpeg";
import howItWorks4 from "@/assets/how-it-works-4.jpeg";

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const cards = [
    { image: howItWorks1, step: "01", title: "Captura e sinais", description: "A Olivay detecta publicações e movimentações relevantes para sua operação." },
    { image: howItWorks2, step: "02", title: "Qualificação", description: "O agente organiza e prioriza — você decide o que entra no foco." },
    { image: howItWorks3, step: "03", title: "Matriz de conformidade", description: "Checklist estruturado para reduzir erro e retrabalho." },
    { image: howItWorks4, step: "04", title: "Pipeline vivo", description: "Tudo em um funil contínuo — não como evento isolado." },
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

  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + cards.length) % cards.length;
    
    if (diff === 0) {
      return {
        transform: "translateX(0) scale(1)",
        zIndex: 40,
        opacity: 1,
      };
    } else if (diff === 1) {
      return {
        transform: "translateX(30px) scale(0.95)",
        zIndex: 30,
        opacity: 0.7,
      };
    } else if (diff === 2) {
      return {
        transform: "translateX(60px) scale(0.9)",
        zIndex: 20,
        opacity: 0.4,
      };
    } else {
      return {
        transform: "translateX(90px) scale(0.85)",
        zIndex: 10,
        opacity: 0.2,
      };
    }
  };

  return (
    <section className="py-section-y-mobile md:py-section-y bg-bg-offwhite relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="kicker mb-4 inline-block">COMO FUNCIONA</span>
          <h2 className="text-h2 font-semibold text-olive-deep-1 tracking-headlines">
            Da detecção à decisão
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Cards Stack */}
          <div 
            className="relative w-full max-w-[400px] h-[520px]"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {cards.map((card, index) => (
              <div
                key={card.step}
                className="absolute inset-0 transition-all duration-500 ease-out cursor-pointer"
                style={getCardStyle(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex lg:flex-col items-center gap-6">
            <button
              onClick={prevCard}
              className="w-12 h-12 rounded-full bg-olive-deep-1/10 hover:bg-olive-deep-1/20 flex items-center justify-center transition-colors group"
              aria-label="Card anterior"
            >
              <ChevronLeft className="w-5 h-5 text-olive-deep-1 group-hover:text-olive-mid-1 transition-colors lg:rotate-90" />
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
                      ? "bg-olive-deep-1 w-6 lg:w-2 lg:h-6"
                      : "bg-olive-mid-1/30 hover:bg-olive-mid-1/50"
                  )}
                  aria-label={`Ir para card ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextCard}
              className="w-12 h-12 rounded-full bg-olive-deep-1/10 hover:bg-olive-deep-1/20 flex items-center justify-center transition-colors group"
              aria-label="Próximo card"
            >
              <ChevronRight className="w-5 h-5 text-olive-deep-1 group-hover:text-olive-mid-1 transition-colors lg:rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
