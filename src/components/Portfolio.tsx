import weddingDetail from "@/assets/wedding-detail.jpg";
import corporateEvent from "@/assets/corporate-event.jpg";
import casualCelebration from "@/assets/casual-celebration.jpg";
import heroBeachWedding from "@/assets/hero-beach-wedding.jpg";

const portfolioItems = [
  {
    title: "Casamento na Praia",
    category: "Casamento",
    image: heroBeachWedding,
    description: "Cerimônia ao pôr do sol em São Sebastião",
  },
  {
    title: "Recepção Elegante",
    category: "Casamento",
    image: weddingDetail,
    description: "Decoração sofisticada com detalhes em dourado",
  },
  {
    title: "Evento Corporativo",
    category: "Corporativo",
    image: corporateEvent,
    description: "Jantar de gala para 200 convidados",
  },
  {
    title: "Festa ao Ar Livre",
    category: "Celebração",
    image: casualCelebration,
    description: "Ambiente descontraído com charme litorâneo",
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Nosso <span className="text-gradient">Portfólio</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Cada evento é único e especial. Veja alguns dos momentos
            inesquecíveis que tivemos o prazer de criar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-medium hover:shadow-strong transition-smooth cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-primary-foreground translate-y-full group-hover:translate-y-0 transition-smooth">
                <span className="inline-block px-2 sm:px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-primary-foreground/90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
