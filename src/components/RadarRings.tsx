import { cn } from "@/lib/utils";

interface RadarRingsProps {
  className?: string;
  variant?: "light" | "dark";
  ringCount?: number;
}

const RadarRings = ({ className, variant = "dark", ringCount = 5 }: RadarRingsProps) => {
  const rings = Array.from({ length: ringCount }, (_, i) => i);
  
  const baseColor = variant === "dark" 
    ? "border-olive-mid-1/15" 
    : "border-bg-white/20";
  
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Center glow */}
      <div 
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full animate-glow-breathe",
          variant === "dark" ? "bg-olive-mid-1/20" : "bg-gold-soft-1/15"
        )}
        style={{ filter: "blur(40px)" }}
      />
      
      {/* Concentric rings */}
      {rings.map((i) => (
        <div
          key={i}
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border animate-radar-pulse",
            baseColor
          )}
          style={{
            width: `${(i + 1) * 180}px`,
            height: `${(i + 1) * 180}px`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}
      
      {/* Small sparkle point */}
      <div 
        className={cn(
          "absolute w-2 h-2 rounded-full animate-float",
          variant === "dark" ? "bg-gold-soft-1/60" : "bg-gold-soft-2/80"
        )}
        style={{
          top: "35%",
          left: "60%",
          boxShadow: variant === "dark" 
            ? "0 0 12px hsl(43 61% 60% / 0.5)" 
            : "0 0 12px hsl(44 64% 65% / 0.6)",
        }}
      />
    </div>
  );
};

export default RadarRings;
