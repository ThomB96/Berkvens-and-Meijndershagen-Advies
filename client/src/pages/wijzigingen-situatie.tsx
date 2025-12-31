import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown, Users, Baby, Briefcase, Home, Heart, CheckCircle, AlertCircle, Shield, Clock, Phone, ArrowRight, RefreshCw, Calculator } from "lucide-react";
import { useState } from "react";
import familyChangesImg from "@assets/stock_images/family_life_changes__c6024dbe.jpg";
import advisorMeetingImg from "@assets/stock_images/couple_reviewing_doc_7929205a.jpg";
import coupleImg from "@assets/stock_images/couple_celebrating_g_8d0ce3cd.jpg";

export default function WijzigingenSituatiePage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <title>Wijzigingen in Uw Situatie | Financieel Advies</title>
      <meta name="description" content="Veranderingen in uw leven vragen om financiële aanpassingen. Trouwen, kinderen, nieuw werk of pensioen - wij helpen u uw financiën op orde te houden." />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img 
          src={familyChangesImg} 
          alt="Gezin in veranderende omstandigheden" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <RefreshCw className="w-4 h-4" />
              Financieel Advies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-page-h1">
              Uw Situatie Verandert?<br />
              Uw financiën ook.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              Levensveranderingen hebben impact op uw financiële planning. 
              Wij zorgen dat alles weer klopt.
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
                onClick={() => document.getElementById('situaties')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-scroll-situaties"
              >
                Bekijk situaties
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
              <span className="text-sm">Persoonlijk advies</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">Reactie binnen 24 uur</span>
            </div>
          </div>
        </div>
      </section>

      {/* Situaties */}
      <section id="situaties" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Welke Verandering Speelt Bij U?</h2>
            <p className="text-lg text-muted-foreground">Elke situatie vraagt om andere aanpassingen</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Heart, title: "Trouwen of samenwonen", desc: "Financiën samenvoegen, testament, partnerpensioen", color: "bg-pink-500" },
              { icon: Baby, title: "Gezinsuitbreiding", desc: "Verzekeringen, sparen voor kind, hypotheek aanpassen", color: "bg-blue-500" },
              { icon: Briefcase, title: "Nieuw werk of ontslag", desc: "Pensioen meenemen, inkomen wijzigt, verzekeringen", color: "bg-indigo-500" },
              { icon: Home, title: "Verhuizen", desc: "Hypotheek aanpassen of meenemen, nieuwe situatie", color: "bg-purple-500" },
              { icon: Users, title: "Uit elkaar gaan", desc: "Verdeling bezittingen, hypotheek splitsen, alimentatie", color: "bg-amber-500" },
              { icon: RefreshCw, title: "Met pensioen gaan", desc: "Inkomen verandert, verzekeringen, vermogensbeheer", color: "bg-green-500" },
            ].map((item, idx) => (
              <Card key={idx} className="hover-elevate transition-all border-0 shadow-sm hover:shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className={`${item.color} w-16 h-full min-h-[100px] flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 py-4 pr-4">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom belangrijk */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <AlertCircle className="w-4 h-4" />
                Waarom is dit belangrijk?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Veranderingen vragen om actie
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Bij elke levensverandering kunnen er zaken misgaan als u niets regelt. 
                Denk aan: verkeerde begunstigden, ontbrekende verzekeringen, of een hypotheek 
                die niet meer past.
              </p>
              <p className="text-lg font-medium mb-6">
                Een check-up voorkomt problemen later. Wij lopen alles met u door 
                en zorgen dat het klopt.
              </p>
              <Link href="/contact">
                <Button className="group" data-testid="button-cta-checkup">
                  Plan een check-up
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src={coupleImg} 
                alt="Stel bespreekt toekomstplannen" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wat controleren we */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={advisorMeetingImg} 
                alt="Adviesgesprek" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Wat controleren we bij een wijziging?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Bij elke verandering lopen we een complete checklist door 
                om te zorgen dat alles geregeld is.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Hypotheek: past deze nog bij uw situatie?",
                  "Verzekeringen: zijn alle risico's gedekt?",
                  "Pensioen: klopt de opbouw en begunstiging?",
                  "Testament: zijn uw wensen vastgelegd?",
                  "Sparen: sluit dit aan bij uw doelen?"
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

      {/* Onze aanpak */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Zo Pakken We Het Aan</h2>
            <p className="text-lg text-muted-foreground">Een gestructureerde aanpak voor elke verandering</p>
          </div>
          
          <div className="grid gap-4">
            {[
              { step: 1, icon: Calculator, title: "Inventarisatie", desc: "Wat is er veranderd en wat zijn de gevolgen?", color: "bg-blue-500" },
              { step: 2, icon: RefreshCw, title: "Analyse", desc: "We checken hypotheek, verzekeringen, pensioen en meer", color: "bg-indigo-500" },
              { step: 3, icon: AlertCircle, title: "Aandachtspunten", desc: "Wat moet er aangepast of geregeld worden?", color: "bg-purple-500" },
              { step: 4, icon: CheckCircle, title: "Actieplan", desc: "Concrete stappen om alles te regelen", color: "bg-green-500" },
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

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Veelgestelde Vragen</h2>
            <p className="text-muted-foreground">Antwoorden op veelgestelde vragen</p>
          </div>
          
          <div className="space-y-3">
            {[
              {
                q: "Wanneer moet ik mijn hypotheek laten checken?",
                a: "Bij elke grote verandering: trouwen, kinderen, scheiding, nieuw werk, of als uw inkomen sterk wijzigt. Maar ook bij renteverlengingen is het verstandig."
              },
              {
                q: "Wat gebeurt er met mijn pensioen bij een nieuwe baan?",
                a: "U bouwt bij uw nieuwe werkgever nieuw pensioen op. Uw oude pensioen blijft staan of kan soms worden overgedragen. Wij helpen u de opties te bekijken."
              },
              {
                q: "Moet ik mijn verzekeringen aanpassen als ik ga samenwonen?",
                a: "Vaak wel. Twee huishoudverzekeringen worden één, en u wilt wellicht elkaars begunstigde worden. Wij checken of alles klopt."
              },
              {
                q: "Kost zo'n check-up veel tijd?",
                a: "Meestal niet. In één gesprek inventariseren we uw situatie. Daarna maken wij een overzicht met eventuele actiepunten."
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
            Verandert er iets in uw leven?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Laat ons checken of uw financiën nog kloppen. 
            Een vrijblijvend gesprek geeft direct duidelijkheid.
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
