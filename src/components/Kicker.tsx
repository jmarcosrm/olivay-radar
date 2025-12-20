import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface KickerProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "light";
  style?: CSSProperties;
}

const Kicker = ({ children, className, variant = "default", style }: KickerProps) => {
  return (
    <span
      className={cn(
        variant === "default" ? "kicker" : "kicker-light",
        className
      )}
      style={style}
    >
      {children}
    </span>
  );
};

export default Kicker;
