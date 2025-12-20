import Kicker from "@/components/Kicker";
import RadarRings from "@/components/RadarRings";

const ValueStatement = () => {
  const chips = ["Antecipação", "Previsibilidade", "Operação contínua"];

  return (
    <section className="relative py-section-y-mobile md:py-section-y overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(64 53% 14%) 0%, hsl(60 22% 13%) 100%)' }}>
      <RadarRings variant="light" ringCount={4} className="opacity-40" />
      
      {/* Soft spotlight blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-olive-mid-1/20 rounded-full blur-3xl animate-glow-breathe" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-soft-1/10 rounded-full blur-3xl animate-glow-breathe" style={{ animationDelay: "2s" }} />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Kicker variant="light" className="mb-6">
            VANTAGEM COMPETITIVA • OLIVAY
          </Kicker>
          
          <h2 className="text-h2 font-semibold text-text-on-dark leading-tight tracking-headlines mb-6">
            O mercado reage.<br />
            A Olivay antecipa.
          </h2>
          
          <p className="text-lg text-text-secondary-on-dark leading-relaxed mb-10 max-w-2xl mx-auto">
            Enquanto o modelo tradicional espera o edital aparecer, a Olivay usa agentes de IA 
            para monitorar, mapear e organizar oportunidades com antecedência.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {chips.map((chip, index) => (
              <span
                key={chip}
                className="px-5 py-2 rounded-full text-sm font-medium bg-bg-white/10 text-text-on-dark border border-bg-white/20 backdrop-blur-sm"
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
