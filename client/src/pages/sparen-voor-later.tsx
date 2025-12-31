import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown, PiggyBank, TrendingUp, Target, CheckCircle, AlertCircle, Shield, Clock, Phone, ArrowRight, Wallet, Calculator } from "lucide-react";
import { useState } from "react";
import piggyBankImg from "@assets/stock_images/piggy_bank_savings_f_d2940a37.jpg";
import advisorMeetingImg from "@assets/stock_images/couple_reviewing_doc_7929205a.jpg";
import familyImg from "@assets/stock_images/family_moving_into_n_cf7fd414.jpg";

export default function SparenVoorLaterPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <title>Sparen voor Later | Financieel Advies</title>
      <meta name="description" content="Slim sparen voor de toekomst. Ontdek de beste spaarvormen, beleggingsopties en fiscale voordelen. Persoonlijk advies voor uw spaardoelen." />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img 
          src={piggyBankImg} 
          alt="Sparen voor de toekomst" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <PiggyBank className="w-4 h-4" />
              Financieel Advies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-page-h1">
              Sparen voor Later<br />
              Maak uw toekomst zekerder.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              Of het nu gaat om een buffer, de studie van uw kinderen of uw oude dag. 
              Wij helpen u slim sparen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg" data-testid="button-cta-hero">
                  <Phone className="w-5 h-5 mr-2" />
                  Plan Adviesgesprek
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20" 
                onClick={() => document.getElementById('mogelijkheden')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-scroll-mogelijkheden"
              >
                Bekijk opties
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
              <span className="text-sm">Onafhankelijk advies</span>
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
                "Ik wil sparen, maar waar begin ik?"
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Spaarrekening, deposito, beleggen... Er zijn zoveel opties. 
                Welke past bij uw doel en risicoprofiel?
              </p>
              <p className="text-lg font-medium mb-6">
                Wij brengen orde in de chaos en helpen u de juiste keuze maken. 
                Passend bij uw situatie en doelen.
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
                  src={familyImg} 
                  alt="Gezin met toekomstplannen" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                  <p className="text-3xl font-bold">3-6</p>
                  <p className="text-sm">maanden buffer is het minimum</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Spaaropties Vergelijken</h2>
            <p className="text-lg text-muted-foreground">Elke optie heeft voor- en nadelen</p>
          </div>
          
          <div className="grid gap-4">
            {[
              { step: 1, icon: Wallet, title: "Spaarrekening", desc: "Veilig en flexibel, maar laag rendement", color: "bg-blue-500" },
              { step: 2, icon: Clock, title: "Deposito", desc: "Iets hoger rendement, geld staat vast", color: "bg-indigo-500" },
              { step: 3, icon: TrendingUp, title: "Beleggen", desc: "Hoger potentieel rendement, met risico", color: "bg-purple-500" },
              { step: 4, icon: PiggyBank, title: "Banksparen", desc: "Fiscaal voordelig voor pensioen", color: "bg-pink-500" },
              { step: 5, icon: Calculator, title: "Combinatie", desc: "Mix van veiligheid en rendement", color: "bg-green-500" },
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
                alt="Adviesgesprek over sparen" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Wat is de beste strategie voor u?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Wij kijken naar uw doelen, tijdshorizon en risicoprofiel. 
                Zo bepalen we samen wat het beste bij u past.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Analyse van uw huidige situatie",
                  "Bepalen van uw spaardoelen",
                  "Advies over de beste mix",
                  "Concrete aanpak"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Tips voor Slim Sparen</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-green-400 to-green-600" />
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Slimme keuzes
                </h3>
                <ul className="space-y-3">
                  {[
                    "Begin met een noodbuffer (3-6 maanden)",
                    "Automatisch sparen via doorlopende opdracht",
                    "Spreid uw geld over meerdere doelen",
                    "Beleg alleen geld dat u lang kunt missen"
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
                  Vermijd dit
                </h3>
                <ul className="space-y-3">
                  {[
                    "Al uw geld op één rekening laten staan",
                    "Beleggen met geld dat u snel nodig heeft",
                    "Sparen zonder doel of plan",
                    "Hoge kosten bij beleggingsproducten"
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
            <p className="text-muted-foreground">Antwoorden op vragen over sparen</p>
          </div>
          
          <div className="space-y-3">
            {[
              {
                q: "Hoeveel zou ik moeten sparen?",
                a: "Een vuistregel is 10-20% van uw netto inkomen. Maar het hangt af van uw doelen en situatie. Wij helpen u een realistisch bedrag bepalen."
              },
              {
                q: "Is beleggen niet te risicovol?",
                a: "Dat hangt af van uw tijdshorizon. Op lange termijn (10+ jaar) zijn de risico's beperkt. Voor korte termijn doelen is sparen verstandiger."
              },
              {
                q: "Waar haal ik de beste rente?",
                a: "Rentes veranderen voortdurend. Wij vergelijken de opties en kijken naar wat past bij uw situatie, niet alleen naar de hoogste rente."
              },
              {
                q: "Kan ik fiscaal voordelig sparen?",
                a: "Ja, via banksparen of lijfrente voor pensioen. Of via een beleggingsrekening voor uw kinderen. Wij leggen de mogelijkheden uit."
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
            Klaar om slim te gaan sparen?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Maak een afspraak voor een persoonlijk gesprek. 
            Wij helpen u de juiste keuzes maken.
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
