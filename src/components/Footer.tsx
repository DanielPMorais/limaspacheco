import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg sm:text-xl font-cormorant font-bold mb-4 text-gradient">
              Limas & Pacheco
            </h3>
            <p className="text-xs sm:text-sm text-primary-foreground/80">
              Assessoria completa de eventos no Litoral Norte de São Paulo.
              Transformamos seus sonhos em realidade.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Navegação</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Portfólio
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contato</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  (12) 99999-9999
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  contato@limasepacheco.com.br
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Litoral Norte - SP
                  <br />
                  Caraguatatuba, São Sebastião, Ubatuba
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Redes Sociais</h4>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://instagram.com/limaspacheco.assessoria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} Limas & Pacheco Assessoria. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
