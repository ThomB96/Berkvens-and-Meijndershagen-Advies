import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

interface ServiceSliderProps {
  cards: ServiceCard[];
  autoPlayInterval?: number;
}

export default function ServiceSlider({ cards, autoPlayInterval = 3000 }: ServiceSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [cards.length, autoPlayInterval]);

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
