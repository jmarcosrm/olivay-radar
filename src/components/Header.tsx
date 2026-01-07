import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

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
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-10">
          <img src={logo} alt="Olivay Logo" className="h-12" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <nav
            className={cn(
              "flex items-center gap-8 px-8 py-2 rounded-full transition-all duration-300",
              isScrolled && "glass-card-dark"
            )}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative text-white",
                  isActive(link.href)
                    ? "text-white"
                    : "text-white hover:text-white/80",
                  "after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300",
                  isActive(link.href) ? "after:w-full" : "after:w-0 hover:after:w-full"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-3 z-10">
          <Button variant="olive-solid" size="pill-sm" className="rounded-full">
            Faça seu orçamento
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
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
