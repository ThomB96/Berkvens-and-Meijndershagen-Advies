import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Home, TrendingUp, Shield, Users, Clock, Phone, ArrowRight, CheckCircle, Landmark, Building, Heart, RefreshCw, Wrench, Briefcase, PiggyBank, CalendarClock, Wallet, Gift } from "lucide-react";
import familyMovingImg from "@assets/stock_images/family_moving_into_n_cf7fd414.jpg";
import youngCoupleImg from "@assets/stock_images/young_couple_looking_2c8128d6.jpg";
import seniorCoupleImg from "@assets/stock_images/senior_couple_retire_b6cb22d2.jpg";
import seniorCoupleImg2 from "@assets/stock_images/senior_couple_retire_cfa79c85.jpg";
import dutchHouseImg from "@assets/stock_images/beautiful_dutch_hous_6403bfd0.jpg";
import renovationImg from "@assets/stock_images/home_renovation_kitc_a935dc27.jpg";
import coupleDocsImg from "@assets/stock_images/couple_reviewing_doc_48aad1b1.jpg";
import entrepreneurImg from "@assets/stock_images/entrepreneur_busines_2b5164aa.jpg";
import piggyBankImg from "@assets/stock_images/piggy_bank_savings_f_4aac8c3d.jpg";
import familyChangesImg from "@assets/stock_images/family_life_changes__92a1c731.jpg";
import familyMourningImg from "@assets/stock_images/family_mourning_supp_b750648e.jpg";
import ctaBackground from "@assets/stock_images/couple_celebrating_g_8d0ce3cd.jpg";

export default function HomePage() {
  const hypotheekDiensten = [
    { icon: Home, title: "Eerste huis kopen", href: "/hypotheekadvies/eerste-huis-kopen", description: "Start uw woondroom", image: youngCoupleImg },
    { icon: Building, title: "Volgend huis kopen", href: "/hypotheekadvies/volgend-huis-kopen", description: "Doorstromen naar een grotere woning", image: familyMovingImg },
    { icon: RefreshCw, title: "Hypotheek oversluiten", href: "/hypotheekadvies/hypotheek-oversluiten", description: "Bespaar op uw hypotheek", image: dutchHouseImg },
    { icon: Wrench, title: "Verbouwen", href: "/hypotheekadvies/verbouwen", description: "Financier uw verbouwplannen", image: renovationImg },
    { icon: Users, title: "Scheiden", href: "/hypotheekadvies/scheiden", description: "Begeleiding bij scheiding", image: coupleDocsImg },
    { icon: Briefcase, title: "Ondernemers", href: "/hypotheekadvies/ondernemers", description: "Hypotheek voor zzp'ers", image: entrepreneurImg },
  ];

  const financieelDiensten = [
    { icon: PiggyBank, title: "Aanvullend pensioen", href: "/financieel-advies/aanvullend-pensioen", description: "Bouw extra pensioen op", image: seniorCoupleImg2 },
    { icon: CalendarClock, title: "Eerder stoppen", href: "/financieel-advies/eerder-stoppen", description: "Plan uw vroegpensioen", image: seniorCoupleImg },
    { icon: Wallet, title: "Sparen voor later", href: "/financieel-advies/sparen-voor-later", description: "Vermogensopbouw op maat", image: piggyBankImg },
    { icon: Gift, title: "Mee- of tegenvaller", href: "/financieel-advies/mee-tegenvaller", description: "Advies bij veranderingen", image: coupleDocsImg },
    { icon: RefreshCw, title: "Wijzigingen situatie", href: "/financieel-advies/wijzigingen-situatie", description: "Bij levensgebeurtenissen", image: familyChangesImg },
    { icon: Heart, title: "Overlijden", href: "/financieel-advies/overlijden", description: "Ondersteuning bij verlies", image: familyMourningImg },
  ];

  return (
    <div className="min-h-screen">
      <title>Berkvens & Meijndershagen Advies | Hypotheek & Financieel Advies</title>
      <meta name="description" content="Wij maken van cijfers kansen. Professioneel hypotheek- en financieel advies in Nederland. Gratis hypotheekadvies, pensioenplanning en meer." />
      
      <HeroSection />

      {/* Trust Bar */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-card border-b">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">AFM Gecertificeerd</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Reactie binnen 24 uur</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Persoonlijk advies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hypotheekadvies Section */}
      <section id="diensten" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Home className="w-4 h-4" />
                Gratis Hypotheekadvies
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2" data-testid="text-hypotheek-title">
                Hypotheekadvies
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Gratis en vrijblijvend advies voor elke woonsituatie
              </p>
            </div>
            <Link href="/hypotheekadvies">
              <Button variant="outline" className="group" data-testid="button-alle-hypotheek">
                Alle hypotheekdiensten
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hypotheekDiensten.map((dienst, idx) => (
              <Link key={idx} href={dienst.href}>
                <Card className="group h-full overflow-hidden hover-elevate active-elevate-2 cursor-pointer border-0 shadow-lg" data-testid={`card-hypotheek-${idx}`}>
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={dienst.image} 
                      alt={dienst.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm text-white">
                        <dienst.icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {dienst.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {dienst.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      Meer informatie
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Financieel Advies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4" />
                Financieel Advies
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2" data-testid="text-financieel-title">
                Financieel Advies
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Plan uw financiële toekomst met deskundig advies
              </p>
            </div>
            <Link href="/financieel-advies">
              <Button variant="outline" className="group" data-testid="button-alle-financieel">
                Alle financiële diensten
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {financieelDiensten.map((dienst, idx) => (
              <Link key={idx} href={dienst.href}>
                <Card className="group h-full overflow-hidden hover-elevate active-elevate-2 cursor-pointer border-0 shadow-lg" data-testid={`card-financieel-${idx}`}>
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={dienst.image} 
                      alt={dienst.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm text-accent-foreground">
                        <dienst.icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-accent transition-colors">
                      {dienst.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {dienst.description}
                    </p>
                    <div className="flex items-center text-accent-foreground text-sm font-medium">
                      Meer informatie
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Verzekeringsadvies Link Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-700 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Verzekeringsadvies
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Optimale bescherming voor u en uw gezin
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Van overlijdensrisicoverzekering tot arbeidsongeschiktheid - 
            wij zorgen dat u goed verzekerd bent.
          </p>
          <Link href="/verzekeringsadvies">
            <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-cta-verzekeringen">
              Bekijk verzekeringsdiensten
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us - Numbered Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Landmark className="w-4 h-4" />
              Onze Aanpak
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Waarom klanten voor ons kiezen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Persoonlijk advies, heldere communicatie en jarenlange ervaring maken het verschil.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "Gratis Kennismaking",
                description: "Start met een vrijblijvend gesprek om uw situatie te bespreken",
                color: "bg-primary"
              },
              {
                num: "02",
                title: "Persoonlijk Advies",
                description: "Maatwerk oplossingen afgestemd op uw unieke situatie",
                color: "bg-accent"
              },
              {
                num: "03",
                title: "Helder en Transparant",
                description: "Duidelijke uitleg zonder ingewikkeld jargon",
                color: "bg-primary"
              },
              {
                num: "04",
                title: "Volledige Begeleiding",
                description: "Van eerste gesprek tot afronding aan uw zijde",
                color: "bg-accent"
              }
            ].map((item, idx) => (
              <Card key={idx} className="relative overflow-hidden border-0 shadow-lg">
                <div className={`absolute top-0 left-0 w-2 h-full ${item.color}`} />
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${item.color} text-white font-bold text-lg mb-4`}>
                    {item.num}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ctaBackground}
            alt="Gelukkig stel met sleutels"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Klaar om te starten?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Maak een afspraak voor een gratis kennismakingsgesprek. 
            Wij bespreken uw situatie en laten zien wat de mogelijkheden zijn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" data-testid="link-cta-contact-bottom">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Neem Contact Op
              </Button>
            </Link>
            <a href="tel:+31123456789" data-testid="link-phone">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Bel Direct
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function FaqSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Zijn jullie onafhankelijk?",
      a: "Ja, wij zijn volledig onafhankelijk en werken met alle grote hypotheekverstrekkers en financiële instellingen. Zo krijgt u altijd de beste voorwaarden."
    },
    {
      q: "Is het eerste gesprek gratis?",
      a: "Voor hypotheekadvies is het eerste gesprek volledig gratis en vrijblijvend. Voor financieel advies bespreken we vooraf de kosten."
    },
    {
      q: "Hoe lang duurt een adviestraject?",
      a: "Een hypotheektraject duurt gemiddeld 4-8 weken. Financieel advies kan variëren van een eenmalig gesprek tot doorlopende begeleiding."
    },
    {
      q: "Werken jullie ook 's avonds en in het weekend?",
      a: "Ja, wij zijn flexibel en passen ons aan uw agenda aan. Afspraken zijn ook mogelijk in de avonduren en op zaterdag."
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Veelgestelde vragen
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="border rounded-lg overflow-hidden bg-card"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover-elevate"
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                data-testid={`button-faq-${idx}`}
              >
                <span className="font-semibold">{faq.q}</span>
                <ArrowRight className={`w-5 h-5 text-primary transition-transform ${expandedFaq === idx ? 'rotate-90' : ''}`} />
              </button>
              {expandedFaq === idx && (
                <div className="px-6 pb-6 text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
