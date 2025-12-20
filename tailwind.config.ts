import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1160px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'h1': 'clamp(40px, 4.6vw, 64px)',
        'h2': 'clamp(28px, 3.2vw, 44px)',
        'h3': 'clamp(20px, 2.2vw, 28px)',
        'body': '16px',
        'small': '14px',
        'micro': '12px',
      },
      letterSpacing: {
        'headlines': '-0.02em',
        'labels': '0.02em',
        'micro': '0.04em',
      },
      lineHeight: {
        'tight': '1.05',
        'normal': '1.35',
        'relaxed': '1.55',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Olivay Brand Colors
        'bg-white': "hsl(var(--bg-white))",
        'bg-offwhite': "hsl(var(--bg-offwhite))",
        'bg-mist': "hsl(var(--bg-mist))",
        
        olive: {
          deep: {
            1: "hsl(var(--olive-deep-1))",
            2: "hsl(var(--olive-deep-2))",
          },
          mid: {
            1: "hsl(var(--olive-mid-1))",
            2: "hsl(var(--olive-mid-2))",
            3: "hsl(var(--olive-mid-3))",
          },
        },
        
        sand: {
          1: "hsl(var(--sand-1))",
          2: "hsl(var(--sand-2))",
        },
        
        gold: {
          soft: {
            1: "hsl(var(--gold-soft-1))",
            2: "hsl(var(--gold-soft-2))",
          },
        },
        
        'text-primary': "hsl(var(--text-primary))",
        'text-secondary': "hsl(var(--text-secondary))",
        'text-on-dark': "hsl(var(--text-on-dark))",
        'text-secondary-on-dark': "hsl(var(--text-secondary-on-dark))",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        'soft': '0 8px 32px hsl(var(--shadow-soft))',
        'glow-gold': '0 0 40px hsl(var(--glow-gold))',
        'glow-olive': '0 0 40px hsl(var(--glow-olive))',
      },
      backdropBlur: {
        'glass': '16px',
        'glow': '28px',
      },
      spacing: {
        'section-y': '104px',
        'section-y-mobile': '72px',
        'gutter': '24px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "radar-pulse": {
          "0%, 100%": { opacity: "0.15", transform: "scale(1)" },
          "50%": { opacity: "0.25", transform: "scale(1.02)" },
        },
        "glow-breathe": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.5" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "float": "float 4.2s ease-in-out infinite",
        "radar-pulse": "radar-pulse 6s ease-in-out infinite",
        "glow-breathe": "glow-breathe 4s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
