import { Button } from "@/components/ui/button";
import RadarRings from "@/components/RadarRings";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  variant?: "default" | "olive";
}

const CTASection = ({
  headline = "Transforme licitação em operação contínua.",
  subheadline = "Agentes que não deixam oportunidade morrer.",
  variant = "default",
}: CTASectionProps) => {
  const isOlive = variant === "olive";

  const bgStyle = isOlive 
    ? { background: 'linear-gradient(180deg, hsl(64 53% 14%) 0%, hsl(60 22% 13%) 100%)' }
    : { background: 'linear-gradient(180deg, hsl(60 22% 13%) 0%, hsl(35 20% 88%) 100%)' };

  return (
    <section
      className="relative py-section-y-mobile md:py-section-y overflow-hidden"
      style={bgStyle}
    >
      <RadarRings 
        variant="light" 
        ringCount={4} 
        className={isOlive ? "opacity-40" : "opacity-20"} 
      />
      
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-h2 font-semibold text-text-on-dark tracking-headlines mb-6">
            {headline}
          </h2>
          
          <p className="text-lg text-text-secondary-on-dark mb-10">
            {subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass-dark" size="pill" className="rounded-full">
              Faça seu orçamento
            </Button>
            <Button variant="glass-outline" size="pill" className="rounded-full">
              Falar com especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
