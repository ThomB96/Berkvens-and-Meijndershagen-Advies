import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { TrendingUp, Shield, Clock, Phone, ArrowRight, PiggyBank, CalendarClock, Wallet, Gift, RefreshCw, Heart, Landmark } from "lucide-react";
import { useState } from "react";
import seniorCoupleImg from "@assets/stock_images/senior_couple_retire_cfa79c85.jpg";
import seniorCoupleImg2 from "@assets/stock_images/senior_couple_retire_b6cb22d2.jpg";
import piggyBankImg from "@assets/stock_images/piggy_bank_savings_f_4aac8c3d.jpg";
import coupleDocsImg from "@assets/stock_images/couple_reviewing_doc_7929205a.jpg";
import familyChangesImg from "@assets/stock_images/family_life_changes__92a1c731.jpg";
import familyMourningImg from "@assets/stock_images/family_mourning_supp_b750648e.jpg";

export default function FinancieelAdviesPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const diensten = [
    {
      icon: PiggyBank,
      title: "Aanvullend pensioen",
      description: "Bouw extra pensioen op voor een zorgeloze oude dag via lijfrente of beleggen.",
      href: "/financieel-advies/aanvullend-pensioen",
      image: seniorCoupleImg,
    },
    {
      icon: CalendarClock,
      title: "Eerder stoppen met werken",
      description: "Bereken wat nodig is om eerder met pensioen te gaan.",
      href: "/financieel-advies/eerder-stoppen",
      image: seniorCoupleImg2,
    },
    {
      icon: Wallet,
      title: "Sparen voor later",
      description: "Vermogensopbouw op maat voor uw toekomstige doelen.",
      href: "/financieel-advies/sparen-voor-later",
      image: piggyBankImg,
    },
    {
      icon: Gift,
      title: "Mee- of tegenvaller",
      description: "Advies bij een erfenis, bonus of onverwachte tegenslag.",
      href: "/financieel-advies/mee-tegenvaller",
      image: coupleDocsImg,
    },
    {
      icon: RefreshCw,
      title: "Wijzigingen in situatie",
      description: "Pas uw financiële planning aan bij grote levensveranderingen.",
      href: "/financieel-advies/wijzigingen-situatie",
      image: familyChangesImg,
    },
    {
      icon: Heart,
      title: "Overlijden",
      description: "Financiële ondersteuning en advies bij het verlies van een dierbare.",
      href: "/financieel-advies/overlijden",
      image: familyMourningImg,
    },
  ];

  const faqs = [
    {
      q: "Wat kost financieel advies?",
      a: "De kosten zijn afhankelijk van de complexiteit van uw vraag. Na een eerste kennismaking geven wij een duidelijke offerte met vaste prijs."
    },
    {
      q: "Hoe weet ik of ik genoeg pensioen opbouw?",
      a: "Wij maken een persoonlijke pensioenscan waarbij we uw AOW, werkgeverspensioen en eigen vermogen in kaart brengen. Zo ziet u precies waar u staat."
    },
    {
      q: "Kan ik eerder met pensioen dan 67 jaar?",
      a: "Dat hangt af van uw vermogen en gewenste levensstijl. Wij berekenen wat u nodig heeft en hoe u dit kunt bereiken."
    },
    {
      q: "Wat gebeurt er bij een verandering in mijn leven?",
      a: "Bij trouwen, scheiden, kinderen of baanwisseling bekijken we samen uw financiële situatie opnieuw en passen we uw plan aan."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <title>Financieel Advies | Plan Uw Financiële Toekomst</title>
      <meta name="description" content="Deskundig financieel advies voor pensioen, vermogensopbouw en levensgebeurtenissen. Persoonlijk advies afgestemd op uw situatie. Plan een kennismaking." />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent/70 z-10" />
        <img 
          src={seniorCoupleImg} 
          alt="Senioren genieten van pensioen" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-accent-foreground">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Landmark className="w-4 h-4" />
              Financieel Advies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-page-h1">
              Plan Uw Financiële<br />
              Toekomst met Zekerheid
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-8">
              Van pensioenplanning tot vermogensopbouw - wij helpen u 
              slimme financiële keuzes te maken voor een zorgeloze toekomst.
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
                className="text-lg px-8 bg-white/10 border-current/30 hover:bg-white/20" 
                onClick={() => document.getElementById('diensten')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-scroll-diensten"
              >
                Bekijk diensten
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-card border-b">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">AFM Gecertificeerd</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Reactie binnen 24 uur</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="diensten" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Onze Diensten
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Uw financiële doelen binnen bereik
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kies de dienst die bij uw situatie past. Wij maken een persoonlijk plan op maat.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {diensten.map((dienst, idx) => (
              <Link key={idx} href={dienst.href}>
                <Card className="group h-full overflow-hidden hover-elevate active-elevate-2 cursor-pointer border-0 shadow-lg" data-testid={`card-dienst-${idx}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={dienst.image} 
                      alt={dienst.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm text-white">
                        <dienst.icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                      {dienst.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
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

      {/* Benefits - Numbered Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Waarom financieel advies?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Inzicht in uw financiële situatie geeft rust en helpt u de juiste keuzes te maken.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { num: "01", title: "Compleet Overzicht", description: "Wij brengen uw complete financiële situatie in kaart voor betere beslissingen", color: "bg-accent" },
              { num: "02", title: "Optimale Planning", description: "Plan uw pensioen en vermogen zo dat u later zonder zorgen kunt genieten", color: "bg-primary" },
              { num: "03", title: "Gezinsbescherming", description: "Zorg ervoor dat uw naasten financieel verzorgd zijn in alle omstandigheden", color: "bg-accent" },
              { num: "04", title: "Flexibel Aanpassen", description: "Uw financiële plan past zich aan bij grote levensveranderingen", color: "bg-primary" },
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
                  <ArrowRight className={`w-5 h-5 text-accent transition-transform ${expandedFaq === idx ? 'rotate-90' : ''}`} />
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

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={piggyBankImg}
            alt="Sparen voor de toekomst"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/85 to-accent/75" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center text-accent-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start met uw financiële planning
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Neem contact met ons op voor het doornemen van uw situatie 
            en de mogelijkheden. Wij maken graag een afspraak.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-cta-bottom">
              <Phone className="w-5 h-5 mr-2" />
              Maak een Afspraak
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
