import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark";
  hover?: boolean;
  style?: CSSProperties;
}

const GlassCard = ({ 
  children, 
  className, 
  variant = "light",
  hover = false,
  style
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl transition-all duration-300",
        variant === "dark" ? "glass-card-dark" : "glass-card-light",
        hover && "hover:scale-[1.03] hover:shadow-glow-olive hover:-translate-y-1 hover:border-olive-deep-1/20 cursor-pointer",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
