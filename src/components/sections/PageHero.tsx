import Kicker from "@/components/Kicker";
import { ReactNode } from "react";
import { cn } from '@/lib/utils';
import heroCampaignBg from "@/assets/hero-campaign-bg.jpeg";

interface PageHeroProps {
  kicker?: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
  hasBackground?: boolean;
  removeStyling?: boolean;
}

const PageHero = ({ kicker, title, subtitle, children, hasBackground = true, removeStyling = false }: PageHeroProps) => {
  return (
    <section 
      className={cn(
        "relative pt-32 pb-20 md:pt-40 md:pb-28 bg-cover bg-center bg-no-repeat overflow-hidden",
        !removeStyling && "rounded-b-3xl border-b border-olive-deep-2/10"
      )}
      style={hasBackground && !removeStyling ? { backgroundImage: `url(${heroCampaignBg})` } : {}}
    >
      {!removeStyling && <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-white/60 backdrop-blur-sm" />}
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {kicker && <Kicker className="mb-6">{kicker}</Kicker>}
          <h1 className="text-h1 font-semibold text-olive-deep-1 leading-tight tracking-headlines mb-6">
            {title}
          </h1>
          <p className="text-lg text-olive-mid-3 leading-relaxed mb-8">
            {subtitle}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
