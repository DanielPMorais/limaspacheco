import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import weddingDetail from "@/assets/wedding-detail.jpg";
import corporateEvent from "@/assets/corporate-event.jpg";
import casualCelebration from "@/assets/casual-celebration.jpg";
import heroBeachWedding from "@/assets/hero-beach-wedding.jpg";

const PortfolioPage = () => {
  const [filter, setFilter] = useState("Todos");

  const categories = ["Todos", "Casamentos", "Corporativo", "Celebrações"];

  const portfolioItems = [
    {
      title: "Casamento na Praia",
      category: "Casamentos",
      image: heroBeachWedding,
      description: "Cerimônia ao pôr do sol em São Sebastião com 150 convidados",
      details:
        "Um casamento dos sonhos à beira-mar, com decoração elegante em tons neutros e dourados. A cerimônia aconteceu no horário mágico do pôr do sol.",
    },
    {
      title: "Recepção de Luxo",
      category: "Casamentos",
      image: weddingDetail,
      description: "Decoração sofisticada com detalhes em dourado",
      details:
        "Recepção elegante com arranjos florais exuberantes, iluminação intimista e atenção aos mínimos detalhes.",
    },
    {
      title: "Convenção Empresarial",
      category: "Corporativo",
      image: corporateEvent,
      description: "Evento corporativo para 200 executivos",
      details:
        "Convenção anual de uma empresa de tecnologia com estrutura completa de audiovisual, coffee breaks premium e jantar de gala.",
    },
    {
      title: "Festa Garden Party",
      category: "Celebrações",
      image: casualCelebration,
      description: "Celebração ao ar livre com 100 convidados",
      details:
        "Festa de aniversário de 50 anos em ambiente descontraído, com decoração rústico-chic e gastronomia regional.",
    },
    {
      title: "Casamento Intimista",
      category: "Casamentos",
      image: heroBeachWedding,
      description: "Cerimônia para 50 convidados em Ubatuba",
      details:
        "Casamento intimista com foco em experiências personalizadas para cada convidado, em local paradisíaco.",
    },
    {
      title: "Lançamento de Produto",
      category: "Corporativo",
      image: corporateEvent,
      description: "Evento de lançamento para marca premium",
      details:
        "Evento exclusivo de lançamento com experiências imersivas, coquetel de abertura e apresentação audiovisual.",
    },
  ];

  const filteredItems =
    filter === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

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
            Cada evento é único e especial. Veja alguns dos momentos
            inesquecíveis que tivemos o prazer de criar
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
            Pronto Para Criar Seu Próprio Evento Memorável?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e vamos transformar sua visão em realidade
          </p>
          <Button variant="hero" size="lg">
            Solicitar Orçamento
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
