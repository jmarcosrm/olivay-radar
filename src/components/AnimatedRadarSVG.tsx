const AnimatedRadarSVG = ({ className = "" }: { className?: string }) => {
  const rings = [
    { r: 40, opacity: 0.15, delay: 0 },
    { r: 70, opacity: 0.12, delay: 0.3 },
    { r: 100, opacity: 0.1, delay: 0.6 },
    { r: 130, opacity: 0.08, delay: 0.9 },
    { r: 160, opacity: 0.06, delay: 1.2 },
    { r: 190, opacity: 0.05, delay: 1.5 },
    { r: 220, opacity: 0.04, delay: 1.8 },
    { r: 250, opacity: 0.03, delay: 2.1 },
  ];

  return (
    <svg
      viewBox="0 0 500 500"
      className={`w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Radial gradient for center glow */}
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(43 65% 55%)" stopOpacity="0.6" />
          <stop offset="40%" stopColor="hsl(43 65% 55%)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="hsl(43 65% 55%)" stopOpacity="0" />
        </radialGradient>
        
        {/* Gradient for radar sweep */}
        <linearGradient id="sweepGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(64 53% 30%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(64 53% 30%)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(43 65% 55%)" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="500" height="500" fill="hsl(60 22% 96%)" />

      {/* Concentric rings with pulse animation */}
      {rings.map((ring, index) => (
        <circle
          key={index}
          cx="250"
          cy="250"
          r={ring.r}
          fill="none"
          stroke="hsl(64 53% 30%)"
          strokeWidth="1"
          opacity={ring.opacity}
          className="animate-radar-ring-pulse"
          style={{
            animationDelay: `${ring.delay}s`,
            transformOrigin: "center",
          }}
        />
      ))}

      {/* Radar sweep line */}
      <g className="animate-radar-sweep" style={{ transformOrigin: "250px 250px" }}>
        <line
          x1="250"
          y1="250"
          x2="250"
          y2="0"
          stroke="url(#sweepGradient)"
          strokeWidth="2"
        />
        {/* Sweep trail/glow */}
        <path
          d="M250,250 L250,0 A250,250 0 0,1 326,10 Z"
          fill="url(#sweepGradient)"
          opacity="0.15"
        />
      </g>

      {/* Center golden glow */}
      <circle cx="250" cy="250" r="60" fill="url(#centerGlow)" className="animate-pulse-soft" />
      
      {/* Bright center dot */}
      <circle cx="250" cy="250" r="8" fill="hsl(43 65% 55%)" opacity="0.8" className="animate-pulse-soft" />
      <circle cx="250" cy="250" r="3" fill="hsl(43 65% 75%)" opacity="1" />

      {/* Floating detection dots */}
      <circle cx="180" cy="150" r="4" fill="hsl(43 65% 55%)" opacity="0" className="animate-radar-dot" style={{ animationDelay: "0.5s" }} />
      <circle cx="320" cy="180" r="3" fill="hsl(43 65% 55%)" opacity="0" className="animate-radar-dot" style={{ animationDelay: "1.2s" }} />
      <circle cx="280" cy="320" r="4" fill="hsl(43 65% 55%)" opacity="0" className="animate-radar-dot" style={{ animationDelay: "2s" }} />
      <circle cx="150" cy="280" r="3" fill="hsl(43 65% 55%)" opacity="0" className="animate-radar-dot" style={{ animationDelay: "2.8s" }} />
    </svg>
  );
};

export default AnimatedRadarSVG;
