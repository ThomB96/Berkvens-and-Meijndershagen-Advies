import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

interface ServiceSliderProps {
  cards: ServiceCard[];
}

export default function ServiceSlider({ cards }: ServiceSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getCardPosition = (index: number) => {
    const diff = (index - currentIndex + cards.length) % cards.length;
    
    if (diff === 0) return "center";
    if (diff === 1 || diff === -cards.length + 1) return "right";
    if (diff === cards.length - 1 || diff === -1) return "left";
    if (diff === 2 || diff === -cards.length + 2) return "far-right";
    return "far-left";
  };

  return (
    <div className="relative w-full">
      {/* Slider Container */}
      <div className="relative mx-auto max-w-7xl overflow-hidden px-4 py-12">
        <div className="relative flex items-center justify-center gap-4" style={{ minHeight: "400px" }}>
          {cards.map((card, index) => {
            const position = getCardPosition(index);
            const isVisible = ["left", "center", "right"].includes(position);
            
            return (
              <div
                key={index}
                className={cn(
                  "absolute h-[350px] w-full max-w-sm rounded-lg overflow-hidden transition-all duration-500 ease-in-out",
                  {
                    "opacity-100 scale-100 z-30 translate-x-0": position === "center",
                    "opacity-50 scale-95 z-20 -translate-x-[110%]": position === "left",
                    "opacity-50 scale-95 z-20 translate-x-[110%]": position === "right",
                    "opacity-0 scale-90 -translate-x-[220%]": position === "far-left",
                    "opacity-0 scale-90 translate-x-[220%]": position === "far-right",
                  }
                )}
                style={{
                  visibility: isVisible ? "visible" : "hidden",
                }}
                data-testid={`card-service-${index}`}
              >
                <div className="relative h-full w-full">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="mb-3 text-2xl font-bold text-white" data-testid={`text-title-${index}`}>
                      {card.title}
                    </h3>
                    <p className="text-sm text-white/90 line-clamp-2" data-testid={`text-description-${index}`}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute left-0 right-0 top-1/2 z-40 flex -translate-y-1/2 justify-between px-2">
          <Button
            size="icon"
            variant="outline"
            onClick={prevSlide}
            className="bg-white/90 backdrop-blur-sm hover:bg-white"
            data-testid="button-slider-prev"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={nextSlide}
            className="bg-white/90 backdrop-blur-sm hover:bg-white"
            data-testid="button-slider-next"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 pb-6">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              currentIndex === index
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            data-testid={`button-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
