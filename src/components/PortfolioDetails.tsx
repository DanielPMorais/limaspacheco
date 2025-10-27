import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin, Star, ChevronLeft, ChevronRight } from 'lucide-react';

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

interface PortfolioDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  item: PortfolioItem | null;
}

const PortfolioDetails: React.FC<PortfolioDetailsProps> = ({ isOpen, onClose, item }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  if (!item) return null;

  const media = item.media || [{ src: item.image, type: 'image', alt: item.title }];
  
  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto mx-auto p-2 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold">{item.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-hidden">
          {/* Media Carousel */}
          <div className="relative w-full max-w-full">
            <div className="relative overflow-hidden rounded-lg w-full">
              {media[currentMediaIndex].type === 'video' ? (
                <video
                  src={media[currentMediaIndex].src}
                  controls
                  className="w-full max-w-full h-48 sm:h-64 md:h-80 object-cover transition-opacity duration-300"
                  poster={item.image}
                >
                  Seu navegador não suporta vídeos HTML5.
                </video>
              ) : (
                <img
                  src={media[currentMediaIndex].src}
                  alt={media[currentMediaIndex].alt || `${item.title} - Mídia ${currentMediaIndex + 1}`}
                  className="w-full max-w-full h-48 sm:h-64 md:h-80 object-cover transition-opacity duration-300"
                />
              )}
              
              {/* Navigation Arrows */}
              {media.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={prevMedia}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={nextMedia}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
              
              {/* Media Counter */}
              {media.length > 1 && (
                <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-black/50 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
                  {currentMediaIndex + 1} / {media.length}
                </div>
              )}
              
              {/* Media Type Indicator */}
              <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 bg-black/50 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
                {media[currentMediaIndex].type === 'video' ? '🎥 Vídeo' : '📷 Foto'}
              </div>
            </div>
            
            <Badge className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-accent text-accent-foreground text-xs sm:text-sm">
              {item.category}
            </Badge>
          </div>

          {/* Thumbnail Navigation */}
          {media.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2 w-full max-w-full">
              {media.map((mediaItem, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMediaIndex(index)}
                  className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all relative ${
                    index === currentMediaIndex 
                      ? 'border-accent ring-2 ring-accent/20' 
                      : 'border-transparent hover:border-muted-foreground/50'
                  }`}
                >
                  {mediaItem.type === 'video' ? (
                    <>
                      <video
                        src={mediaItem.src}
                        className="w-full h-full object-cover"
                        muted
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-2 border-l-black border-y-2 border-y-transparent ml-0.5"></div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={mediaItem.src}
                      alt={mediaItem.alt || `Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Event Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Data do Evento</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span className="text-sm">Convidados</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Localização</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Sobre o Evento</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>

          {/* Details */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Detalhes da Execução</h3>
            <p className="text-muted-foreground leading-relaxed">{item.details}</p>
          </div>

          {/* Services Highlight */}
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Star className="h-5 w-5 text-accent" />
              Serviços Prestados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Gestão Logística Especializada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Coordenação de Fornecedores</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Controle de Contingências</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Transparência Total no Orçamento</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <Button variant="hero" size="lg" className="w-full md:w-auto">
              Solicitar Orçamento Similar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioDetails;
