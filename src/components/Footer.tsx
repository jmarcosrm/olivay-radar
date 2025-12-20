import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    {
      title: "Produto",
      links: [
        { label: "Soluções", href: "/solucoes" },
        { label: "Agentes", href: "/solucoes" },
        { label: "Como funciona", href: "/solucoes" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre nós", href: "/sobre" },
        { label: "Contato", href: "/sobre" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacidade", href: "#" },
        { label: "Termos", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-bg-offwhite py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-olive-deep-1 flex items-center justify-center">
                <span className="text-text-on-dark font-semibold text-sm">O</span>
              </div>
              <span className="text-xl font-semibold tracking-headlines text-olive-deep-2">
                Olivay
              </span>
            </Link>
            <p className="text-sm text-olive-mid-3 leading-relaxed">
              Menos reação.<br />Mais controle.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-olive-deep-1 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-olive-mid-3 hover:text-olive-deep-1 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-olive-deep-2/10">
          <p className="text-micro text-olive-mid-3 text-center md:text-left">
            © {new Date().getFullYear()} Olivay. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
