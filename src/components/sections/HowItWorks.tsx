import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import RadarRings from "@/components/RadarRings";
import { cn } from "@/lib/utils";
import { Radar, Users, CheckCircle, GitBranch } from "lucide-react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Radar,
      title: "Captura e sinais",
      description: "A Olivay detecta publicações e movimentações relevantes para sua operação.",
    },
    {
      icon: Users,
      title: "Qualificação",
      description: "O agente organiza e prioriza — você decide o que entra no foco.",
    },
    {
      icon: CheckCircle,
      title: "Matriz de conformidade",
      description: "Checklist estruturado para reduzir erro e retrabalho.",
    },
    {
      icon: GitBranch,
      title: "Pipeline vivo",
      description: "Tudo em um funil contínuo — não como evento isolado.",
    },
  ];

  return (
    <section className="py-section-y-mobile md:py-section-y bg-bg-offwhite relative overflow-hidden">
      {/* Subtle radar motif */}
      <RadarRings variant="dark" ringCount={3} className="opacity-20" />
      
      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="kicker mb-4 inline-block">COMO FUNCIONA</span>
          <h2 className="text-h2 font-semibold text-olive-deep-1 tracking-headlines">
            Da detecção à decisão
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps List */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                onClick={() => setActiveStep(index)}
                className={cn(
                  "p-5 rounded-xl cursor-pointer transition-all duration-300",
                  activeStep === index
                    ? "bg-olive-deep-1 text-text-on-dark shadow-soft"
                    : "bg-transparent hover:bg-olive-mid-1/10"
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors",
                      activeStep === index
                        ? "bg-gold-soft-1/20"
                        : "bg-olive-mid-1/10"
                    )}
                  >
                    <step.icon
                      className={cn(
                        "w-5 h-5 transition-colors",
                        activeStep === index ? "text-gold-soft-1" : "text-olive-mid-1"
                      )}
                    />
                  </div>
                  <div>
                    <h4
                      className={cn(
                        "font-semibold mb-1 transition-colors",
                        activeStep === index ? "text-text-on-dark" : "text-olive-deep-1"
                      )}
                    >
                      {step.title}
                    </h4>
                    <p
                      className={cn(
                        "text-sm leading-relaxed transition-colors",
                        activeStep === index
                          ? "text-text-secondary-on-dark"
                          : "text-olive-mid-3"
                      )}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Display */}
          <div className="relative h-[400px] hidden lg:flex items-center justify-center">
            <GlassCard variant="light" className="w-full h-full p-8 relative overflow-hidden">
              <RadarRings 
                variant="dark" 
                ringCount={4} 
                className="opacity-30"
              />
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className={cn(
                      "absolute inset-0 flex flex-col items-center justify-center transition-all duration-500",
                      activeStep === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    )}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-olive-mid-1/10 flex items-center justify-center mb-6">
                      <step.icon className="w-10 h-10 text-olive-mid-1" />
                    </div>
                    <h3 className="text-2xl font-semibold text-olive-deep-1 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-olive-mid-3 max-w-sm">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
