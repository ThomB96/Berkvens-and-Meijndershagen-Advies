import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown, Calendar, Calculator, CheckCircle, AlertCircle, Shield, Clock, Phone, ArrowRight, Sunset, Target, TrendingDown } from "lucide-react";
import { useState } from "react";
import seniorCoupleImg from "@assets/stock_images/senior_couple_retire_b6cb22d2.jpg";
import advisorMeetingImg from "@assets/stock_images/couple_reviewing_doc_7929205a.jpg";
import celebratingImg from "@assets/stock_images/couple_celebrating_g_8d0ce3cd.jpg";

export default function EerderStoppenPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <title>Eerder Stoppen met Werken | Financieel Advies</title>
      <meta name="description" content="Droomt u van eerder stoppen met werken? Wij berekenen of het kan en hoe. Krijg inzicht in uw financiële mogelijkheden voor vroegpensioen." />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img 
          src={seniorCoupleImg} 
          alt="Senioren genieten van vrije tijd" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sunset className="w-4 h-4" />
              Financieel Advies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-page-h1">
              Eerder Stoppen met Werken?<br />
              Ontdek of het kan.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              De vrijheid om te kiezen wanneer u stopt. 
              Wij rekenen uit wat daarvoor nodig is.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg" data-testid="button-cta-hero">
                  <Phone className="w-5 h-5 mr-2" />
                  Plan een Berekening
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20" 
                onClick={() => document.getElementById('stappenplan')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-scroll-stappenplan"
              >
                Hoe werkt het?
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
                Dit klinkt vast bekend
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                "Ik wil niet wachten tot mijn 67e..."
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Veel mensen dromen ervan om eerder te stoppen. Meer tijd voor hobby's, 
                reizen, of gewoon genieten. Maar kan dat financieel wel?
              </p>
              <p className="text-lg font-medium mb-6">
                Wij maken de som. En laten zien wat er mogelijk is - 
                of wat u nog moet regelen om het mogelijk te maken.
              </p>
              <Link href="/contact">
                <Button className="group" data-testid="button-cta-berekening">
                  Maak een berekening
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div>
              <div className="relative">
                <img 
                  src={celebratingImg} 
                  alt="Stel viert vrijheid" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                  <p className="text-3xl font-bold">5 jaar</p>
                  <p className="text-sm">eerder stoppen is vaak haalbaar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stappenplan */}
      <section id="stappenplan" className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Zo Pakken We Het Aan</h2>
            <p className="text-lg text-muted-foreground">Een helder stappenplan naar uw vroegpensioen</p>
          </div>
          
          <div className="grid gap-4">
            {[
              { step: 1, icon: Calculator, title: "Inventarisatie", desc: "We brengen al uw inkomsten en vermogen in kaart", color: "bg-blue-500" },
              { step: 2, icon: Calendar, title: "Wensdatum bepalen", desc: "Wanneer wilt u stoppen? Op welke leeftijd?", color: "bg-indigo-500" },
              { step: 3, icon: TrendingDown, title: "Berekening maken", desc: "Wat zijn uw uitgaven en wat komt er binnen na stoppen?", color: "bg-purple-500" },
              { step: 4, icon: Target, title: "Scenario's doorrekenen", desc: "Verschillende opties en hun gevolgen bekijken", color: "bg-pink-500" },
              { step: 5, icon: CheckCircle, title: "Actieplan opstellen", desc: "Concrete stappen om uw doel te bereiken", color: "bg-green-500" },
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
                alt="Adviesgesprek over vroegpensioen" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Wat kunnen wij voor u betekenen?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Wij maken een compleet financieel plan dat laat zien of en wanneer 
                u kunt stoppen met werken. Geen vage beloftes, maar concrete cijfers.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Complete vermogensanalyse",
                  "Pensioen- en AOW-berekening",
                  "Scenario's voor verschillende stopdatums",
                  "Concreet actieplan"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Waar Moet U Rekening Mee Houden?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-green-400 to-green-600" />
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Mogelijkheden
                </h3>
                <ul className="space-y-3">
                  {[
                    "Spaargeld en beleggingen inzetten",
                    "Overwaarde woning benutten",
                    "Parttime blijven werken",
                    "Pensioen eerder laten ingaan"
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
                  Aandachtspunten
                </h3>
                <ul className="space-y-3">
                  {[
                    "AOW-gat overbruggen",
                    "Zorgverzekering regelen",
                    "Inflatie meenemen in berekening",
                    "Buffer voor onverwachte kosten"
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
            <p className="text-muted-foreground">Antwoorden op vragen over eerder stoppen</p>
          </div>
          
          <div className="space-y-3">
            {[
              {
                q: "Hoeveel heb ik nodig om eerder te stoppen?",
                a: "Dat hangt af van uw gewenste levensstijl, vaste lasten en de jaren tot uw AOW. Wij maken een persoonlijke berekening."
              },
              {
                q: "Wat is het AOW-gat?",
                a: "De periode tussen uw stopdatum en het moment dat u AOW ontvangt. Deze moet u zelf overbruggen met spaargeld of vermogen."
              },
              {
                q: "Kan ik mijn pensioen eerder laten ingaan?",
                a: "Vaak wel, maar dan krijgt u minder per maand. Wij berekenen of dit in uw situatie verstandig is."
              },
              {
                q: "Wat als ik parttime wil blijven werken?",
                a: "Dat is vaak een slimme tussenvorm. U hoeft minder vermogen aan te spreken en blijft actief. Wij rekenen de opties door."
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
            Benieuwd of u eerder kunt stoppen?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Maak een afspraak voor een verkennend gesprek. 
            Wij laten zien wat de mogelijkheden zijn.
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
