import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import howItWorks1 from "@/assets/how-it-works-1.png";
import howItWorks2 from "@/assets/how-it-works-2.png";
import howItWorks3 from "@/assets/how-it-works-3.png";
import howItWorks4 from "@/assets/how-it-works-4.png";
import bgImage from "@/assets/Animar_o_cone_202512231416.gif";


const HowItWorks = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const cards = [
    { image: howItWorks1 },
    { image: howItWorks2 },
    { image: howItWorks3 },
    { image: howItWorks4 },
  ];

  
  return (
    <section className="py-section-y-mobile md:py-section-y relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-white/80" />
      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-h2 font-semibold text-olive-deep-1 tracking-headlines">
            Da detecção <span className="font-serif font-light">à decisão</span>
          </h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {cards.map((card, index) => (
              <div className="flex-grow-0 flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/3 min-w-0" key={index}>
                <img src={card.image} alt={`Passo ${index + 1}`} className="w-full h-auto object-contain rounded-2xl shadow-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
