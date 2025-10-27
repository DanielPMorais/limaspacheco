import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-6 py-2 rounded-full border border-accent/30 mb-6">
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Agende uma Consulta Gratuita
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto Para Realizar Seu Evento dos Sonhos?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar sua
            visão em realidade. Atendemos todo o Litoral Norte de São Paulo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contato">
              <Button variant="hero" size="lg" className="group">
                Solicitar Orçamento Gratuito
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
            <a href="tel:+5512992541687">
              <Button
                variant="outline"
                size="lg"
                className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Ligar Agora
              </Button>
            </a>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-left">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-primary-foreground/20">
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                Atendimento Personalizado
              </h3>
              <p className="text-xs sm:text-sm text-primary-foreground/80">
                Cada cliente é único e merece atenção exclusiva
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-primary-foreground/20">
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                Experiência Comprovada
              </h3>
              <p className="text-xs sm:text-sm text-primary-foreground/80">
                Mais de 10 anos transformando eventos em memórias
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-primary-foreground/20 sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                Cobertura Regional
              </h3>
              <p className="text-xs sm:text-sm text-primary-foreground/80">
                Atuamos em todo o Litoral Norte de São Paulo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
