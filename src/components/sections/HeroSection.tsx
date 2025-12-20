import { Button } from "@/components/ui/button";
import RadarRings from "@/components/RadarRings";
import Kicker from "@/components/Kicker";
import GlassCard from "@/components/GlassCard";
import { Bell, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ background: 'linear-gradient(180deg, hsl(64 53% 14%) 0%, hsl(60 22% 13%) 100%)' }}>
      {/* Radar Rings Background */}
      <RadarRings variant="light" ringCount={6} className="opacity-60" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, hsl(64 53% 14% / 0.5) 0%, transparent 50%, hsl(60 22% 13% / 0.8) 100%)' }} />
      
      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Kicker variant="light" className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              AGENTE RADAR (IA)
            </Kicker>
            
            <h1 
              className="text-h1 font-semibold text-text-on-dark leading-tight tracking-headlines mb-6"
              style={{ animation: "fade-in-up 0.6s ease-out forwards", animationDelay: "0.2s", opacity: 0 }}
            >
              Publicou.<br />
              A Olivay já mapeou.
            </h1>
            
            <p 
              className="text-lg md:text-xl text-text-secondary-on-dark mb-4 max-w-lg mx-auto lg:mx-0"
              style={{ animation: "fade-in-up 0.6s ease-out forwards", animationDelay: "0.3s", opacity: 0 }}
            >
              Oportunidade detectada antes da sua equipe perceber.
            </p>
            
            <p 
              className="text-sm text-gold-soft-1 font-medium mb-8"
              style={{ animation: "fade-in-up 0.6s ease-out forwards", animationDelay: "0.4s", opacity: 0 }}
            >
              Menos reação. Mais controle.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              style={{ animation: "fade-in-up 0.6s ease-out forwards", animationDelay: "0.5s", opacity: 0 }}
            >
              <Button variant="gold-soft" size="pill" className="rounded-full">
                Pedir demo
              </Button>
              <Button variant="glass-outline" size="pill" className="rounded-full">
                Ver soluções
              </Button>
            </div>
          </div>
          
          {/* Right Content - Floating UI Cards */}
          <div className="relative h-[400px] md:h-[500px] hidden lg:block">
            {/* Main Stats Card */}
            <GlassCard 
              variant="dark" 
              className="absolute top-12 right-8 p-5 animate-float"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-soft-1/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-gold-soft-1" />
                </div>
                <div>
                  <p className="text-micro text-text-secondary-on-dark">Oportunidades</p>
                  <p className="text-2xl font-semibold text-text-on-dark">+247</p>
                </div>
              </div>
            </GlassCard>
            
            {/* Toast Notification */}
            <div 
              className="toast-card absolute top-32 right-48 flex items-center gap-3 animate-float-alt"
            >
              <div className="w-8 h-8 rounded-lg bg-gold-soft-1/20 flex items-center justify-center">
                <Bell className="w-4 h-4 text-gold-soft-1" />
              </div>
              <div>
                <p className="text-micro font-medium text-olive-mid-3">Nova Oportunidade</p>
                <p className="text-sm font-semibold text-olive-deep-1">#84729</p>
              </div>
            </div>
            
            {/* Pipeline Status */}
            <GlassCard 
              variant="dark" 
              className="absolute bottom-24 right-4 p-5 animate-float-delayed"
            >
              <p className="text-micro text-text-secondary-on-dark mb-3">Pipeline Ativo</p>
              <div className="flex gap-2">
                {["Detectada", "Qualificada", "Proposta"].map((stage, i) => (
                  <span 
                    key={stage}
                    className="px-3 py-1 rounded-full text-micro font-medium bg-olive-mid-1/30 text-text-on-dark"
                  >
                    {stage}
                  </span>
                ))}
              </div>
            </GlassCard>
            
            {/* Conformidade Badge */}
            <GlassCard 
              variant="dark" 
              className="absolute bottom-8 left-8 p-4 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gold-soft-1 animate-glow-breathe" />
                <p className="text-sm text-text-on-dark font-medium">Conformidade OK</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, hsl(35 20% 88%) 0%, transparent 100%)' }} />
    </section>
  );
};

export default HeroSection;
