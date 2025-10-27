import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioDetails from "@/components/PortfolioDetails";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import weddingDetail from "@/assets/wedding-detail.jpg";
import corporateEvent from "@/assets/corporate-event.jpg";
import casualCelebration from "@/assets/casual-celebration.jpg";
import heroBeachWedding from "@/assets/hero-beach-wedding.jpg";

const PortfolioPage = () => {
  const [filter, setFilter] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ["Todos", "Casamentos", "Corporativo", "Sociais", "Religiosos"];

  const portfolioItems = [
    {
      title: "Casamento na Praia - São Sebastião",
      category: "Casamentos",
      image: heroBeachWedding,
      description: "Cerimônia ao pôr do sol com 150 convidados",
      details:
        "Assessoria completa para casamento à beira-mar em São Sebastião. Gestão logística especializada para lidar com os desafios costeiros, incluindo coordenação de fornecedores locais e controle de contingências climáticas.",
    },
    {
      title: "Recepção Elegante - Caraguatatuba",
      category: "Casamentos",
      image: weddingDetail,
      description: "Decoração sofisticada com metodologia de taxa fixa",
      details:
        "Execução impecável de recepção com transparência total no orçamento. Aplicação da metodologia exclusiva de gestão de risco, garantindo tranquilidade completa para os noivos.",
    },
    {
      title: "Convenção Empresarial - Ubatuba",
      category: "Corporativo",
      image: corporateEvent,
      description: "Evento corporativo estratégico para 200 executivos",
      details:
        "Gestão completa de convenção empresarial com foco em resultados. Aplicação do Manual de Logística Costeira para garantir execução sem falhas em ambiente corporativo de alto padrão.",
    },
    {
      title: "Aniversário de Debutante - Caraguatatuba",
      category: "Sociais",
      image: casualCelebration,
      description: "Festa de 15 anos com 100 convidados",
      details:
        "Celebração social personalizada aplicando a metodologia híbrida e adaptável. Atendimento desde eventos sofisticados até celebrações casuais, sempre mantendo o mesmo padrão de excelência.",
    },
    {
      title: "Casamento Intimista - Ubatuba",
      category: "Casamentos",
      image: heroBeachWedding,
      description: "Cerimônia para 50 convidados em local paradisíaco",
      details:
        "Assessoria do dia do evento com coordenação das três diretoras em campo. Rosana liderando operações, Alana no suporte estratégico e Jayne na gestão financeira de emergência.",
    },
    {
      title: "Lançamento de Produto Corporativo",
      category: "Corporativo",
      image: corporateEvent,
      description: "Evento de lançamento para marca premium",
      details:
        "Execução de evento corporativo estratégico com estrutura completa de audiovisual e experiências imersivas. Demonstração da capacidade de atender grandes marcas que exigem excelência na execução.",
    },
    {
      title: "Batizado Familiar - São Sebastião",
      category: "Religiosos",
      image: weddingDetail,
      description: "Cerimônia religiosa com celebração familiar",
      details:
        "Gestão completa de evento religioso e cultural, aplicando a expertise em logística do Litoral Norte para garantir que todos os aspectos cerimoniais sejam executados com perfeição.",
    },
    {
      title: "Festa de Aniversário Corporativa",
      category: "Corporativo",
      image: corporateEvent,
      description: "Confraternização de fim de ano empresarial",
      details:
        "Evento corporativo de confraternização com gestão de grande público. Aplicação da metodologia de gestão de projetos para eventos corporativos estratégicos.",
    },
  ];

  const filteredItems =
    filter === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nosso <span className="text-gradient">Portfólio</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Eventos executados com nossa metodologia exclusiva de gestão logística costeira. 
            Desde casamentos sofisticados até eventos corporativos estratégicos no Litoral Norte.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "hero" : "outline"}
                onClick={() => setFilter(category)}
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-medium hover:shadow-strong transition-smooth cursor-pointer bg-card"
                onClick={() => handleItemClick(item)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <p className="text-sm text-muted-foreground/80 italic">
                    {item.details}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Nenhum evento encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto Para Seu Próximo Evento no Litoral Norte?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nossa assessoria completa garante execução impecável com metodologia de taxa fixa e 
            transparência total. Assessoria Total, Parcial ou do Dia - sempre com excelência operacional.
          </p>
          <Button variant="hero" size="lg">
            Solicitar Orçamento
          </Button>
        </div>
      </section>

      <Footer />
      <PortfolioDetails 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
      />
    </div>
  );
};

export default PortfolioPage;
