import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Assessoria Total",
    description:
      "Planejamento completo do seu evento, do conceito à execução final.",
    features: [
      "Planejamento completo",
      "Seleção de fornecedores",
      "Coordenação do dia",
      "Gestão de cronograma",
      "Decoração personalizada",
    ],
    ideal: "Ideal para casamentos e grandes celebrações",
  },
  {
    title: "Assessoria Parcial",
    description:
      "Suporte estratégico em etapas específicas do seu planejamento.",
    features: [
      "Consultoria especializada",
      "Apoio na seleção de fornecedores",
      "Revisão de contratos",
      "Orientação de cronograma",
      "Suporte técnico",
    ],
    ideal: "Ideal para quem já iniciou o planejamento",
  },
  {
    title: "Assessoria do Dia",
    description: "Coordenação completa no dia do evento para que você aproveite cada momento.",
    features: [
      "Coordenação de fornecedores",
      "Gestão do cronograma",
      "Resolução de imprevistos",
      "Coordenação cerimonial",
      "Apoio aos convidados",
    ],
    ideal: "Ideal para quem planejou tudo sozinho",
  },
  {
    title: "Eventos Corporativos",
    description:
      "Soluções profissionais para eventos empresariais de todos os portes.",
    features: [
      "Planejamento estratégico",
      "Gestão de logística",
      "Tecnologia e audiovisual",
      "Credenciamento",
      "Pós-evento e relatórios",
    ],
    ideal: "Ideal para empresas e organizações",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Oferecemos soluções completas e personalizadas para tornar seu
            evento único e memorável
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`p-6 sm:p-8 shadow-medium hover:shadow-strong transition-smooth border-none bg-card animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border">
                <p className="text-xs sm:text-sm font-medium text-accent">{service.ideal}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/servicos">
            <Button variant="hero" size="lg" className="group">
              Ver Detalhes dos Serviços
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
