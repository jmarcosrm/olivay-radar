import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Kicker from "@/components/Kicker";
import GlassCard from "@/components/GlassCard";
import RadarRings from "@/components/RadarRings";
import BenefitsMarquee from "@/components/sections/BenefitsMarquee";
import CTASection from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { Radar, GitBranch, CheckSquare, ArrowRight } from "lucide-react";

const Solucoes = () => {
  const solutions = [
    {
      icon: Radar,
      tag: "Antecipação",
      title: "Agente Radar (IA)",
      description: "Publicou → detecta → organiza → alerta. A Olivay monitora portais e publicações oficiais, identificando oportunidades relevantes antes que virem urgência.",
    },
    {
      icon: GitBranch,
      tag: "Previsibilidade",
      title: "Agente de Pipeline",
      description: "Controle contínuo do funil, prazos e responsáveis. Cada oportunidade é acompanhada do início ao fim, com histórico e rastreio completo.",
    },
    {
      icon: CheckSquare,
      tag: "Rastreabilidade",
      title: "Matriz de Conformidade",
      description: "Checklist inteligente para reduzir falha e retrabalho. Documentos, declarações, anexos e prazos — tudo verificado e rastreável.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Soluções — Olivay</title>
        <meta
          name="description"
          content="Um sistema de agentes para executar tarefas do ciclo licitatório com precisão e rastreabilidade, sempre com supervisão humana."
        />
      </Helmet>
      
      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-bg-white overflow-hidden">
          <RadarRings variant="dark" ringCount={4} className="opacity-15" />
          
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Kicker className="mb-6">SOLUÇÕES OLIVAY</Kicker>
                <h1 className="text-h1 font-semibold text-olive-deep-1 leading-tight tracking-headlines mb-6">
                  Um sistema de agentes<br />para decisões críticas.
                </h1>
                <p className="text-lg text-olive-mid-3 leading-relaxed mb-8 max-w-lg">
                  Pipeline, prazos, documentos e conformidade — com tecnologia calma e institucional.
                </p>
                <Button variant="gold-soft" size="pill" className="rounded-full">
                  Pedir demo
                </Button>
              </div>
              
              <div className="hidden lg:flex justify-center">
                <div className="relative w-80 h-80">
                  <RadarRings variant="dark" ringCount={5} className="opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-olive-mid-1/10 flex items-center justify-center">
                      <Radar className="w-12 h-12 text-olive-mid-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BenefitsMarquee />

        {/* Solutions Grid */}
        <section className="py-section-y-mobile md:py-section-y bg-bg-offwhite">
          <div className="container">
            <div className="grid gap-8">
              {solutions.map((solution, index) => (
                <GlassCard
                  key={solution.title}
                  variant="light"
                  className="p-8 md:p-10"
                >
                  <div className="grid md:grid-cols-[auto,1fr,auto] gap-6 items-center">
                    <div className="w-16 h-16 rounded-2xl bg-olive-mid-1/10 flex items-center justify-center">
                      <solution.icon className="w-8 h-8 text-olive-mid-1" />
                    </div>
                    
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-micro font-medium bg-gold-soft-1/20 text-olive-mid-2 mb-3">
                        {solution.tag}
                      </span>
                      <h3 className="text-h3 font-semibold text-olive-deep-1 mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-olive-mid-3 leading-relaxed max-w-2xl">
                        {solution.description}
                      </p>
                    </div>
                    
                    <Button variant="outline-olive" size="pill-sm" className="rounded-full self-center">
                      Ver detalhes
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          variant="olive"
          headline="Menos reação. Mais controle."
          subheadline="Coloque sua operação em modo contínuo."
        />
      </Layout>
    </>
  );
};

export default Solucoes;
