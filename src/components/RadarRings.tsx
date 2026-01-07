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
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full animate-glow-breathe",
          variant === "dark" ? "bg-olive-mid-1/25" : "bg-olive-mid-1/20"
        )}
        style={{ filter: "blur(50px)" }}
      />
      
      {/* Rotating scan line */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-radar-scan"
        style={{
          width: `${ringCount * 180}px`,
          height: `${ringCount * 180}px`,
        }}
      >
        <div 
          className={cn(
            "absolute top-1/2 left-1/2 w-1/2 h-0.5 origin-left",
            variant === "dark" 
              ? "bg-gradient-to-r from-olive-mid-1/40 to-transparent" 
              : "bg-gradient-to-r from-bg-white/50 to-transparent"
          )}
        />
      </div>
      
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
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}
      
      {/* Multiple sparkle points */}
      <div 
        className={cn(
          "absolute w-2 h-2 rounded-full animate-sparkle",
          variant === "dark" ? "bg-olive-mid-1/70" : "bg-bg-white/90"
        )}
        style={{
          top: "35%",
          left: "60%",
          boxShadow: variant === "dark" 
            ? "0 0 16px hsl(var(--olive-mid-1) / 0.6)" 
            : "0 0 16px hsl(var(--bg-white) / 0.7)",
        }}
      />
      
      <div 
        className={cn(
          "absolute w-1.5 h-1.5 rounded-full animate-sparkle",
          variant === "dark" ? "bg-olive-mid-1/50" : "bg-bg-white/70"
        )}
        style={{
          top: "55%",
          left: "35%",
          animationDelay: "1s",
          boxShadow: variant === "dark" 
            ? "0 0 12px hsl(var(--olive-mid-1) / 0.4)" 
            : "0 0 12px hsl(var(--bg-white) / 0.5)",
        }}
      />
      
      <div 
        className={cn(
          "absolute w-1 h-1 rounded-full animate-sparkle",
          variant === "dark" ? "bg-olive-mid-1/40" : "bg-bg-white/60"
        )}
        style={{
          top: "25%",
          left: "40%",
          animationDelay: "2s",
          boxShadow: variant === "dark" 
            ? "0 0 8px hsl(var(--olive-mid-1) / 0.3)" 
            : "0 0 8px hsl(var(--bg-white) / 0.4)",
        }}
      />
    </div>
  );
};

export default RadarRings;
