import GlassCard from "@/components/GlassCard";
import RadarRings from "@/components/RadarRings";
import valueStatementBg from "@/assets/value-statement-bg-new.jpeg";

const ManifestoSection = ({ hasBackground = true, removeStyling = false }: { hasBackground?: boolean; removeStyling?: boolean }) => {
  const manifesto = [
    <>Licitação é <span className="font-serif font-light">operação contínua</span> — não evento.</>,
    <>Clareza vence ansiedade: <span className="font-serif font-light">o fluxo precisa caber no dia a dia.</span></>,
    <><span className="font-serif font-light">Rastreabilidade e supervisão humana</span> não são opcionais.</>,
    <>Tecnologia deve ser silenciosa: <span className="font-serif font-light">aparece quando importa.</span></>,
  ];

  return (
    <section 
      className="py-section-y-mobile md:py-section-y relative bg-cover bg-center bg-no-repeat"
      style={hasBackground && !removeStyling ? { backgroundImage: `url(${valueStatementBg})` } : {}}
    >
      {!removeStyling && <div className="absolute inset-0 bg-white/80" />}
      <RadarRings variant="dark" ringCount={3} className="opacity-10" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 font-semibold text-olive-deep-1 tracking-headlines mb-10 text-center">
            Como a gente <span className="font-serif font-light">pensa</span>
          </h2>
          
          <div className="space-y-4">
            {manifesto.map((item, index) => (
              <GlassCard
                key={index}
                variant="light"
                className="p-6 flex items-center gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-olive-mid-1/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-olive-deep-1">
                    {index + 1}
                  </span>
                </div>
                <p className="text-olive-deep-1 font-medium">{item}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
