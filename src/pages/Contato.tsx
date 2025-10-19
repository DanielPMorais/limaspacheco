import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      guestCount: "",
      city: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Entre em <span className="text-gradient">Contato</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Estamos prontos para transformar seu evento em realidade. Vamos
            conversar!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-strong border-none bg-card">
                <h2 className="text-3xl font-bold mb-6">
                  Solicite um Orçamento
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Nome Completo <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Seu nome"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        E-mail <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="seu@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Telefone/WhatsApp <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="(12) 99999-9999"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eventType">Tipo de Evento</Label>
                      <Select
                        value={formData.eventType}
                        onValueChange={(value) =>
                          setFormData({ ...formData, eventType: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="casamento">Casamento</SelectItem>
                          <SelectItem value="corporativo">
                            Evento Corporativo
                          </SelectItem>
                          <SelectItem value="aniversario">
                            Aniversário
                          </SelectItem>
                          <SelectItem value="formatura">Formatura</SelectItem>
                          <SelectItem value="debutante">Debutante</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Data Prevista</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) =>
                          setFormData({ ...formData, eventDate: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guestCount">Número de Convidados</Label>
                      <Input
                        id="guestCount"
                        type="number"
                        value={formData.guestCount}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            guestCount: e.target.value,
                          })
                        }
                        placeholder="Ex: 150"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade</Label>
                      <Select
                        value={formData.city}
                        onValueChange={(value) =>
                          setFormData({ ...formData, city: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a cidade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="caraguatatuba">
                            Caraguatatuba
                          </SelectItem>
                          <SelectItem value="sao-sebastiao">
                            São Sebastião
                          </SelectItem>
                          <SelectItem value="ubatuba">Ubatuba</SelectItem>
                          <SelectItem value="outra">Outra</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Serviço de Interesse</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="total">Assessoria Total</SelectItem>
                          <SelectItem value="parcial">
                            Assessoria Parcial
                          </SelectItem>
                          <SelectItem value="dia">Assessoria do Dia</SelectItem>
                          <SelectItem value="corporativo">
                            Eventos Corporativos
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Conte-nos mais sobre seu evento..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Enviar Solicitação
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 shadow-medium border-none bg-card">
                <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold">Telefone/WhatsApp</p>
                      <a
                        href="tel:+5512999999999"
                        className="text-muted-foreground hover:text-accent transition-smooth"
                      >
                        (12) 99999-9999
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <a
                        href="mailto:contato@limasepacheco.com.br"
                        className="text-muted-foreground hover:text-accent transition-smooth"
                      >
                        contato@limasepacheco.com.br
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold">Área de Atuação</p>
                      <p className="text-muted-foreground">
                        Litoral Norte - SP
                        <br />
                        Caraguatatuba, São Sebastião, Ubatuba
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Instagram className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold">Instagram</p>
                      <a
                        href="https://instagram.com/limasepacheco.assessoria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-smooth"
                      >
                        @limasepacheco.assessoria
                      </a>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 shadow-medium border-none bg-card">
                <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-semibold">Segunda a Sexta</p>
                    <p className="text-muted-foreground">9h às 18h</p>
                    <p className="font-semibold mt-3">Sábado</p>
                    <p className="text-muted-foreground">9h às 13h</p>
                    <p className="text-sm text-muted-foreground/80 mt-3">
                      * Atendimentos fora do horário comercial mediante agendamento
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-medium border-none bg-accent/5">
                <p className="text-sm text-muted-foreground">
                  <strong>Resposta rápida:</strong> Respondemos todas as
                  solicitações em até 24 horas úteis.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
