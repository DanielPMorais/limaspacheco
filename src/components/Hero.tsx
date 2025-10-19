import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-beach-wedding.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-10 sm:pb-10 lg:pb-10 pt-20 sm:pt-20 lg:pt-25" style={{ minHeight: '100dvh' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Casamento elegante na praia do Litoral Norte de São Paulo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full border border-accent/30">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
            <span className="text-xs sm:text-sm font-medium text-accent">
              Assessoria Premium de Eventos
            </span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Transforme Seu Evento em
            <span className="block text-gradient mt-1 sm:mt-2">
              Uma Experiência Inesquecível
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Assessoria completa de eventos no Litoral Norte de São Paulo.
            Do sofisticado ao casual, realizamos seu sonho com excelência.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-1 sm:pt-2">
            <Link to="/contato">
              <Button variant="hero" size="lg" className="group">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
            <Link to="/servicos">
              <Button
                variant="outline"
                size="lg"
                className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Conheça Nossos Serviços
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent">10+</div>
              <div className="text-xs sm:text-sm text-primary-foreground/80">
                Anos de Experiência
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent">200+</div>
              <div className="text-xs sm:text-sm text-primary-foreground/80">
                Eventos Realizados
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent">100%</div>
              <div className="text-xs sm:text-sm text-primary-foreground/80">
                Satisfação
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
