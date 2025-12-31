import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown, Hammer, Leaf, CheckCircle, AlertCircle, Lightbulb, Phone, Home, Zap, PiggyBank } from "lucide-react";
import { useState } from "react";

export default function VerbouwenPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <title>Hypotheek Voor Verbouwing | Financiering Renovatie</title>
      <meta name="description" content="Uw huis renoveren? Ontdek hoe u uw verbouwing financiert met hypotheekuitbreiding of lening. Tips voor energiebesparende verbouwingen." />

      {/* Hero */}
      <section className="bg-gradient-to-br from-accent/10 via-accent/5 to-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Hammer className="w-4 h-4" />
            Uw droomhuis creëren
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Verbouwen?<br />
            <span className="text-accent">Wij regelen de financiering.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Een nieuwe keuken, een uitbouw, of uw huis verduurzamen. Mooie plannen! 
            Maar hoe betaalt u dat? Wij laten zien welke opties er zijn.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-cta-hero">
                <Phone className="w-5 h-5 mr-2" />
                Bespreek Uw Verbouwplannen
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Vrijblijvend advies over de beste financieringsoptie.
          </p>
        </div>
      </section>

      {/* Herkenbare situatie */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <Card className="border-l-4 border-l-accent">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Lightbulb className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">U bent niet de enige</h3>
                  <p className="text-muted-foreground">
                    "Onze keuken is hopeloos verouderd en we dromen van een lichte aanbouw. 
                    Maar het kostenplaatje is behoorlijk..." - Dit horen we regelmatig. 
                    Het goede nieuws: er zijn slimme manieren om uw verbouwing betaalbaar te maken.
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
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Hoe Financiert U Een Verbouwing?</h2>
            <p className="text-muted-foreground mb-8">
              Er zijn verschillende manieren. Welke het beste past, hangt af van het bedrag, uw situatie en uw wensen.
            </p>

            <div className="grid gap-4">
              {[
                { 
                  icon: PiggyBank, 
                  title: "Uit spaargeld", 
                  desc: "Ideaal als u het kunt betalen. Geen rente, geen extra schuld.",
                  pro: "Geen maandlasten", 
                  con: "Minder buffer voor noodgevallen"
                },
                { 
                  icon: Home, 
                  title: "Hypotheek verhogen", 
                  desc: "Uw hypotheek groeit mee. Vaak de goedkoopste optie qua rente.",
                  pro: "Laagste rentetarief (3-4%)", 
                  con: "Kost 4-6 weken, hogere totale schuld"
                },
                { 
                  icon: CheckCircle, 
                  title: "Persoonlijke lening", 
                  desc: "Snel geregeld, zonder dat uw hypotheek verandert.",
                  pro: "Binnen 1-2 weken geregeld", 
                  con: "Hogere rente (6-9%)"
                },
                { 
                  icon: Zap, 
                  title: "Combinatie", 
                  desc: "Een deel spaargeld, een deel financieren. Vaak de verstandigste keuze.",
                  pro: "Flexibel en gebalanceerd", 
                  con: "Vraagt goede planning"
                }
              ].map((item, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <item.icon className="w-8 h-8 text-accent flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
                        <div className="grid sm:grid-cols-2 gap-2 text-sm">
                          <div className="flex gap-2 items-center">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{item.pro}</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <AlertCircle className="w-4 h-4 text-amber-500" />
                            <span>{item.con}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA halverwege */}
          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="pt-6 text-center">
              <Hammer className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Welke optie past bij u?</h3>
              <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                Wij berekenen wat de goedkoopste en slimste manier is om uw verbouwing te financieren.
              </p>
              <Link href="/contact">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-cta-middle">
                  Vraag Verbouwadvies
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Energiebesparende verbouwingen */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="w-8 h-8 text-green-500" />
              <h2 className="text-3xl font-bold">Verduurzamen? Extra Voordelen!</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Energiebesparende verbouwingen worden gestimuleerd door de overheid. 
              U kunt profiteren van subsidies, lagere rentes en belastingvoordelen.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { title: "Isolatie", desc: "Muren, dak, vloer en ramen. Directe besparing op uw energierekening." },
                { title: "Zonnepanelen", desc: "Produceer uw eigen stroom. Terugverdientijd vaak binnen 7 jaar." },
                { title: "Warmtepomp", desc: "Van gas af? Subsidie tot €5.000 mogelijk." },
                { title: "HR++ glas", desc: "Meer comfort, minder warmteverlies. Tot 40% subsidie." }
              ].map((item, idx) => (
                <Card key={idx} className="border-l-4 border-l-green-500">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Lightbulb className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Tip: Extra leenruimte voor verduurzaming</h3>
                    <p className="text-sm text-muted-foreground">
                      Bij energiebesparende maatregelen kunt u vaak tot €10.000 extra lenen boven uw normale maximale hypotheek. 
                      En sommige banken bieden een rentekorting. Vraag ons naar de mogelijkheden!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Veelgestelde Vragen</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Hoeveel kan ik lenen voor een verbouwing?",
                  a: "Dit hangt af van uw huidige hypotheek en de waarde van uw huis na verbouwing. Vaak is 70-90% van de nieuwe waarde mogelijk. Wij berekenen uw ruimte."
                },
                {
                  q: "Kan de bank het geld rechtstreeks aan de aannemer betalen?",
                  a: "Ja, dit is zelfs gebruikelijk. De bank betaalt in termijnen uit naarmate de verbouwing vordert. Zo hoeft u niet voor te financieren."
                },
                {
                  q: "Wat als de verbouwing duurder wordt dan gepland?",
                  a: "Regel dit van tevoren goed. Neem een buffer van 10-20% op in uw financiering. Als het toch tegenvalt, bespreken we de opties."
                },
                {
                  q: "Moet ik de verbouwing eerst laten taxeren?",
                  a: "Ja, de bank wil weten wat uw huis waard wordt na de verbouwing. Een taxateur maakt een inschatting op basis van uw plannen."
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
          <div className="bg-accent text-accent-foreground rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Klaar Om Te Verbouwen?</h2>
            <p className="text-lg text-accent-foreground/90 mb-6 max-w-xl mx-auto">
              Laat ons meedenken over de financiering. Wij vinden de slimste manier 
              voor uw situatie en zorgen dat u weet waar u aan toe bent.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-cta-bottom">
                <Phone className="w-5 h-5 mr-2" />
                Bespreek Uw Plannen
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
