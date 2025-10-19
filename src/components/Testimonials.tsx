import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria & João Silva",
    event: "Casamento em Ubatuba",
    rating: 5,
    text: "A Limas & Pacheco transformou nosso casamento em um sonho realizado. Cada detalhe foi perfeito, desde a decoração até a coordenação impecável do dia. Recomendamos de olhos fechados!",
  },
  {
    name: "Empresa Tech Solutions",
    event: "Evento Corporativo",
    rating: 5,
    text: "Profissionalismo excepcional! Nossa convenção anual foi um sucesso absoluto. A equipe cuidou de tudo com maestria e superou todas as nossas expectativas.",
  },
  {
    name: "Ana Paula Costa",
    event: "Aniversário 50 anos",
    rating: 5,
    text: "Minha festa foi exatamente como imaginei! A atenção aos detalhes e o carinho com que trataram cada aspecto do evento me deixaram encantada. Obrigada, Limas & Pacheco!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Dizem <span className="text-gradient">Nossos Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 shadow-medium hover:shadow-strong transition-smooth border-none bg-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="pt-4 border-t border-border">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.event}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
