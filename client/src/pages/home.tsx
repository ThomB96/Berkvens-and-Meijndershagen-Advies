import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, TrendingUp, Shield, Users } from "lucide-react";

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
              Professioneel advies voor al uw hypotheek- en financiële vraagstukken
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Hypotheekadvies Card */}
            <Card className="overflow-hidden hover-elevate" data-testid="card-hypotheekadvies">
              <CardHeader className="bg-primary/5 border-b gap-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Home className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Hypotheekadvies</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Van eerste huis tot oversluiten
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Eerste huis kopen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Volgend huis kopen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Verbouwen en overwaarde opnemen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Oversluiten en hypotheekscan</span>
                  </li>
                </ul>
                <Link href="/hypotheekadvies">
                  <a data-testid="link-meer-hypotheek">
                    <Button className="w-full mt-4">
                      Meer informatie
                    </Button>
                  </a>
                </Link>
              </CardContent>
            </Card>

            {/* Financieel Advies Card */}
            <Card className="overflow-hidden hover-elevate" data-testid="card-financieel-advies">
              <CardHeader className="bg-accent/20 border-b gap-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent text-accent-foreground">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Financieel Advies</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Plan uw financiële toekomst
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-foreground mt-0.5">✓</span>
                    <span>Aanvullend pensioen opbouwen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-foreground mt-0.5">✓</span>
                    <span>Eerder stoppen met werken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-foreground mt-0.5">✓</span>
                    <span>Sparen voor later</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-foreground mt-0.5">✓</span>
                    <span>Wijzigingen in uw situatie</span>
                  </li>
                </ul>
                <Link href="/financieel-advies">
                  <a data-testid="link-meer-financieel">
                    <Button variant="secondary" className="w-full mt-4">
                      Meer informatie
                    </Button>
                  </a>
                </Link>
              </CardContent>
            </Card>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar om te starten?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Neem vrijblijvend contact met ons op voor een persoonlijk gesprek
          </p>
          <Link href="/contact">
            <a data-testid="link-cta-contact">
              <Button size="lg" className="text-lg px-8">
                Neem Contact Op
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
