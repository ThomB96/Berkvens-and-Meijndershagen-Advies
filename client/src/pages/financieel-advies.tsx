import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import ServiceTileModal, { type ServiceTileData } from "@/components/ServiceTileModal";
import pensionImage from "@assets/generated_images/Happy_retired_couple_3f286504.png";
import earlyRetirementImage from "@assets/generated_images/Early_retirement_lifestyle_b083e5da.png";
import savingsImage from "@assets/generated_images/Savings_and_growth_concept_7c6691ba.png";
import celebrationImage from "@assets/generated_images/Family_celebration_moment_32172724.png";
import transitionImage from "@assets/generated_images/Life_transition_moment_ea3e01f6.png";
import protectionImage from "@assets/generated_images/Family_protection_and_security_c6a64d29.png";
import heroBackground from "@assets/generated_images/financial_advice_hero_background.png";
import ctaBackground from "@assets/generated_images/cta_handshake_background.png";

const financialTiles: ServiceTileData[] = [
  {
    title: "Aanvullend pensioen opbouwen",
    description: "Zorg voor een comfortabele oude dag met slimme pensioenopbouw.",
    image: pensionImage,
    detailedInfo: "De AOW en uw werkgeverspensioen zijn vaak niet voldoende voor een comfortabele oude dag. Wij adviseren u over aanvullende pensioenopbouw door middel van lijfrente, banksparen of beleggingen. We berekenen hoeveel u nodig heeft en welke opbouwvorm het beste bij uw situatie past, rekening houdend met fiscale voordelen en uw risicoprofiel.",
  },
  {
    title: "Eerder stoppen met werken",
    description: "Realiseer uw droom om eerder van uw pensioen te genieten.",
    image: earlyRetirementImage,
    detailedInfo: "Wilt u voor uw AOW-leeftijd stoppen met werken? Wij berekenen wat u daarvoor nodig heeft en hoe u dit doel kunt bereiken. We kijken naar uw huidige vermogenspositie, pensioenopbouw en mogelijkheden voor vervroegde uittreding. Ook adviseren we over optimale fiscale routes en het opvullen van pensioentekorten.",
  },
  {
    title: "Sparen voor later",
    description: "Bouw vermogen op voor toekomstige doelen en zekerheid.",
    image: savingsImage,
    detailedInfo: "Of u nu spaart voor een verbouwing, studie van uw kinderen of gewoon een buffer wilt opbouwen - wij adviseren over de beste spaar- en beleggingsvormen. We vergelijken spaarrekeningen, deposito's en beleggingsproducten. Ook helpen we bij het opstellen van een financieel plan met realistische doelen en een passende strategie.",
  },
  {
    title: "Mee- of tegenvaller",
    description: "Benut financiële meevallers optimaal of vang tegenvallers op.",
    image: celebrationImage,
    detailedInfo: "Een erfenis, bonus of andere financiële meevaller vraagt om weloverwogen keuzes. Wij adviseren over slimme besteding: extra aflossen, investeren of pensioenopbouw. Bij tegenvallers zoals inkomensverlies helpen we met herstructurering van uw financiën, tijdelijke aanpassingen en het vinden van nieuwe evenwicht in uw budget.",
  },
  {
    title: "Wijzigingen in mijn situatie",
    description: "Pas uw financiële planning aan bij levensveranderingen.",
    image: transitionImage,
    detailedInfo: "Grote levensgebeurtenissen zoals trouwen, scheiden, kinderen krijgen of een carrièreswitch hebben financiële impact. Wij helpen u uw financiële planning aan te passen aan uw nieuwe situatie. We kijken naar verzekeringen, pensioenopbouw, testament en vermogensopbouw, zodat alles weer optimaal geregeld is.",
  },
  {
    title: "Overlijden",
    description: "Zorg voor financiële zekerheid van uw nabestaanden.",
    image: protectionImage,
    detailedInfo: "Het is belangrijk dat uw naasten financieel verzorgd achterblijven. Wij adviseren over overlijdensrisicoverzekeringen, kapitaalverzekeringen en het optimaal regelen van uw nalatenschap. Ook bespreken we testament, erfbelasting en andere juridische aspecten om ervoor te zorgen dat uw vermogen volgens uw wensen verdeeld wordt.",
  },
];

export default function FinancieelAdviesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % financialTiles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getCardPosition = (index: number) => {
    const diff = (index - currentIndex + financialTiles.length) % financialTiles.length;
    
    if (diff === 0) return "center";
    if (diff === 1 || diff === -financialTiles.length + 1) return "right";
    if (diff === financialTiles.length - 1 || diff === -1) return "left";
    if (diff === 2 || diff === -financialTiles.length + 2) return "far-right";
    return "far-left";
  };

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="relative h-[45vh] min-h-[350px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBackground}
            alt="Financieel Advies"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/75 to-accent/60" />
        </div>
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl text-accent-foreground" data-testid="text-page-title">
            Financieel Advies
          </h1>
          <p className="max-w-2xl text-lg text-accent-foreground/90" data-testid="text-page-subtitle">
            Plan uw financiële toekomst met deskundig advies over pensioen, vermogensopbouw en financiële zekerheid
          </p>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 mb-8">
          <h2 className="text-center text-2xl font-semibold mb-2">Uw financiële doelen binnen bereik</h2>
          <p className="text-center text-muted-foreground">
            Klik op een tegel voor meer informatie en persoonlijk advies
          </p>
        </div>
        
        <div className="relative w-full">
          <div className="relative mx-auto max-w-7xl overflow-hidden px-4 py-12">
            <div className="relative flex items-center justify-center gap-4" style={{ minHeight: "400px" }}>
              {financialTiles.map((tile, index) => {
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
            {financialTiles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  currentIndex === index
                    ? "w-8 bg-accent"
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
          <h2 className="text-3xl font-bold text-center mb-12">Waarom financieel advies?</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/30 text-accent-foreground font-semibold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Totaalbeeld van uw financiën</h3>
                <p className="text-sm text-muted-foreground">
                  Wij brengen uw complete financiële situatie in kaart voor betere beslissingen
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/30 text-accent-foreground font-semibold">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Optimale pensioenopbouw</h3>
                <p className="text-sm text-muted-foreground">
                  Plan uw pensioen zo dat u kunt genieten van de oude dag zonder zorgen
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/30 text-accent-foreground font-semibold">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Bescherming van uw gezin</h3>
                <p className="text-sm text-muted-foreground">
                  Zorg ervoor dat uw naasten financieel verzorgd zijn in alle omstandigheden
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/30 text-accent-foreground font-semibold">
                  4
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Flexibel inspelen op verandering</h3>
                <p className="text-sm text-muted-foreground">
                  Uw financiële plan past zich aan bij grote levensveranderingen
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
          <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/85 to-accent/75" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-accent-foreground">Start met uw financiële planning</h2>
          <p className="text-xl text-accent-foreground/90 mb-8">
            Neem contact met ons op voor het doornemen van de mogelijkheden en voor het maken van een afspraak
          </p>
          <Link href="/contact" data-testid="link-cta-contact">
            <Button size="lg" className="text-lg px-8 bg-white text-accent-foreground hover:bg-white/90">
              Maak een Afspraak
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
