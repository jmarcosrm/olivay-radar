import Kicker from "@/components/Kicker";
import AnimatedRadarSVG from "@/components/AnimatedRadarSVG";

const ValueStatement = () => {
  const chips = ["Antecipação", "Previsibilidade", "Operação contínua"];

  return (
    <section className="relative py-section-y-mobile md:py-section-y overflow-hidden bg-offwhite-1">
      {/* Animated SVG Radar Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-80">
        <div className="w-full h-full max-w-4xl max-h-4xl">
          <AnimatedRadarSVG className="w-full h-full" />
        </div>
      </div>
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-offwhite-1/40 to-offwhite-1/80" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Kicker className="mb-6">
            VANTAGEM COMPETITIVA • OLIVAY
          </Kicker>
          
          <h2 className="text-h2 font-semibold text-olive-deep-1 leading-tight tracking-headlines mb-6">
            O mercado reage.<br />
            A Olivay antecipa.
          </h2>
          
          <p className="text-lg text-olive-mid-3 leading-relaxed mb-10 max-w-2xl mx-auto">
            Enquanto o modelo tradicional espera o edital aparecer, a Olivay usa agentes de IA 
            para monitorar, mapear e organizar oportunidades com antecedência.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {chips.map((chip, index) => (
              <span
                key={chip}
                className="px-5 py-2 rounded-full text-sm font-medium bg-olive-deep-1/10 text-olive-deep-1 border border-olive-deep-1/20 backdrop-blur-sm"
                style={{ 
                  animation: "fade-in-up 0.5s ease-out forwards",
                  animationDelay: `${0.1 * (index + 1)}s`,
                  opacity: 0
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStatement;
