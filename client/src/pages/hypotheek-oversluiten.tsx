import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown, TrendingDown, Calculator, CheckCircle, AlertCircle, Lightbulb, Phone, Users, Euro } from "lucide-react";
import { useState } from "react";

export default function HypotheekOversluitenPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <title>Hypotheek Oversluiten | Lagere Rente & Betere Voorwaarden</title>
      <meta name="description" content="Hypotheek oversluiten? Bespaar op maandlasten met lagere rentes. Wij berekenen uw voordeel en regelen alles. Gratis oversluitcheck!" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingDown className="w-4 h-4" />
            Bespaar op uw maandlasten
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Betaalt U Te Veel Rente?<br />
            <span className="text-primary">Check het in 5 minuten.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Rentetarieven veranderen. Wat 5 jaar geleden normaal was, kan nu veel hoger zijn dan nodig. 
            Oversluiten kan u honderden euro's per maand besparen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8" data-testid="button-cta-hero">
                <Calculator className="w-5 h-5 mr-2" />
                Gratis Oversluitcheck
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Binnen een week weet u of oversluiten voor u interessant is.
          </p>
        </div>
      </section>

      {/* Rekenvoorbeeld */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2 border-green-200 dark:border-green-800">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <Euro className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-lg">Voorbeeld: wat levert oversluiten op?</h3>
              </div>
              <div className="grid sm:grid-cols-4 gap-4 text-center">
                <div className="bg-background rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Hypotheek</p>
                  <p className="text-xl font-bold">€ 280.000</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Huidige rente</p>
                  <p className="text-xl font-bold text-red-500">4,8%</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Nieuwe rente</p>
                  <p className="text-xl font-bold text-green-600">3,6%</p>
                </div>
                <div className="bg-background rounded-lg p-4 ring-2 ring-green-500">
                  <p className="text-sm text-muted-foreground mb-1">Besparing /maand</p>
                  <p className="text-xl font-bold text-green-600">€ 280</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                *Dit is een voorbeeld. Uw werkelijke besparing hangt af van uw situatie en eventuele boeterente.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-16">
          
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Wat Is Hypotheek Oversluiten?</h2>
            <p className="text-lg text-muted-foreground">
              Bij oversluiten neemt u een nieuwe hypotheek bij een andere bank en lost u de oude af. 
              Het doel? Lagere rente, betere voorwaarden, of allebei.
            </p>
            <p className="text-lg text-muted-foreground">
              Uw huis blijft hetzelfde, alleen uw hypotheekverstrekker verandert. 
              Het klinkt ingewikkeld, maar wij regelen alles voor u.
            </p>
          </div>

          {/* Wanneer interessant */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Wanneer Is Oversluiten Interessant?</h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: TrendingDown, title: "Rente is gedaald", desc: "Als nieuwe klanten flink lagere rentes krijgen dan u betaalt" },
                { icon: Calculator, title: "Rentevaste periode loopt af", desc: "Perfect moment om te vergelijken met andere aanbieders" },
                { icon: CheckCircle, title: "Meer flexibiliteit nodig", desc: "Ruimere aflossingsmogelijkheden of andere voorwaarden" },
                { icon: Euro, title: "Lagere maandlasten gewenst", desc: "Meer ruimte in uw budget voor andere zaken" }
              ].map((item, idx) => (
                <Card key={idx} className="hover-elevate">
                  <CardContent className="pt-6">
                    <item.icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA halverwege */}
          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CardContent className="pt-6 text-center">
              <Lightbulb className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Benieuwd of oversluiten voor u loont?</h3>
              <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                Wij maken gratis een berekening. Binnen een week weet u of en hoeveel u kunt besparen.
              </p>
              <Link href="/contact">
                <Button className="bg-green-600 hover:bg-green-700" data-testid="button-cta-middle">
                  Vraag Oversluitcheck Aan
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Kosten uitgelegd */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Kosten en Boeterente Uitgelegd</h2>
            <p className="text-muted-foreground mb-6">
              Eerlijk is eerlijk: oversluiten kost ook geld. De vraag is of de besparing opweegt tegen de kosten. 
              Wij rekenen dit voor u uit.
            </p>

            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Boeterente</h3>
                      <p className="text-muted-foreground text-sm">
                        Als u voortijdig uw hypotheek beëindigt, betaalt u vaak boeterente. 
                        Dit is het renteverschil over de resterende rentevaste periode. 
                        Bij grote bedragen kan dit oplopen, maar vaak weegt de besparing hier tegenop.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <Calculator className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Oversluitkosten</h3>
                      <p className="text-muted-foreground text-sm">
                        Notaris, taxatie en advieskosten komen er ook bij. 
                        Reken op €2.000 tot €4.000 totaal. Sommige banken bieden vergoedingen aan.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Onze berekening</h3>
                      <p className="text-muted-foreground text-sm">
                        Wij berekenen de terugverdientijd: na hoeveel maanden hebt u de kosten terugverdiend? 
                        Als u nog 10+ jaar in uw huis blijft wonen, loont oversluiten vaak.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Veelgestelde Vragen</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Hoe lang duurt het oversluiten?",
                  a: "Meestal 4-6 weken van aanvraag tot afronding. Wij regelen alles, u hoeft alleen documenten te ondertekenen."
                },
                {
                  q: "Kan ik oversluiten als mijn huis minder waard is geworden?",
                  a: "Soms wel, maar dit hangt af van de verhouding tussen uw hypotheek en de huiswaarde. Wij beoordelen dit vooraf."
                },
                {
                  q: "Moet ik opnieuw al die papieren aanleveren?",
                  a: "Ja, de nieuwe bank doet een volledige beoordeling. Maar wij helpen u alles te verzamelen en controleren of het compleet is."
                },
                {
                  q: "Wat als ik net mijn rentevaste periode heb verlengd?",
                  a: "Dan kan de boeterente hoog uitvallen. Toch kan oversluiten nog steeds interessant zijn. Wij maken de som."
                }
              ].map((item, idx) => (
                <Card 
                  key={idx} 
                  className="cursor-pointer hover-elevate" 
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold">{item.q}</h3>
                      <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 text-muted-foreground ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                    </div>
                    {expandedFaq === idx && (
                      <p className="mt-4 text-muted-foreground">{item.a}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA-blok eindpagina */}
          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ontdek Uw Besparing</h2>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              Vraag een gratis oversluitcheck aan. Wij berekenen exact hoeveel u kunt besparen 
              en of de kosten opwegen tegen de voordelen.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-cta-bottom">
                <Phone className="w-5 h-5 mr-2" />
                Vraag Oversluitcheck Aan
              </Button>
            </Link>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Vrijblijvend. U beslist zelf of u wilt oversluiten.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
