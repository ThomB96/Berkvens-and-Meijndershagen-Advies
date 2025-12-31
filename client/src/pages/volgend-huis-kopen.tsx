import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown, Home, TrendingUp, ArrowRightLeft, CheckCircle, AlertCircle, Lightbulb, Phone, Users, PiggyBank } from "lucide-react";
import { useState } from "react";

export default function VolgendHuisKopenPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <title>Volgend Huis Kopen | Hypotheekadvies Voor Doorstromers</title>
      <meta name="description" content="Doorstromen naar een groter huis? Ontdek uw mogelijkheden met overwaarde, meeneemhypotheek en financieringsopties. Deskundig advies voor doorstromers." />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Voor doorstromers
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Klaar voor de Volgende Stap?<br />
            <span className="text-primary">Uw overwaarde werkt voor u.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Uw gezin groeit, of u wilt gewoon meer ruimte. Goed nieuws: als doorstromer hebt u vaak flinke voordelen. Wij laten zien wat mogelijk is.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8" data-testid="button-cta-hero">
                <Phone className="w-5 h-5 mr-2" />
                Bereken Mijn Mogelijkheden
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Vrijblijvend en gratis. Wij rekenen voor wat er mogelijk is.
          </p>
        </div>
      </section>

      {/* Highlightblok */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Lightbulb className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Wist u dit?</h3>
                  <p className="text-muted-foreground">
                    Veel doorstromers onderschatten hun mogelijkheden. Door gestegen huizenprijzen hebt u 
                    vaak meer overwaarde dan u denkt. Dit geeft u een sterke positie op de woningmarkt.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-16">
          
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Wat Betekent Doorstromen?</h2>
            <p className="text-lg text-muted-foreground">
              Doorstromen betekent dat u uw huidige woning verkoopt en een nieuwe koopt. 
              Klinkt simpel, maar de timing en financiering vragen om goede planning.
            </p>
            <p className="text-lg text-muted-foreground">
              Het goede nieuws? U hebt ervaring. En waarschijnlijk overwaarde. 
              Daarmee staat u sterker dan toen u uw eerste huis kocht.
            </p>
          </div>

          {/* Overwaarde uitleg met voorbeeld */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Wat Kunt U Doen Met Overwaarde?</h2>
            
            <Card className="bg-primary/5 border-primary/20 mb-6">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <PiggyBank className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-lg">Rekenvoorbeeld</h3>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-background rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Verkoopprijs huis</p>
                    <p className="text-2xl font-bold text-primary">€ 380.000</p>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Restant hypotheek</p>
                    <p className="text-2xl font-bold">€ 220.000</p>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Uw overwaarde</p>
                    <p className="text-2xl font-bold text-green-600">€ 160.000</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  *Minus verkoopkosten (circa €10.000). Dit bedrag kunt u inzetten voor uw nieuwe woning.
                </p>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Lagere hypotheek", desc: "Meer eigen geld inbrengen = lagere maandlasten" },
                { title: "Beter rentetarief", desc: "Hoe meer eigen inbreng, hoe scherper de rente" },
                { title: "Ruimte voor verbouwing", desc: "Uw droomkeuken of uitbouw meefinancieren" },
                { title: "Buffer behouden", desc: "Verstandig om niet alles in te zetten" }
              ].map((item, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA halverwege */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6 text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Benieuwd naar uw overwaarde?</h3>
              <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                Wij berekenen gratis wat uw woning nu waard is en hoeveel overwaarde u heeft opgebouwd.
              </p>
              <Link href="/contact">
                <Button data-testid="button-cta-middle">
                  Bereken Mijn Overwaarde
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Meenemen vs Oversluiten */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Hypotheek Meenemen of Nieuw Afsluiten?</h2>
            <p className="text-muted-foreground mb-6">
              Dit is een belangrijke keuze. Beide opties hebben voor- en nadelen. Wij rekenen uit wat voor u het beste is.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-t-4 border-t-primary">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <ArrowRightLeft className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg">Hypotheek meenemen</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Uw huidige rente blijft behouden</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Geen boeterente</li>
                    <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Minder keuze in voorwaarden</li>
                    <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Aanvullen bij zelfde bank</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-accent">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold text-lg">Nieuwe hypotheek</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Mogelijk lagere rente</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Volledige keuzevrijheid</li>
                    <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Mogelijk boeterente</li>
                    <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Nieuwe kosten adviseur/notaris</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-muted-foreground mt-6">
              <span className="font-medium text-foreground">Tip:</span> Wij maken voor u een doorrekening van beide scenario's, 
              zodat u een weloverwogen keuze kunt maken.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Veelgestelde Vragen</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Wat als ik eerst moet kopen voordat ik verkoop?",
                  a: "Dit komt veel voor. Er zijn oplossingen zoals een overbruggingskrediet of een langere financieringsvoorbehoud. Wij bespreken de opties en risico's met u."
                },
                {
                  q: "Hoeveel overwaarde moet ik inbrengen?",
                  a: "Dat bepaalt u zelf. Meer inbrengen betekent lagere maandlasten, maar het kan verstandig zijn om een buffer te behouden. Wij adviseren over de optimale verdeling."
                },
                {
                  q: "Kan ik dubbele lasten dragen als de verkoop vertraagt?",
                  a: "Dit is een reëel risico. De bank beoordeelt of u tijdelijk twee hypotheken kunt dragen. Wij helpen u dit vooraf goed in te schatten."
                },
                {
                  q: "Hoe lang duurt het doorstroomproces?",
                  a: "Gemiddeld 3-4 maanden, afhankelijk van de woningmarkt en hoe snel u een koper en nieuwe woning vindt. Wij begeleiden u door elke stap."
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
            <h2 className="text-3xl font-bold mb-4">Klaar Voor Het Volgende Avontuur?</h2>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              Laat ons berekenen wat u kunt lenen en hoe u optimaal gebruik maakt van uw overwaarde. 
              Vrijblijvend en persoonlijk.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-cta-bottom">
                <Phone className="w-5 h-5 mr-2" />
                Plan een Adviesgesprek
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
