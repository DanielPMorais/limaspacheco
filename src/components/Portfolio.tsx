import { useState } from "react";
import PortfolioDetails from "@/components/PortfolioDetails";
import weddingDetail from "@/assets/wedding-detail.jpg";
import corporateEvent from "@/assets/corporate-event.jpg";
import casualCelebration from "@/assets/casual-celebration.jpg";
import heroBeachWedding from "@/assets/eventos/casamento-AnaFlavia_Wallisson/casamento-AnaFlavia_Wallisson-1.jpeg";

// Imagens da Festa Empresarial
import festaEmpresarial1 from "@/assets/eventos/festa-empresarial/festa-empresarial-1.jpg";
import festaEmpresarial2 from "@/assets/eventos/festa-empresarial/festa-empresarial-2.jpg";
import festaEmpresarial3 from "@/assets/eventos/festa-empresarial/festa-empresarial-3.jpg";

// Imagens do Casamento Ana Flavia e Wallisson
import casamentoAnaWallisson1 from "@/assets/eventos/casamento-AnaFlavia_Wallisson/casamento-AnaFlavia_Wallisson-1.jpeg";
import casamentoAnaWallisson2 from "@/assets/eventos/casamento-AnaFlavia_Wallisson/casamento-AnaFlavia_Wallisson-2.jpeg";
import casamentoAnaWallisson3 from "@/assets/eventos/casamento-AnaFlavia_Wallisson/casamento-AnaFlavia_Wallisson-3.jpeg";
import casamentoAnaWallisson4 from "@/assets/eventos/casamento-AnaFlavia_Wallisson/casamento-AnaFlavia_Wallisson-4.jpeg";
import casamentoAnaWallisson5 from "@/assets/eventos/casamento-AnaFlavia_Wallisson/casamento-AnaFlavia_Wallisson-5.jpeg";
import casamentoAnaWallisson6 from "@/assets/eventos/casamento-AnaFlavia_Wallisson/casamento-AnaFlavia_Wallisson-6.jpeg";
import casamentoAnaWallisson7 from "@/assets/eventos/casamento-AnaFlavia_Wallisson/casamento-AnaFlavia_Wallisson-7.mp4";
import casamentoAnaWallisson8 from "@/assets/eventos/casamento-AnaFlavia_Wallisson/casamento-AnaFlavia_Wallisson-8.mp4";
import casamentoAnaWallisson9 from "@/assets/eventos/casamento-AnaFlavia_Wallisson/casamento-AnaFlavia_Wallisson-9.mp4";

interface MediaItem {
  src: string;
  type: 'image' | 'video';
  alt?: string;
}

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  media: MediaItem[];
  description: string;
  details: string;
}

const portfolioItems = [
  {
    title: "Festa Empresarial - LW Construtora",
    category: "Corporativo",
    image: corporateEvent,
    media: [
      { src: corporateEvent, type: 'image' as const, alt: 'Festa empresarial - Vista geral' },
      { src: festaEmpresarial1, type: 'image' as const, alt: 'Festa empresarial - Detalhes' },
      { src: festaEmpresarial2, type: 'image' as const, alt: 'Festa empresarial - Ambiente' },
      { src: festaEmpresarial3, type: 'image' as const, alt: 'Festa empresarial - Decoração' },
    ],
    description: "Comemoração de 10 anos da empresa LW Construtora",
    details: "Evento corporativo estratégico realizado com metodologia de taxa fixa e transparência total. Aplicação do Manual de Logística Costeira para garantir execução impecável. Gestão completa de fornecedores locais e controle de contingências climáticas específicas da região.",
  },
  {
    title: "Casamento na Praia - Ana Flavia e Wallisson",
    category: "Casamentos",
    image: casamentoAnaWallisson1,
    media: [
      { src: casamentoAnaWallisson1, type: 'image' as const, alt: 'Casamento na praia - Cerimônia' },
      { src: casamentoAnaWallisson2, type: 'image' as const, alt: 'Casamento na praia - Noivos' },
      { src: casamentoAnaWallisson3, type: 'image' as const, alt: 'Casamento na praia - Decoração' },
      { src: casamentoAnaWallisson4, type: 'image' as const, alt: 'Casamento na praia - Ambiente' },
      { src: casamentoAnaWallisson5, type: 'image' as const, alt: 'Casamento na praia - Detalhes' },
      { src: casamentoAnaWallisson6, type: 'image' as const, alt: 'Casamento na praia - Recepção' },
      { src: casamentoAnaWallisson7, type: 'video' as const, alt: 'Casamento na praia - Vídeo cerimônia' },
      { src: casamentoAnaWallisson8, type: 'video' as const, alt: 'Casamento na praia - Vídeo recepção' },
      { src: casamentoAnaWallisson9, type: 'video' as const, alt: 'Casamento na praia - Vídeo festa' },
    ],
    description: "Cerimônia e recepção à beira-mar em São Sebastião",
    details: "Assessoria completa para casamento na praia com coordenação das três diretoras em campo. Rosana liderando operações logísticas, Alana no suporte estratégico e Jayne na gestão financeira. Aplicação da metodologia híbrida e adaptável para garantir tranquilidade total aos noivos.",
  },
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-medium hover:shadow-strong transition-smooth cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleItemClick(item)}
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
      
      <PortfolioDetails 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
      />
    </section>
  );
};

export default Portfolio;
