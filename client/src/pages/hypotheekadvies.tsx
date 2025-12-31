import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Home, Shield, Clock, Phone, ArrowRight, CheckCircle, Building, RefreshCw, Wrench, Users, Briefcase } from "lucide-react";
import { useState } from "react";
import familyMovingImg from "@assets/stock_images/family_moving_into_n_641922e7.jpg";
import youngCoupleImg from "@assets/stock_images/young_couple_looking_2c8128d6.jpg";
import dutchHouseImg from "@assets/stock_images/beautiful_dutch_hous_6403bfd0.jpg";
import renovationImg from "@assets/stock_images/home_renovation_kitc_a935dc27.jpg";
import coupleDocsImg from "@assets/stock_images/couple_reviewing_doc_48aad1b1.jpg";
import entrepreneurImg from "@assets/stock_images/entrepreneur_busines_2b5164aa.jpg";

export default function HypotheekadviesPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const diensten = [
    {
      icon: Home,
      title: "Eerste huis kopen",
      description: "Start uw woondroom met deskundig advies voor starters op de woningmarkt.",
      href: "/hypotheekadvies/eerste-huis-kopen",
      image: youngCoupleImg,
    },
    {
      icon: Building,
      title: "Volgend huis kopen",
      description: "Doorstromen naar uw volgende woning? Wij berekenen uw mogelijkheden.",
      href: "/hypotheekadvies/volgend-huis-kopen",
      image: familyMovingImg,
    },
    {
      icon: RefreshCw,
      title: "Hypotheek oversluiten",
      description: "Bespaar op uw hypotheek door over te sluiten naar een lagere rente.",
      href: "/hypotheekadvies/hypotheek-oversluiten",
      image: dutchHouseImg,
    },
    {
      icon: Wrench,
      title: "Verbouwen",
      description: "Financier uw verbouwplannen slim met extra hypotheek of overwaarde.",
      href: "/hypotheekadvies/verbouwen",
      image: renovationImg,
    },
    {
      icon: Users,
      title: "Scheiden",
      description: "Begeleiding bij de financiële afwikkeling van uw woning bij scheiding.",
      href: "/hypotheekadvies/scheiden",
      image: coupleDocsImg,
    },
    {
      icon: Briefcase,
      title: "Ondernemers",
      description: "Hypotheekadvies speciaal voor zzp'ers, freelancers en ondernemers.",
      href: "/hypotheekadvies/ondernemers",
      image: entrepreneurImg,
    },
  ];

  const faqs = [
    {
      q: "Hoeveel hypotheek kan ik krijgen?",
      a: "Dit hangt af van uw inkomen, schulden en de waarde van de woning. In een gratis gesprek berekenen we exact wat voor u mogelijk is."
    },
    {
      q: "Is het eerste gesprek echt gratis?",
      a: "Ja, het kennismakingsgesprek is volledig gratis en vrijblijvend. We bespreken uw situatie en mogelijkheden zonder enige verplichting."
    },
    {
      q: "Met welke geldverstrekkers werken jullie?",
      a: "Wij zijn onafhankelijk en werken samen met alle grote hypotheekverstrekkers. Zo krijgt u altijd de beste voorwaarden."
    },
    {
      q: "Hoe lang duurt het hypotheektraject?",
      a: "Gemiddeld 4-8 weken, afhankelijk van uw situatie en de geldverstrekker. Wij zorgen dat alles zo snel mogelijk verloopt."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <title>Hypotheekadvies | Gratis Advies voor Uw Woonsituatie</title>
      <meta name="description" content="Gratis hypotheekadvies voor eerste huis, doorstromen, oversluiten en meer. Onafhankelijk advies met volledige begeleiding. Plan nu een gratis gesprek!" />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img 
          src={youngCoupleImg} 
          alt="Jong stel bekijkt hun nieuwe huis" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Home className="w-4 h-4" />
              Gratis Hypotheekadvies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-page-h1">
              Hypotheekadvies<br />
              Voor Elke Situatie
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              Van uw eerste huis tot oversluiten - wij begeleiden u 
              bij elke stap van uw hypotheektraject. Gratis en vrijblijvend.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg" data-testid="button-cta-hero">
                  <Phone className="w-5 h-5 mr-2" />
                  Gratis Kennismaken
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20" 
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
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">AFM Gecertificeerd</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Reactie binnen 24 uur</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="diensten" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Home className="w-4 h-4" />
              Onze Diensten
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hoe kunnen wij u helpen?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kies de dienst die bij uw situatie past. Alle hypotheekadvies is gratis en vrijblijvend.
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
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {dienst.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
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

      {/* Benefits - Numbered Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Voordelen van ons hypotheekadvies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wij maken het verschil met persoonlijke aandacht en deskundige begeleiding.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { num: "01", title: "Onafhankelijk Advies", description: "Wij vergelijken alle aanbieders en kiezen de beste optie voor uw situatie", color: "bg-primary" },
              { num: "02", title: "Volledige Begeleiding", description: "Van oriëntatie tot offerte en ondertekening - wij regelen alles", color: "bg-accent" },
              { num: "03", title: "Scherpe Voorwaarden", description: "Door onze ervaring onderhandelen wij de beste condities voor u", color: "bg-primary" },
              { num: "04", title: "Nazorg Gegarandeerd", description: "Ook na het afsluiten blijven wij uw aanspreekpunt voor vragen", color: "bg-accent" },
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

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={dutchHouseImg}
            alt="Mooi Nederlands huis"
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
            Wij berekenen uw mogelijkheden en begeleiden u van A tot Z.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-cta-bottom">
              <Phone className="w-5 h-5 mr-2" />
              Plan een Gratis Gesprek
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
