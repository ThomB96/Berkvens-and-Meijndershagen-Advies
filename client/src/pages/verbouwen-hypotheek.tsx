import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown, Hammer, Leaf, CheckCircle, AlertCircle, Lightbulb, Phone, Home, Zap, PiggyBank, Star, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";
import renovationImg from "@assets/stock_images/home_renovation_kitc_a935dc27.jpg";
import kitchenImg from "@assets/stock_images/home_renovation_kitc_427af90d.jpg";

export default function VerbouwenPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/10">
      <title>Hypotheek Voor Verbouwing | Financiering Renovatie</title>
      <meta name="description" content="Uw huis renoveren? Ontdek hoe u uw verbouwing financiert met hypotheekuitbreiding of lening. Tips voor energiebesparende verbouwingen." />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent/70 z-10" />
        <img 
          src={renovationImg} 
          alt="Moderne keuken renovatie" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Hammer className="w-4 h-4" />
              Uw droomhuis creëren
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Verbouwen?<br />
              Wij regelen de financiering.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              Een nieuwe keuken, een uitbouw, of uw huis verduurzamen. Mooie plannen! 
              Wij laten zien welke opties er zijn.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg" data-testid="button-cta-hero">
                  <Phone className="w-5 h-5 mr-2" />
                  Bespreek Uw Plannen
                </Button>
              </Link>
            </div>
            <p className="text-sm text-white/70 mt-6">
              Vrijblijvend advies over de beste financieringsoptie.
            </p>
          </div>
        </div>
      </section>

      {/* Vertrouwensindicatoren */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-card border-b">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm">Onafhankelijk advies</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Leaf className="w-5 h-5 text-green-600" />
              <span className="text-sm">Subsidie-specialist</span>
            </div>
          </div>
        </div>
      </section>

      {/* Herkenbare situatie */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Lightbulb className="w-4 h-4" />
                U bent niet de enige
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                "Onze keuken is hopeloos verouderd..."
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                "...en we dromen van een lichte aanbouw. Maar het kostenplaatje is behoorlijk."
              </p>
              <p className="text-lg font-medium mb-6">
                Dit horen we regelmatig. Het goede nieuws: er zijn slimme manieren om uw verbouwing betaalbaar te maken.
              </p>
              <Link href="/contact">
                <Button className="group" data-testid="button-cta-mogelijkheden">
                  Ontdek uw mogelijkheden
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div>
              <div className="relative">
                <img 
                  src={kitchenImg} 
                  alt="Moderne gerenoveerde keuken" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
                  <p className="text-sm font-medium">Gem. verbouwbudget</p>
                  <p className="text-2xl font-bold">€ 35.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financieringsopties */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hoe Financiert U Een Verbouwing?</h2>
            <p className="text-muted-foreground">Welke optie past het beste bij uw situatie?</p>
          </div>

          <div className="grid gap-4">
            {[
              { 
                icon: PiggyBank, 
                title: "Uit spaargeld", 
                desc: "Ideaal als u het kunt betalen. Geen rente, geen extra schuld.",
                pro: "Geen maandlasten", 
                con: "Minder buffer voor noodgevallen",
                color: "bg-blue-500"
              },
              { 
                icon: Home, 
                title: "Hypotheek verhogen", 
                desc: "Uw hypotheek groeit mee. Vaak de goedkoopste optie qua rente.",
                pro: "Laagste rentetarief (3-4%)", 
                con: "Kost 4-6 weken, hogere totale schuld",
                color: "bg-green-500"
              },
              { 
                icon: CheckCircle, 
                title: "Persoonlijke lening", 
                desc: "Snel geregeld, zonder dat uw hypotheek verandert.",
                pro: "Binnen 1-2 weken geregeld", 
                con: "Hogere rente (6-9%)",
                color: "bg-purple-500"
              },
              { 
                icon: Zap, 
                title: "Combinatie", 
                desc: "Een deel spaargeld, een deel financieren. Vaak de verstandigste keuze.",
                pro: "Flexibel en gebalanceerd", 
                con: "Vraagt goede planning",
                color: "bg-amber-500"
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-md overflow-hidden hover-elevate transition-all">
                <CardContent className="p-0">
                  <div className="flex gap-4">
                    <div className={`${item.color} w-20 flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 py-5 pr-5">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
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
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <Hammer className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Welke optie past bij u?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Wij berekenen wat de goedkoopste en slimste manier is om uw verbouwing te financieren.
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg" data-testid="button-cta-middle">
              <Phone className="w-5 h-5 mr-2" />
              Vraag Verbouwadvies
            </Button>
          </Link>
        </div>
      </section>

      {/* Verduurzamen */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50 dark:bg-green-900/10">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Verduurzamen? Extra Voordelen!</h2>
              <p className="text-muted-foreground">Subsidies, lagere rentes en belastingvoordelen</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: "Isolatie", desc: "Muren, dak, vloer en ramen. Directe besparing op uw energierekening.", subsidy: "Tot 30% subsidie" },
              { title: "Zonnepanelen", desc: "Produceer uw eigen stroom. Terugverdientijd vaak binnen 7 jaar.", subsidy: "BTW-vrijstelling" },
              { title: "Warmtepomp", desc: "Van gas af? Subsidie tot €5.000 mogelijk.", subsidy: "Tot €5.000" },
              { title: "HR++ glas", desc: "Meer comfort, minder warmteverlies.", subsidy: "Tot 40% subsidie" }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-md overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-green-400 to-green-600" />
                <CardContent className="pt-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">{item.subsidy}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-0 shadow-lg bg-green-100 dark:bg-green-900/30">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Lightbulb className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Extra leenruimte voor verduurzaming</h3>
                  <p className="text-sm text-muted-foreground">
                    Bij energiebesparende maatregelen kunt u vaak tot €10.000 extra lenen boven uw normale maximale hypotheek. 
                    En sommige banken bieden een rentekorting. Vraag ons naar de mogelijkheden!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Veelgestelde Vragen</h2>
          </div>
          
          <div className="space-y-3">
            {[
              {
                q: "Hoeveel kan ik lenen voor een verbouwing?",
                a: "Dit hangt af van uw huidige hypotheek en de waarde van uw huis na verbouwing. Vaak is 70-90% van de nieuwe waarde mogelijk."
              },
              {
                q: "Kan de bank het geld rechtstreeks aan de aannemer betalen?",
                a: "Ja, dit is zelfs gebruikelijk. De bank betaalt in termijnen uit naarmate de verbouwing vordert."
              },
              {
                q: "Wat als de verbouwing duurder wordt dan gepland?",
                a: "Regel dit van tevoren goed. Neem een buffer van 10-20% op in uw financiering."
              },
              {
                q: "Moet ik de verbouwing eerst laten taxeren?",
                a: "Ja, de bank wil weten wat uw huis waard wordt na de verbouwing. Een taxateur maakt een inschatting."
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
                    <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 text-accent ${expandedFaq === idx ? 'rotate-180' : ''}`} />
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
          <Card className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar Om Te Verbouwen?</h2>
                <p className="text-lg text-accent-foreground/90 mb-8 max-w-xl mx-auto">
                  Laat ons meedenken over de financiering. Wij vinden de slimste manier voor uw situatie.
                </p>
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg" data-testid="button-cta-bottom">
                    <Phone className="w-5 h-5 mr-2" />
                    Bespreek Uw Plannen
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
