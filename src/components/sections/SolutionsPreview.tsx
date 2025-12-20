import { Link } from "react-router-dom";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Radar, GitBranch, CheckSquare, ArrowRight } from "lucide-react";

const SolutionsPreview = () => {
  const solutions = [
    {
      icon: Radar,
      title: "Agente Radar (IA)",
      description: "Detecta e organiza oportunidades antes da correria começar.",
      link: "/solucoes",
    },
    {
      icon: GitBranch,
      title: "Agente de Pipeline",
      description: "Controle, previsibilidade e timing — com histórico e rastreio.",
      link: "/solucoes",
    },
    {
      icon: CheckSquare,
      title: "Matriz de Conformidade",
      description: "Checklist inteligente para propostas limpas e rastreáveis.",
      link: "/solucoes",
    },
  ];

  return (
    <section className="py-section-y-mobile md:py-section-y bg-bg-white">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="kicker mb-4 inline-block">SOLUÇÕES</span>
          <h2 className="text-h2 font-semibold text-olive-deep-1 tracking-headlines">
            Um sistema de agentes<br />para decisões críticas.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <Link key={solution.title} to={solution.link}>
              <GlassCard 
                variant="light" 
                hover 
                className="p-6 md:p-8 h-full group"
              >
                <div 
                  className="w-14 h-14 rounded-2xl bg-olive-mid-1/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gold-soft-1/20"
                >
                  <solution.icon className="w-7 h-7 text-olive-mid-1 transition-colors group-hover:text-gold-soft-1" />
                </div>
                
                <h3 className="text-h3 font-semibold text-olive-deep-1 mb-3">
                  {solution.title}
                </h3>
                
                <p className="text-olive-mid-3 leading-relaxed mb-6">
                  {solution.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-medium text-olive-mid-1 group-hover:text-gold-soft-1 transition-colors">
                  Ver detalhes
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsPreview;
