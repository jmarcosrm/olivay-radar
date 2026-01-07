import { Button } from "@/components/ui/button";
import ctaBg from "@/assets/hero-banner.jpeg";

interface CTASectionProps {
  headline?: React.ReactNode;
  subheadline?: React.ReactNode;
  hasBackground?: boolean;
  removeStyling?: boolean;
}

const CTASection = ({
  headline = <>Transforme licitação em <span className="font-serif font-light">operação contínua.</span></>,
  subheadline = <>Agentes que não deixam <span className="font-serif font-light">oportunidade morrer.</span></>,
  hasBackground = true,
  removeStyling = false,
}: CTASectionProps) => {
  return (
    <section
      className="relative py-section-y-mobile md:py-section-y bg-cover bg-center bg-no-repeat"
      style={hasBackground && !removeStyling ? { backgroundImage: `url(${ctaBg})` } : {}}
    >
      {!removeStyling && <div className="absolute inset-0 bg-black/60" />}
      
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
