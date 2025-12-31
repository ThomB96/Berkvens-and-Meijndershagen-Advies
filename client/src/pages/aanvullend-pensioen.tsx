import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown, PiggyBank, TrendingUp, Calculator, CheckCircle, AlertCircle, Shield, Clock, Phone, ArrowRight, Landmark, Target } from "lucide-react";
import { useState } from "react";
import seniorCoupleImg from "@assets/stock_images/senior_couple_retire_cfa79c85.jpg";
import advisorMeetingImg from "@assets/stock_images/couple_reviewing_doc_7929205a.jpg";
import piggyBankImg from "@assets/stock_images/piggy_bank_savings_f_4aac8c3d.jpg";

export default function AanvullendPensioenPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <title>Aanvullend Pensioen Opbouwen | Financieel Advies</title>
      <meta name="description" content="Bouw extra pensioen op voor een zorgeloze oude dag. Ontdek de mogelijkheden voor aanvullend pensioen via lijfrente, beleggen of banksparen. Persoonlijk advies." />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img 
          src={seniorCoupleImg} 
          alt="Senioren genieten van pensioen" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Landmark className="w-4 h-4" />
              Financieel Advies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-page-h1">
              Aanvullend Pensioen Opbouwen<br />
              Voor een zorgeloze toekomst.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              Uw AOW en werkgeverspensioen zijn vaak niet genoeg. 
              Wij helpen u slim extra vermogen op te bouwen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg" data-testid="button-cta-hero">
                  <Phone className="w-5 h-5 mr-2" />
                  Gratis Adviesgesprek
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20" 
                onClick={() => document.getElementById('mogelijkheden')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-scroll-mogelijkheden"
              >
                Bekijk mogelijkheden
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vertrouwensindicatoren */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-card border-b">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">AFM Gecertificeerd</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">Reactie binnen 24 uur</span>
            </div>
          </div>
        </div>
      </section>

      {/* Herkenbare situatie */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Target className="w-4 h-4" />
                Herkenbaar?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                "Is mijn pensioen straks wel genoeg?"
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Steeds meer Nederlanders maken zich zorgen over hun pensioen. 
                De AOW en werkgeverspensioen dekken vaak maar 70% van uw laatstverdiende salaris.
              </p>
              <p className="text-lg font-medium mb-6">
                Gelukkig kunt u zelf actie ondernemen. En hoe eerder u begint, 
                hoe groter het effect.
              </p>
              <Link href="/contact">
                <Button className="group" data-testid="button-cta-advies">
                  Vraag advies aan
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div>
              <div className="relative">
                <img 
                  src={piggyBankImg} 
                  alt="Sparen voor de toekomst" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                  <p className="text-3xl font-bold">30%</p>
                  <p className="text-sm">pensioengat voor veel Nederlanders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mogelijkheden */}
      <section id="mogelijkheden" className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Uw Mogelijkheden</h2>
            <p className="text-lg text-muted-foreground">Verschillende wegen naar een beter pensioen</p>
          </div>
          
          <div className="grid gap-4">
            {[
              { step: 1, icon: PiggyBank, title: "Lijfrente", desc: "Fiscaal voordelig sparen via een verzekering of bank", color: "bg-blue-500" },
              { step: 2, icon: TrendingUp, title: "Beleggen", desc: "Potentieel hoger rendement, maar met meer risico", color: "bg-indigo-500" },
              { step: 3, icon: Landmark, title: "Banksparen", desc: "Veilig sparen met belastingvoordeel", color: "bg-purple-500" },
              { step: 4, icon: Calculator, title: "Jaarruimte benutten", desc: "Maximaal profiteren van fiscale aftrekmogelijkheden", color: "bg-pink-500" },
            ].map((item) => (
              <Card key={item.step} className="overflow-hidden hover-elevate transition-all border-0 shadow-sm hover:shadow-md">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4">
                    <div className={`${item.color} w-16 h-16 flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                      {item.step}
                    </div>
                    <div className="flex-1 py-4 pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA met adviseur foto */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={advisorMeetingImg} 
                alt="Adviesgesprek over pensioen" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Weet u hoeveel u later ontvangt?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Wij maken een complete pensioenscan en laten zien waar u staat. 
                Daarna bespreken we wat de beste opties zijn voor uw situatie.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Gratis pensioenscan",
                  "Inzicht in uw pensioengat",
                  "Vergelijking van alle opties",
                  "Advies op maat"
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
                  Plan een Gesprek
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen & Aandachtspunten */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Waar Moet U Op Letten?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-green-400 to-green-600" />
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Voordelen
                </h3>
                <ul className="space-y-3">
                  {[
                    "Fiscaal aftrekbaar van uw inkomen",
                    "Vermogen groeit belastingvrij door",
                    "Flexibele inleg mogelijk",
                    "Zekerheid voor later"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600" />
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-amber-500" />
                  Let hierop
                </h3>
                <ul className="space-y-3">
                  {[
                    "Geld zit vast tot pensioenleeftijd",
                    "Uitkering is belast als inkomen",
                    "Niet altijd gunstig bij laag inkomen",
                    "Beleggingsrisico bij sommige producten"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Veelgestelde Vragen</h2>
            <p className="text-muted-foreground">Antwoorden op de meest gestelde vragen over aanvullend pensioen</p>
          </div>
          
          <div className="space-y-3">
            {[
              {
                q: "Hoeveel kan ik fiscaal aftrekken?",
                a: "Dit hangt af van uw jaarruimte en reserveringsruimte. Wij berekenen exact hoeveel u mag inleggen en wat het belastingvoordeel is."
              },
              {
                q: "Wanneer kan ik het beste beginnen?",
                a: "Hoe eerder, hoe beter. Door het rente-op-rente effect groeit uw vermogen sneller naarmate u langer spaart."
              },
              {
                q: "Kan ik eerder bij mijn geld?",
                a: "In principe niet, het is bedoeld voor uw pensioen. In uitzonderlijke gevallen (zoals arbeidsongeschiktheid) zijn er soms mogelijkheden."
              },
              {
                q: "Wat is het verschil tussen lijfrente en banksparen?",
                a: "Bij lijfrente sluit u een verzekering af, bij banksparen spaart u via een geblokkeerde rekening. Beide hebben fiscale voordelen."
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
                    <p className="text-muted-foreground mt-4">{item.a}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Klaar om uw pensioen te verbeteren?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Maak een afspraak voor een gratis pensioenscan. 
            Wij laten zien waar u staat en wat de mogelijkheden zijn.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-cta-bottom">
              <Phone className="w-5 h-5 mr-2" />
              Plan een Afspraak
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
