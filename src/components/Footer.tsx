import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { MapPin, Phone, Mail, Linkedin, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="-mt-12">
            <div className="bg-white text-olive-deep-1 rounded-t-3xl border-t border-olive-deep-2/10 pt-12">
        <div className="container py-16 md:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Olivay Logo" className="h-12" />
            </Link>
            <p className="text-sm text-olive-mid-3 leading-relaxed mb-6">
              Arquitetos de ecossistemas tecnológicos que combinam automação inteligente e código inovador.
            </p>
            <div className="space-y-3 text-sm text-olive-mid-3">
              <p className="flex items-center gap-3"><MapPin size={16} className="text-olive-mid-1" /> Florianópolis, SC</p>
              <p className="flex items-center gap-3"><Phone size={16} className="text-olive-mid-1" /> (48) 99999-9999</p>
              <p className="flex items-center gap-3"><Mail size={16} className="text-olive-mid-1" /> contato@olivay.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-olive-deep-2/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="md:col-span-2 lg:col-span-2 text-sm text-olive-mid-3">
              <p>© {new Date().getFullYear()} Olivay. Todos os direitos reservados.</p>
              <p>CNPJ: 52.867.320/0001-47</p>
            </div>

            {/* Links */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold mb-4">SOLUÇÕES</h4>
                <ul className="space-y-3 text-sm text-olive-mid-3">
                  <li><Link to="/" className="hover:text-olive-deep-1">Revenue Engine</Link></li>
                  <li><Link to="/" className="hover:text-olive-deep-1">Agentes IA</Link></li>
                  <li><Link to="/" className="hover:text-olive-deep-1">Custom Ops</Link></li>
                  <li><Link to="/" className="hover:text-olive-deep-1">Control Room</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">EMPRESA</h4>
                <ul className="space-y-3 text-sm text-olive-mid-3">
                  <li><Link to="/" className="hover:text-olive-deep-1">Nossos Links</Link></li>
                  <li><Link to="/" className="hover:text-olive-deep-1">Contato</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">LEGAL</h4>
                <ul className="space-y-3 text-sm text-olive-mid-3">
                  <li><Link to="/" className="hover:text-olive-deep-1">Termos de Uso</Link></li>
                  <li><Link to="/" className="hover:text-olive-deep-1">Privacidade</Link></li>
                  <li><Link to="/" className="hover:text-olive-deep-1">Cookies</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">REDES SOCIAIS</h4>
                <ul className="space-y-3 text-sm text-olive-mid-3">
                  <li className="flex items-center gap-2"><Linkedin size={16} /><Link to="/" className="hover:text-olive-deep-1">LinkedIn</Link></li>
                  <li className="flex items-center gap-2"><Instagram size={16} /><Link to="/" className="hover:text-olive-deep-1">Instagram</Link></li>
                  <li className="flex items-center gap-2"><Twitter size={16} /><Link to="/" className="hover:text-olive-deep-1">Twitter</Link></li>
                  <li className="flex items-center gap-2"><Youtube size={16} /><Link to="/" className="hover:text-olive-deep-1">Youtube</Link></li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <button 
        onClick={scrollToTop} 
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-olive-mid-1 text-white flex items-center justify-center shadow-lg hover:bg-olive-deep-1 transition-colors z-50"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
