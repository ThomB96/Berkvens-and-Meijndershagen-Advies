import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown, TrendingDown, Calculator, CheckCircle, AlertCircle, Lightbulb, Phone, Users, Euro, Star, Shield, ArrowRight, Clock } from "lucide-react";
import { useState } from "react";
import advisorMeetingImg from "@assets/stock_images/couple_reviewing_doc_7929205a.jpg";
import dutchHouseImg from "@assets/stock_images/beautiful_dutch_hous_6403bfd0.jpg";

export default function HypotheekOversluitenPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-green-50 dark:to-green-950/20">
      <title>Hypotheek Oversluiten | Lagere Rente & Betere Voorwaarden</title>
      <meta name="description" content="Hypotheek oversluiten? Bespaar op maandlasten met lagere rentes. Wij berekenen uw voordeel en regelen alles. Gratis oversluitcheck!" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-500/80 z-10" />
        <img 
          src={dutchHouseImg} 
          alt="Nederlandse woning" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingDown className="w-4 h-4" />
              Bespaar op uw maandlasten
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Betaalt U Te Veel Rente?<br />
              Check het in 5 minuten.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              Rentetarieven veranderen. Wat 5 jaar geleden normaal was, kan nu veel hoger zijn dan nodig.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg" data-testid="button-cta-hero">
                  <Calculator className="w-5 h-5 mr-2" />
                  Gratis Oversluitcheck
                </Button>
              </Link>
            </div>
            <p className="text-sm text-white/70 mt-6">
              Binnen een week weet u of oversluiten voor u interessant is.
            </p>
          </div>
        </div>
      </section>

      {/* Vertrouwensindicatoren */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-card border-b">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm">30+ hypotheekverstrekkers</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-green-600" />
              <span className="text-sm">4-6 weken doorlooptijd</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rekenvoorbeeld */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-green-400 to-green-600" />
            <CardContent className="pt-8 pb-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Euro className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Wat levert oversluiten op?</h3>
                  <p className="text-sm text-muted-foreground">Een voorbeeld uit de praktijk</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-4 gap-4 text-center">
                <div className="bg-accent/10 rounded-xl p-5">
                  <p className="text-sm text-muted-foreground mb-2">Hypotheek</p>
                  <p className="text-2xl font-bold">€ 280.000</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-5">
                  <p className="text-sm text-muted-foreground mb-2">Huidige rente</p>
                  <p className="text-2xl font-bold text-red-500">4,8%</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-5">
                  <p className="text-sm text-muted-foreground mb-2">Nieuwe rente</p>
                  <p className="text-2xl font-bold text-green-600">3,6%</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 rounded-xl p-5 ring-2 ring-green-500">
                  <p className="text-sm text-muted-foreground mb-2">Besparing /maand</p>
                  <p className="text-2xl font-bold text-green-600">€ 280</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Dit is een voorbeeld. Uw werkelijke besparing hangt af van uw situatie en eventuele boeterente.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Uitleg + foto */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Wat Is Hypotheek Oversluiten?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Bij oversluiten neemt u een nieuwe hypotheek bij een andere bank en lost u de oude af. 
                Het doel? Lagere rente, betere voorwaarden, of allebei.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Uw huis blijft hetzelfde, alleen uw hypotheekverstrekker verandert. 
                Het klinkt ingewikkeld, maar wij regelen alles voor u.
              </p>
              <Link href="/contact">
                <Button className="group" data-testid="button-cta-besparing">
                  Check mijn besparing
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src={advisorMeetingImg} 
                alt="Adviesgesprek over hypotheek oversluiten" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wanneer interessant */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wanneer Is Oversluiten Interessant?</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: TrendingDown, title: "Rente is gedaald", desc: "Als nieuwe klanten flink lagere rentes krijgen dan u betaalt", color: "text-green-600 bg-green-100 dark:bg-green-900/30" },
              { icon: Calculator, title: "Rentevaste periode loopt af", desc: "Perfect moment om te vergelijken met andere aanbieders", color: "text-blue-600 bg-blue-100 dark:bg-blue-900/30" },
              { icon: CheckCircle, title: "Meer flexibiliteit nodig", desc: "Ruimere aflossingsmogelijkheden of andere voorwaarden", color: "text-purple-600 bg-purple-100 dark:bg-purple-900/30" },
              { icon: Euro, title: "Lagere maandlasten gewenst", desc: "Meer ruimte in uw budget voor andere zaken", color: "text-amber-600 bg-amber-100 dark:bg-amber-900/30" }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-md hover-elevate transition-all">
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50 dark:bg-green-900/10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
            <Lightbulb className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Benieuwd of oversluiten voor u loont?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Wij maken gratis een berekening. Binnen een week weet u of en hoeveel u kunt besparen.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg" data-testid="button-cta-middle">
              <Calculator className="w-5 h-5 mr-2" />
              Vraag Oversluitcheck Aan
            </Button>
          </Link>
        </div>
      </section>

      {/* Kosten uitgelegd */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Kosten en Boeterente Uitgelegd</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Eerlijk is eerlijk: oversluiten kost ook geld. De vraag is of de besparing opweegt tegen de kosten.
          </p>

          <div className="space-y-4">
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Boeterente</h3>
                    <p className="text-muted-foreground">
                      Als u voortijdig uw hypotheek beëindigt, betaalt u vaak boeterente. 
                      Dit is het renteverschil over de resterende rentevaste periode. 
                      Vaak weegt de besparing hier tegenop.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Oversluitkosten</h3>
                    <p className="text-muted-foreground">
                      Notaris, taxatie en advieskosten komen er ook bij. 
                      Reken op €2.000 tot €4.000 totaal. Sommige banken bieden vergoedingen aan.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-green-50 dark:bg-green-900/10">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-200 dark:bg-green-800 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Onze berekening</h3>
                    <p className="text-muted-foreground">
                      Wij berekenen de terugverdientijd: na hoeveel maanden hebt u de kosten terugverdiend? 
                      Als u nog 10+ jaar in uw huis blijft wonen, loont oversluiten vaak.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Veelgestelde Vragen</h2>
          </div>
          
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
                a: "Ja, de nieuwe bank doet een volledige beoordeling. Maar wij helpen u alles te verzamelen."
              },
              {
                q: "Wat als ik net mijn rentevaste periode heb verlengd?",
                a: "Dan kan de boeterente hoog uitvallen. Toch kan oversluiten nog steeds interessant zijn. Wij maken de som."
              }
            ].map((item, idx) => (
              <Card 
                key={idx} 
                className="cursor-pointer hover-elevate transition-all border-0 shadow-sm" 
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                data-testid={`card-faq-${idx}`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-lg">{item.q}</h3>
                    <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 text-green-600 ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                  </div>
                  {expandedFaq === idx && (
                    <p className="mt-4 text-muted-foreground">{item.a}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-green-600 to-green-500 text-white border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ontdek Uw Besparing</h2>
                <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
                  Vraag een gratis oversluitcheck aan. Wij berekenen exact hoeveel u kunt besparen.
                </p>
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg" data-testid="button-cta-bottom">
                    <Phone className="w-5 h-5 mr-2" />
                    Vraag Oversluitcheck Aan
                  </Button>
                </Link>
                <p className="text-sm text-white/70 mt-6">
                  Vrijblijvend. U beslist zelf of u wilt oversluiten.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
