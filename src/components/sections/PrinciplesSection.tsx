import GlassCard from "@/components/GlassCard";
import howItWorksBg from "@/assets/how-it-works-bg.jpeg";
import { Heart, Eye, FileText, Users } from "lucide-react";

const PrinciplesSection = ({ hasBackground = true, removeStyling = false }: { hasBackground?: boolean; removeStyling?: boolean }) => {
  const principles = [
    {
      icon: Heart,
      title: "Familiaridade",
      description: <>A interface deve parecer <span className="font-serif font-light">óbvia</span>. Nada de <span className="font-serif font-light">excesso</span>.</>,
    },
    {
      icon: Eye,
      title: "Clareza",
      description: <>Menos ruído. <span className="font-serif font-light">Mais decisão.</span></>,
    },
    {
      icon: FileText,
      title: "Rastreabilidade",
      description: <>Tudo com <span className="font-serif font-light">histórico e evidência.</span></>,
    },
    {
      icon: Users,
      title: "Supervisão humana",
      description: <>IA executa. <span className="font-serif font-light">Você governa.</span></>,
    },
  ];

  return (
    <section 
      className="py-section-y-mobile md:py-section-y relative bg-cover bg-center bg-no-repeat"
      style={hasBackground && !removeStyling ? { backgroundImage: `url(${howItWorksBg})` } : {}}
    >
      {!removeStyling && <div className="absolute inset-0 bg-white/80" />}
      <div className="container relative z-10">
        <h2 className="text-h2 font-semibold text-olive-deep-1 tracking-headlines mb-12 text-center">
          Nossos <span className="font-serif font-light">princípios</span>
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle) => (
            <GlassCard
              key={principle.title}
              variant="light"
              hover
              className="p-6 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-olive-mid-1/10 flex items-center justify-center mx-auto mb-5">
                <principle.icon className="w-7 h-7 text-olive-mid-1" />
              </div>
              <h3 className="text-lg font-semibold text-olive-deep-1 mb-2">
                {principle.title}
              </h3>
              <p className="text-sm text-olive-mid-3">
                {principle.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
