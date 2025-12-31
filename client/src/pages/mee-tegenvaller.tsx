import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown, TrendingUp, TrendingDown, Gift, AlertTriangle, CheckCircle, AlertCircle, Shield, Clock, Phone, ArrowRight, Sparkles, Calculator } from "lucide-react";
import { useState } from "react";
import celebratingImg from "@assets/stock_images/couple_celebrating_g_6839760e.jpg";
import advisorMeetingImg from "@assets/stock_images/couple_reviewing_doc_7929205a.jpg";
import familyImg from "@assets/stock_images/family_life_changes__92a1c731.jpg";

export default function MeeTegenvaller() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <title>Mee- of Tegenvaller | Financieel Advies</title>
      <meta name="description" content="Een erfenis, bonus of juist een financiële tegenvaller? Wij helpen u de juiste keuzes maken bij plotselinge financiële veranderingen." />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img 
          src={celebratingImg} 
          alt="Stel viert goed nieuws" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Financieel Advies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-page-h1">
              Mee- of Tegenvaller?<br />
              Wij helpen u de juiste keuzes maken.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              Een erfenis, bonus, of juist een financiële tegenslag. 
              Grote veranderingen vragen om weloverwogen beslissingen.
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
              <span className="text-sm">Onafhankelijk advies</span>
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
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Welke Situatie Herkent U?</h2>
            <p className="text-lg text-muted-foreground">Zowel meevallers als tegenvallers vragen om goede keuzes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Meevallers */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-green-400 to-green-600" />
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Meevallers</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: Gift, text: "Erfenis ontvangen" },
                    { icon: Sparkles, text: "Bonus of winstuitkering" },
                    { icon: TrendingUp, text: "Loterij of onverwacht geld" },
                    { icon: Calculator, text: "Verkoop van bezittingen" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-green-500" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Tegenvallers */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600" />
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Tegenvallers</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: AlertTriangle, text: "Ontslag of inkomensverlies" },
                    { icon: TrendingDown, text: "Onverwachte schulden" },
                    { icon: Calculator, text: "Grote onvoorziene uitgaven" },
                    { icon: AlertCircle, text: "Arbeidsongeschiktheid" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-amber-500" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bij een meevaller */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Gift className="w-4 h-4" />
                Bij een meevaller
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Wat doet u met dat extra geld?
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Een erfenis of bonus is mooi, maar vraagt om slimme keuzes. 
                Hypotheek aflossen? Beleggen? Sparen? Of een combinatie?
              </p>
              <p className="text-lg font-medium mb-6">
                Wij helpen u de opties afwegen en de beste keuze maken 
                voor uw persoonlijke situatie.
              </p>
              <Link href="/contact">
                <Button className="group" data-testid="button-cta-meevaller">
                  Bespreek uw opties
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src={familyImg} 
                alt="Gezin met toekomstplannen" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bij een tegenvaller */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={advisorMeetingImg} 
                alt="Adviesgesprek bij financiële problemen" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <AlertTriangle className="w-4 h-4" />
                Bij een tegenvaller
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Samen zoeken we naar oplossingen
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Een financiële tegenslag kan overweldigend voelen. 
                Maar er zijn vaak meer mogelijkheden dan u denkt.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Inventarisatie van uw situatie",
                  "Betalingsregelingen bespreken",
                  "Contact met hypotheekverstrekker",
                  "Concreet plan om weer grip te krijgen"
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
                  Neem Contact Op
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hoe Wij U Helpen</h2>
            <p className="text-lg text-muted-foreground">Een gestructureerde aanpak voor elke situatie</p>
          </div>
          
          <div className="grid gap-4">
            {[
              { step: 1, icon: Calculator, title: "Inventarisatie", desc: "We brengen uw complete financiële situatie in kaart", color: "bg-blue-500" },
              { step: 2, icon: TrendingUp, title: "Opties verkennen", desc: "Welke mogelijkheden zijn er? Wat zijn de voor- en nadelen?", color: "bg-indigo-500" },
              { step: 3, icon: Shield, title: "Advies op maat", desc: "Wij adviseren wat het beste past bij uw situatie", color: "bg-purple-500" },
              { step: 4, icon: CheckCircle, title: "Uitvoering begeleiden", desc: "Wij helpen u bij de uitvoering van het plan", color: "bg-green-500" },
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
                q: "Moet ik met een erfenis mijn hypotheek aflossen?",
                a: "Dat hangt af van uw rente, resterende looptijd en andere financiële doelen. Wij rekenen uit wat in uw situatie het slimste is."
              },
              {
                q: "Wat moet ik doen als ik mijn hypotheek niet meer kan betalen?",
                a: "Neem zo snel mogelijk contact op. Er zijn vaak meer opties dan u denkt: betalingspauze, renteherziening, of andere regelingen."
              },
              {
                q: "Hoe voorkom ik dat ik verkeerde keuzes maak met een grote som geld?",
                a: "Neem de tijd. Parkeer het geld even op een spaarrekening en maak pas beslissingen na goed advies."
              },
              {
                q: "Kan ik hulp krijgen bij schulden?",
                a: "Ja, wij kunnen helpen met het in kaart brengen van uw situatie en doorverwijzen naar de juiste instanties indien nodig."
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
            Heeft u advies nodig bij een grote verandering?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Of het nu gaat om een meevaller of tegenvaller - 
            wij denken graag met u mee.
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
