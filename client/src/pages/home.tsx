import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, TrendingUp, Shield, Users } from "lucide-react";
import mortgageIllustration from "@assets/generated_images/mortgage_advice_illustration_concept.png";
import financialIllustration from "@assets/generated_images/financial_planning_illustration_concept.png";
import insuranceImage from "@assets/generated_images/Insurance_protection_concept_a316a83e.png";
import ctaBackground from "@assets/generated_images/cta_handshake_background.png";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-services-title">
              Onze Diensten
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professioneel advies voor al uw hypotheek-, financiële en verzekeringsvraagstukken
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Hypotheekadvies Card */}
            <Link href="/hypotheekadvies" data-testid="card-hypotheekadvies">
              <div className="group relative h-[400px] overflow-hidden rounded-lg hover-elevate active-elevate-2">
                  <img
                    src={mortgageIllustration}
                    alt="Hypotheekadvies"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/30" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Home className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">Hypotheekadvies</h3>
                    <p className="mb-4 text-sm text-white/90">
                      Van eerste huis tot oversluiten
                    </p>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li>✓ Eerste huis kopen</li>
                      <li>✓ Volgend huis kopen</li>
                      <li>✓ Verbouwen en overwaarde</li>
                      <li>✓ Oversluiten en scan</li>
                    </ul>
                    <Button variant="outline" className="mt-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                      Meer informatie
                    </Button>
                  </div>
                </div>
            </Link>

            {/* Financieel Advies Card */}
            <Link href="/financieel-advies" data-testid="card-financieel-advies">
              <div className="group relative h-[400px] overflow-hidden rounded-lg hover-elevate active-elevate-2">
                  <img
                    src={financialIllustration}
                    alt="Financieel Advies"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/95 via-accent/70 to-accent/30" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-accent-foreground">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <TrendingUp className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">Financieel Advies</h3>
                    <p className="mb-4 text-sm opacity-90">
                      Plan uw financiële toekomst
                    </p>
                    <ul className="space-y-2 text-sm opacity-80">
                      <li>✓ Aanvullend pensioen</li>
                      <li>✓ Eerder stoppen met werken</li>
                      <li>✓ Sparen voor later</li>
                      <li>✓ Wijzigingen in situatie</li>
                    </ul>
                    <Button variant="outline" className="mt-6 bg-white/10 backdrop-blur-sm border-current/30 hover:bg-white/20">
                      Meer informatie
                    </Button>
                  </div>
                </div>
            </Link>

            {/* Verzekeringsadvies Card */}
            <Link href="/verzekeringsadvies" data-testid="card-verzekeringsadvies">
              <div className="group relative h-[400px] overflow-hidden rounded-lg hover-elevate active-elevate-2">
                  <img
                    src={insuranceImage}
                    alt="Verzekeringsadvies"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/95 via-blue-500/70 to-blue-400/30" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Shield className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">Verzekeringsadvies</h3>
                    <p className="mb-4 text-sm text-white/90">
                      Optimale bescherming voor u en uw gezin
                    </p>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li>✓ Overlijdensrisicoverzekering</li>
                      <li>✓ Arbeidsongeschiktheidsverzekering</li>
                      <li>✓ Inkomensverzekering</li>
                      <li>✓ Zorgverzekering</li>
                    </ul>
                    <Button variant="outline" className="mt-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                      Meer informatie
                    </Button>
                  </div>
                </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Waarom voor ons kiezen?</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Betrouwbaar</h3>
              <p className="text-sm text-muted-foreground">
                Jarenlange ervaring en expertise in hypotheek- en financieel advies
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Persoonlijk</h3>
              <p className="text-sm text-muted-foreground">
                Maatwerk advies afgestemd op uw persoonlijke situatie en wensen
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Resultaatgericht</h3>
              <p className="text-sm text-muted-foreground">
                Wij streven naar de beste financiële oplossingen voor uw toekomst
              </p>
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
          <h2 className="text-4xl font-bold mb-4 text-white">Klaar om te starten?</h2>
          <p className="text-xl text-white/90 mb-8">
            Neem vrijblijvend contact met ons op voor een persoonlijk gesprek
          </p>
          <Link href="/contact" data-testid="link-cta-contact">
            <Button size="lg" className="text-lg px-8 bg-white text-primary hover:bg-white/90">
              Neem Contact Op
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
