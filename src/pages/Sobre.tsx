import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Kicker from "@/components/Kicker";
import GlassCard from "@/components/GlassCard";
import RadarRings from "@/components/RadarRings";
import CTASection from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { Heart, Eye, FileText, Users } from "lucide-react";

const Sobre = () => {
  const principles = [
    {
      icon: Heart,
      title: "Familiaridade",
      description: "A interface deve parecer óbvia. Nada de excesso.",
    },
    {
      icon: Eye,
      title: "Clareza",
      description: "Menos ruído. Mais decisão.",
    },
    {
      icon: FileText,
      title: "Rastreabilidade",
      description: "Tudo com histórico e evidência.",
    },
    {
      icon: Users,
      title: "Supervisão humana",
      description: "IA executa. Você governa.",
    },
  ];

  const manifesto = [
    "Licitação é operação contínua — não evento.",
    "Clareza vence ansiedade: o fluxo precisa caber no dia a dia.",
    "Rastreabilidade e supervisão humana não são opcionais.",
    "Tecnologia deve ser silenciosa: aparece quando importa.",
  ];

  return (
    <>
      <Helmet>
        <title>Sobre — Olivay</title>
        <meta
          name="description"
          content="Tecnologia para ciclos longos e decisões críticas. Criamos agentes de IA para operações institucionais com rastreabilidade e supervisão humana."
        />
      </Helmet>
      
      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-bg-offwhite overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-bg-white/50 to-bg-offwhite" />
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Kicker className="mb-6">SOBRE A OLIVAY</Kicker>
              <h1 className="text-h1 font-semibold text-olive-deep-1 leading-tight tracking-headlines mb-6">
                Tecnologia para ciclos longos<br />e decisões críticas.
              </h1>
              <p className="text-lg text-olive-mid-3 leading-relaxed mb-8">
                Agentes para relacionamento e execução institucional — com histórico e compliance.
              </p>
              <Button variant="gold-soft" size="pill" className="rounded-full">
                Falar com a Olivay
              </Button>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <section className="py-section-y-mobile md:py-section-y bg-bg-white relative overflow-hidden">
          <RadarRings variant="dark" ringCount={3} className="opacity-10" />
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-h2 font-semibold text-olive-deep-1 tracking-headlines mb-10 text-center">
                Como a gente pensa
              </h2>
              
              <div className="space-y-4">
                {manifesto.map((item, index) => (
                  <GlassCard
                    key={index}
                    variant="light"
                    className="p-6 flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-gold-soft-1/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-gold-soft-1">
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

        {/* Principles */}
        <section className="py-section-y-mobile md:py-section-y bg-bg-offwhite">
          <div className="container">
            <h2 className="text-h2 font-semibold text-olive-deep-1 tracking-headlines mb-12 text-center">
              Nossos princípios
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

        <CTASection
          headline="Vamos colocar sua operação em modo contínuo?"
          subheadline="A Olivay organiza o ciclo. Sua equipe foca no que importa."
        />
      </Layout>
    </>
  );
};

export default Sobre;
