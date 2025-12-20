import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface InfiniteMarqueeProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
}

const InfiniteMarquee = ({
  children,
  className,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
}: InfiniteMarqueeProps) => {
  const speedMap = {
    slow: "40s",
    normal: "25s",
    fast: "15s",
  };

  return (
    <div
      className={cn(
        "overflow-hidden relative",
        pauseOnHover && "hover-pause",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max",
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        )}
        style={{ animationDuration: speedMap[speed] }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
