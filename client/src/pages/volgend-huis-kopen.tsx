import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown, Home, TrendingUp, ArrowRightLeft, CheckCircle, AlertCircle, Lightbulb, Phone, Users, PiggyBank, Star, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";
import familyMovingImg from "@assets/stock_images/family_moving_into_n_641922e7.jpg";
import advisorMeetingImg from "@assets/stock_images/couple_reviewing_doc_48aad1b1.jpg";
import dutchHouseImg from "@assets/stock_images/beautiful_dutch_hous_ec3a0dab.jpg";

export default function VolgendHuisKopenPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <title>Volgend Huis Kopen | Hypotheekadvies Voor Doorstromers</title>
      <meta name="description" content="Doorstromen naar een groter huis? Ontdek uw mogelijkheden met overwaarde, meeneemhypotheek en financieringsopties. Deskundig advies voor doorstromers." />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img 
          src={dutchHouseImg} 
          alt="Mooie Nederlandse woning" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Voor doorstromers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Klaar voor de Volgende Stap?<br />
              Uw overwaarde werkt voor u.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              Uw gezin groeit, of u wilt gewoon meer ruimte. Als doorstromer hebt u vaak flinke voordelen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg" data-testid="button-cta-hero">
                  <Phone className="w-5 h-5 mr-2" />
                  Bereken Mijn Mogelijkheden
                </Button>
              </Link>
            </div>
            <p className="text-sm text-white/70 mt-6">
              Vrijblijvend en gratis. Wij rekenen voor wat er mogelijk is.
            </p>
          </div>
        </div>
      </section>

      {/* Vertrouwensindicatoren */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-card border-b">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="font-bold text-lg">9.4</span>
              <span className="text-muted-foreground text-sm">/ 10</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">Onafhankelijk advies</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm">300+ doorstromers per jaar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Wist u dit */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={familyMovingImg} 
                alt="Gezin verhuist naar nieuwe woning" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Lightbulb className="w-4 h-4" />
                Wist u dit?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                U hebt waarschijnlijk meer overwaarde dan u denkt
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Door gestegen huizenprijzen hebben veel huiseigenaren flink wat vermogen opgebouwd. 
                Dit geeft u een sterke positie op de woningmarkt.
              </p>
              <Link href="/contact">
                <Button className="group" data-testid="button-cta-overwaarde">
                  Bereken mijn overwaarde
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overwaarde rekenvoorbeeld */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wat Kunt U Doen Met Overwaarde?</h2>
          </div>

          <Card className="border-0 shadow-xl overflow-hidden mb-8">
            <div className="h-2 bg-gradient-to-r from-green-400 to-green-600" />
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <PiggyBank className="w-8 h-8 text-green-600" />
                <h3 className="font-semibold text-xl">Rekenvoorbeeld</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="bg-accent/10 rounded-xl p-6">
                  <p className="text-sm text-muted-foreground mb-2">Verkoopprijs huis</p>
                  <p className="text-3xl font-bold text-primary">€ 380.000</p>
                </div>
                <div className="bg-accent/10 rounded-xl p-6">
                  <p className="text-sm text-muted-foreground mb-2">Restant hypotheek</p>
                  <p className="text-3xl font-bold">€ 220.000</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 rounded-xl p-6 ring-2 ring-green-500">
                  <p className="text-sm text-muted-foreground mb-2">Uw overwaarde</p>
                  <p className="text-3xl font-bold text-green-600">€ 160.000</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
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
              <Card key={idx} className="border-0 shadow-sm hover-elevate transition-all">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
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
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Benieuwd naar uw overwaarde?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Wij berekenen gratis wat uw woning nu waard is en hoeveel overwaarde u heeft opgebouwd.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Gratis waardebepaling",
                  "Inzicht in uw financiële ruimte",
                  "Advies over timing van doorstromen",
                  "Vergelijking meenemen vs. nieuwe hypotheek"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button size="lg" className="text-lg" data-testid="button-cta-middle">
                  <Phone className="w-5 h-5 mr-2" />
                  Bereken Mijn Overwaarde
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src={advisorMeetingImg} 
                alt="Adviesgesprek" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meenemen vs Nieuw */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hypotheek Meenemen of Nieuw?</h2>
            <p className="text-muted-foreground">Wij rekenen uit wat voor u het beste is</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-primary/70" />
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <ArrowRightLeft className="w-6 h-6 text-primary" />
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

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-accent to-accent/70" />
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
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

          <p className="text-center text-muted-foreground mt-8">
            <span className="font-medium text-foreground">Tip:</span> Wij maken voor u een doorrekening van beide scenario's.
          </p>
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
                q: "Wat als ik eerst moet kopen voordat ik verkoop?",
                a: "Dit komt veel voor. Er zijn oplossingen zoals een overbruggingskrediet. Wij bespreken de opties en risico's met u."
              },
              {
                q: "Hoeveel overwaarde moet ik inbrengen?",
                a: "Dat bepaalt u zelf. Meer inbrengen betekent lagere maandlasten, maar een buffer behouden is verstandig."
              },
              {
                q: "Kan ik dubbele lasten dragen als de verkoop vertraagt?",
                a: "Dit is een reëel risico. De bank beoordeelt of u tijdelijk twee hypotheken kunt dragen."
              },
              {
                q: "Hoe lang duurt het doorstroomproces?",
                a: "Gemiddeld 3-4 maanden, afhankelijk van de woningmarkt en hoe snel u een koper vindt."
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
                    <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 text-primary ${expandedFaq === idx ? 'rotate-180' : ''}`} />
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
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar Voor Het Volgende Avontuur?</h2>
                <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                  Laat ons berekenen wat u kunt lenen en hoe u optimaal gebruik maakt van uw overwaarde.
                </p>
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg" data-testid="button-cta-bottom">
                    <Phone className="w-5 h-5 mr-2" />
                    Plan een Adviesgesprek
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
