import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Star, Clock, Users, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Servicos = () => {
  const services = [
    {
      title: "Assessoria Total",
      icon: Star,
      description:
        "Planejamento completo do seu evento, do conceito à execução final.",
      features: [
        "Consultoria inicial e definição de conceito",
        "Planejamento completo de cronograma",
        "Pesquisa e seleção de fornecedores",
        "Negociação de contratos",
        "Gestão de orçamento",
        "Design e decoração personalizada",
        "Coordenação do ensaio (para casamentos)",
        "Coordenação completa do dia do evento",
        "Gestão de equipe de apoio",
        "Supervisão pós-evento",
      ],
      ideal: "Casamentos, festas de debutante, bodas",
      duration: "6 a 12 meses de planejamento",
    },
    {
      title: "Assessoria Parcial",
      icon: Users,
      description:
        "Suporte estratégico em etapas específicas do seu planejamento.",
      features: [
        "Consultoria especializada sob demanda",
        "Apoio na seleção de fornecedores-chave",
        "Revisão e análise de contratos",
        "Orientação de cronograma",
        "Suporte técnico em design",
        "Checklist personalizado",
        "Reuniões de alinhamento mensais",
        "Apoio emergencial",
      ],
      ideal: "Quem já iniciou o planejamento mas precisa de expertise",
      duration: "3 a 6 meses de acompanhamento",
    },
    {
      title: "Assessoria do Dia",
      icon: Clock,
      description:
        "Coordenação completa no dia do evento para que você aproveite cada momento.",
      features: [
        "Reunião de briefing pré-evento",
        "Checklist completo de conferência",
        "Coordenação de todos os fornecedores",
        "Gestão do cronograma do dia",
        "Montagem e supervisão da decoração",
        "Resolução de imprevistos",
        "Coordenação do cerimonial",
        "Apoio aos convidados",
        "Desmontagem supervisionada",
      ],
      ideal: "Quem planejou sozinho mas quer tranquilidade no dia",
      duration: "Dia completo do evento",
    },
    {
      title: "Eventos Corporativos",
      icon: Briefcase,
      description:
        "Soluções profissionais para eventos empresariais de todos os portes.",
      features: [
        "Planejamento estratégico alinhado aos objetivos",
        "Gestão completa de logística",
        "Tecnologia e audiovisual",
        "Credenciamento e controle de acesso",
        "Coffee breaks e refeições",
        "Experiências personalizadas",
        "Gestão de palestrantes e agenda",
        "Relatório pós-evento com métricas",
        "Registro fotográfico e audiovisual",
      ],
      ideal: "Convenções, workshops, lançamentos, confraternizações",
      duration: "Conforme escopo do projeto",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nossos <span className="text-gradient">Serviços</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Soluções completas e personalizadas para tornar seu evento único e
            inesquecível
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 items-center`}
                >
                  <div className="flex-1">
                    <Card className="p-8 shadow-strong border-none bg-card">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>

                      <h2 className="text-3xl font-bold mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-accent" />
                          <span className="font-semibold">Duração:</span>
                          <span className="text-muted-foreground">
                            {service.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Star className="w-4 h-4 text-accent" />
                          <span className="font-semibold">Ideal para:</span>
                          <span className="text-muted-foreground">
                            {service.ideal}
                          </span>
                        </div>
                      </div>

                      <Link to="/contato">
                        <Button variant="hero" className="w-full group">
                          Solicitar Orçamento
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                        </Button>
                      </Link>
                    </Card>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-6">
                      O que está incluído:
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Não Encontrou o Que Procura?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Criamos soluções personalizadas para cada tipo de evento. Entre em
            contato e vamos conversar sobre suas necessidades.
          </p>
          <Link to="/contato">
            <Button variant="hero" size="lg" className="group">
              Fale Conosco
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
