import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";
import jaynePacheco from "@/assets/jayne-pacheco.jpeg";
import alanaLima from "@/assets/alana-lima.jpeg";
import rosanaLima from "@/assets/rosana-lima.jpeg";

const Sobre = () => {
  const team = [
    {
      image: alanaLima,
      name: "Alana Lima",
      role: "Co-fundadora & Diretora Criativa",
      description:
        "Especialista em design de eventos e decoração, com expertise em criar experiências visuais memoráveis."
    },
    {
      image: jaynePacheco,
      name: "Jayne Pacheco",
      role: "Co-fundadora & Diretora de Operações",
      description:
        "Mestre em logística e coordenação, garantindo a execução perfeita de cada detalhe.",
    },
    {
      image: rosanaLima,
      name: "Rosana Lima",
      role: "Gerente de Relacionamento",
      description:
        "Responsável por criar conexões significativas com clientes e fornecedores.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sobre <span className="text-gradient">Nós</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Somos uma assessoria de eventos apaixonada por transformar sonhos em
            realidade no Litoral Norte de São Paulo
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Nossa <span className="text-gradient">História</span>
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                A Limas & Pacheco Assessoria nasceu da visão de oferecer ao
                Litoral Norte de São Paulo uma assessoria de eventos que combina
                o alto padrão de qualidade dos grandes centros com o domínio
                profundo da logística regional.
              </p>
              <p>
                Com mais de 10 anos de experiência coletiva, nossa equipe
                identificou uma necessidade no mercado: eventos que vão do
                sofisticado ao casual, todos executados com o mesmo nível de
                excelência e atenção aos detalhes.
              </p>
              <p>
                Hoje, somos reconhecidas pela nossa capacidade de adaptação,
                profissionalismo e, principalmente, pelo cuidado genuíno que
                temos com cada cliente e cada evento que realizamos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 shadow-medium border-none bg-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-muted-foreground">
                Criar experiências únicas e memoráveis através de eventos
                impecavelmente planejados e executados, superando as expectativas
                dos nossos clientes.
              </p>
            </Card>

            <Card className="p-8 shadow-medium border-none bg-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-muted-foreground">
                Ser referência em assessoria de eventos no Litoral Norte de São
                Paulo, reconhecida pela excelência, inovação e compromisso com a
                satisfação do cliente.
              </p>
            </Card>

            <Card className="p-8 shadow-medium border-none bg-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <p className="text-muted-foreground">
                Excelência, profissionalismo, criatividade, empatia e compromisso
                com cada detalhe. Tratamos cada evento como se fosse nosso.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
            <Users className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">
              Nossa <span className="text-gradient">Equipe</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profissionais apaixonadas por eventos, dedicadas a tornar seus
              sonhos realidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="p-8 shadow-medium hover:shadow-strong transition-smooth border-none bg-card text-center"
              >
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-6 object-cover" />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-4 text-sm">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Nossos <span className="text-gradient">Diferenciais</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O que nos torna únicos no mercado de eventos do Litoral Norte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Expertise Regional",
                description:
                  "Conhecimento profundo da logística e fornecedores do Litoral Norte",
              },
              {
                title: "Versatilidade",
                description:
                  "Do evento mais sofisticado ao casual, executamos com excelência",
              },
              {
                title: "Atendimento Personalizado",
                description:
                  "Cada cliente recebe atenção exclusiva e dedicada",
              },
              {
                title: "Rede de Parceiros",
                description:
                  "Fornecedores selecionados e de confiança comprovada",
              },
              {
                title: "Gestão de Qualidade",
                description:
                  "Processos estruturados garantem excelência em cada etapa",
              },
              {
                title: "Compromisso Total",
                description:
                  "Seu evento é tratado como se fosse nosso próprio",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-soft"
              >
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
