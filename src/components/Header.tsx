import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/solucoes", label: "Soluções" },
    { href: "/sobre", label: "Sobre nós" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass-card-light py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-olive-deep-1 flex items-center justify-center">
            <span className="text-text-on-dark font-semibold text-sm">O</span>
          </div>
          <span className="text-xl font-semibold tracking-headlines text-olive-deep-2">
            Olivay
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors relative",
                isActive(link.href)
                  ? "text-olive-deep-1"
                  : "text-olive-mid-3 hover:text-olive-deep-1",
                "after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-gold-soft-1 after:transition-all after:duration-300",
                isActive(link.href) ? "after:w-full" : "after:w-0 hover:after:w-full"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline-olive" size="pill-sm" className="rounded-full">
            Faça seu orçamento
          </Button>
          <Button variant="outline-olive" size="pill-sm" className="rounded-full bg-olive-deep-1 text-text-on-dark border-olive-deep-1 hover:bg-olive-deep-2">
            Pedir demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-olive-deep-1" />
          ) : (
            <Menu className="w-6 h-6 text-olive-deep-1" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-card-light border-t border-olive-deep-2/10">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-base font-medium py-2",
                  isActive(link.href)
                    ? "text-olive-deep-1"
                    : "text-olive-mid-3"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Button variant="outline-olive" size="pill" className="rounded-full w-full">
                Faça seu orçamento
              </Button>
              <Button variant="outline-olive" size="pill" className="rounded-full w-full bg-olive-deep-1 text-text-on-dark border-olive-deep-1 hover:bg-olive-deep-2">
                Pedir demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
