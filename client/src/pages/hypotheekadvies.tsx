import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import ServiceTileModal, { type ServiceTileData } from "@/components/ServiceTileModal";
import firstHomeImage from "@assets/generated_images/First_home_buyers_celebration_6717e5d7.png";
import nextHomeImage from "@assets/generated_images/Family_upgrading_to_bigger_home_7743af46.png";
import renovationImage from "@assets/generated_images/Home_renovation_inspiration_08181638.png";
import financialPlanImage from "@assets/generated_images/Financial_planning_concept_aafca629.png";
import handshakeImage from "@assets/generated_images/Professional_business_handshake_f5099191.png";
import consultationImage from "@assets/generated_images/Financial_advisor_consultation_b625ef50.png";
import heroBackground from "@assets/generated_images/mortgage_advice_hero_background.png";
import ctaBackground from "@assets/generated_images/cta_consultation_background.png";

const hypotheekTiles: ServiceTileData[] = [
  {
    title: "Eerste huis kopen",
    description: "Maak uw droom waar met de juiste hypotheek voor uw eerste eigen huis.",
    image: firstHomeImage,
    detailedInfo: "Het kopen van uw eerste huis is een spannende stap. Wij begeleiden u door het hele proces, van het bepalen van uw budget tot het afsluiten van uw hypotheek. We zorgen ervoor dat u de beste voorwaarden krijgt en dat alles juridisch en financieel op orde is. Onze adviseurs nemen alle tijd om uw situatie te analyseren en de juiste hypotheekvorm voor u te vinden.",
  },
  {
    title: "Volgend huis kopen",
    description: "Doorgroeien naar een grotere woning met optimale financiering.",
    image: nextHomeImage,
    detailedInfo: "Bij de aankoop van uw volgende woning komen extra aspecten kijken, zoals de verkoop van uw huidige huis en het afstemmen van beide transacties. Wij adviseren u over de mogelijkheden van meefinanciering, restschuld en het optimaal benutten van uw overwaarde. Samen zorgen we voor een soepele overgang naar uw nieuwe woning.",
  },
  {
    title: "Verbouwen",
    description: "Realiseer uw verbouwplannen met een passende hypotheek.",
    image: renovationImage,
    detailedInfo: "Wilt u uw huidige woning verbouwen of verduurzamen? Wij helpen u bij het opnemen van extra geld in uw hypotheek voor verbouwingen. We bespreken de mogelijkheden, voorwaarden en taxatievereisten. Ook adviseren we over subsidiemogelijkheden en energiebesparende maatregelen die uw woning waardevermeerdering opleveren.",
  },
  {
    title: "Overwaarde opnemen",
    description: "Benut de overwaarde van uw woning voor andere doeleinden.",
    image: financialPlanImage,
    detailedInfo: "De waarde van uw woning is gestegen en u wilt de overwaarde benutten? Wij adviseren u over de mogelijkheden om overwaarde op te nemen voor bijvoorbeeld verbouwing, aflossing van andere schulden, of andere investeringen. We berekenen wat fiscaal voordelig is en welke hypotheekvorm het beste bij uw plannen past.",
  },
  {
    title: "Oversluiten",
    description: "Profiteer van lagere rentetarieven door over te sluiten.",
    image: handshakeImage,
    detailedInfo: "Is uw rentevaste periode bijna afgelopen of wilt u profiteren van lagere rentes? Oversluiten kan financieel aantrekkelijk zijn. Wij berekenen voor u of oversluiten voordelig is, rekening houdend met boeterentes en afsluitkosten. We vergelijken alle aanbieders en regelen het volledige overstuitproces voor u.",
  },
  {
    title: "Hypotheekscan",
    description: "Laat uw huidige hypotheek scannen op verbetermogelijkheden.",
    image: consultationImage,
    detailedInfo: "Met een hypotheekscan controleren we of uw huidige hypotheek nog optimaal is. We bekijken uw rentepercentage, hypotheekvorm, fiscale aftrek en verzekeringen. Ook adviseren we over mogelijkheden voor rentevastperiode-aanpassing, extra aflossen of andere optimalisaties. Een scan is geheel vrijblijvend en kan u veel geld besparen.",
  },
];

export default function HypotheekadviesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hypotheekTiles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getCardPosition = (index: number) => {
    const diff = (index - currentIndex + hypotheekTiles.length) % hypotheekTiles.length;
    
    if (diff === 0) return "center";
    if (diff === 1 || diff === -hypotheekTiles.length + 1) return "right";
    if (diff === hypotheekTiles.length - 1 || diff === -1) return "left";
    if (diff === 2 || diff === -hypotheekTiles.length + 2) return "far-right";
    return "far-left";
  };

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="relative h-[45vh] min-h-[350px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBackground}
            alt="Hypotheekadvies"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60" />
        </div>
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl text-white" data-testid="text-page-title">
            Hypotheekadvies
          </h1>
          <p className="max-w-2xl text-lg text-white/90" data-testid="text-page-subtitle">
            Van eerste huis tot oversluiten - wij begeleiden u bij elke stap van uw hypotheektraject
          </p>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 mb-8">
          <h2 className="text-center text-2xl font-semibold mb-2">Hoe kunnen wij u helpen?</h2>
          <p className="text-center text-muted-foreground">
            Klik op een tegel voor meer informatie en persoonlijk advies
          </p>
        </div>
        
        <div className="relative w-full">
          <div className="relative mx-auto max-w-7xl overflow-hidden px-4 py-12">
            <div className="relative flex items-center justify-center gap-4" style={{ minHeight: "400px" }}>
              {hypotheekTiles.map((tile, index) => {
                const position = getCardPosition(index);
                const isVisible = ["left", "center", "right"].includes(position);
                
                return (
                  <div
                    key={index}
                    className={cn(
                      "absolute w-full max-w-sm transition-all duration-500 ease-in-out",
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
                  >
                    <ServiceTileModal tile={tile} index={index} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 pb-6">
            {hypotheekTiles.map((_, index) => (
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
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Voordelen van ons hypotheekadvies</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Onafhankelijk advies</h3>
                <p className="text-sm text-muted-foreground">
                  Wij werken met alle aanbieders en kiezen altijd de beste optie voor u
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Volledige begeleiding</h3>
                <p className="text-sm text-muted-foreground">
                  Van oriëntatie tot offerte en ondertekening - wij regelen alles voor u
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Scherpe voorwaarden</h3>
                <p className="text-sm text-muted-foreground">
                  Door onze kennis en ervaring onderhandelen wij de beste condities
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                  4
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Nazorg gegarandeerd</h3>
                <p className="text-sm text-muted-foreground">
                  Ook na het afsluiten blijven wij uw aanspreekpunt voor vragen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ctaBackground}
            alt="Contact background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Vrijblijvend kennismaken?</h2>
          <p className="text-xl text-white/90 mb-8">
            Neem contact met ons op voor een persoonlijk adviesgesprek
          </p>
          <Link href="/contact" data-testid="link-cta-contact">
            <Button size="lg" className="text-lg px-8 bg-white text-primary hover:bg-white/90">
              Plan een Afspraak
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
