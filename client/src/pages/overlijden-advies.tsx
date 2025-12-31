import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown, Heart, Shield, FileText, Users, CheckCircle, AlertCircle, Clock, Phone, ArrowRight, Home, Calculator } from "lucide-react";
import { useState } from "react";
import supportImg from "@assets/stock_images/family_mourning_supp_b750648e.jpg";
import advisorMeetingImg from "@assets/stock_images/couple_reviewing_doc_7929205a.jpg";
import familyImg from "@assets/stock_images/family_moving_into_n_cf7fd414.jpg";

export default function OverlijdenAdviesPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <title>Advies bij Overlijden | Financieel Advies</title>
      <meta name="description" content="Bij het verlies van een dierbare komt er veel op u af. Wij helpen u met de financiële zaken: hypotheek, verzekeringen, erfenis en meer." />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 to-slate-700/80 z-10" />
        <img 
          src={supportImg} 
          alt="Steun in moeilijke tijden" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Financieel Advies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-page-h1">
              Bij het Verlies van een Dierbare<br />
              Wij helpen u met de financiële zaken.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              In een moeilijke tijd komen er veel praktische zaken op u af. 
              Wij nemen u graag werk uit handen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg" data-testid="button-cta-hero">
                  <Phone className="w-5 h-5 mr-2" />
                  Neem Contact Op
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20" 
                onClick={() => document.getElementById('hulp')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-scroll-hulp"
              >
                Hoe kunnen wij helpen?
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
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-sm">Met begrip en zorg</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">Op uw tempo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro sectie */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Wij begrijpen dat dit een moeilijke tijd is
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Het verlies van uw partner of een naaste brengt niet alleen verdriet, 
            maar ook veel praktische zaken met zich mee. Hypotheek, verzekeringen, 
            erfenis - er moet van alles geregeld worden. Wij helpen u daar stap voor stap doorheen, 
            op uw eigen tempo.
          </p>
        </div>
      </section>

      {/* Waar kunnen we mee helpen */}
      <section id="hulp" className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Waar Kunnen Wij Mee Helpen?</h2>
            <p className="text-lg text-muted-foreground">Financiële zaken die geregeld moeten worden</p>
          </div>
          
          <div className="grid gap-4">
            {[
              { step: 1, icon: Home, title: "Hypotheek", desc: "Wat gebeurt er met de hypotheek? Kunt u in de woning blijven?", color: "bg-blue-500" },
              { step: 2, icon: Shield, title: "Verzekeringen", desc: "Overlijdensrisicoverzekering, uitvaartkosten, wijzigingen in polissen", color: "bg-indigo-500" },
              { step: 3, icon: FileText, title: "Erfenis en nalatenschap", desc: "Afwikkeling van de erfenis, aangifte erfbelasting", color: "bg-purple-500" },
              { step: 4, icon: Calculator, title: "Inkomen en pensioen", desc: "Nabestaandenpensioen, ANW-uitkering, financiële planning", color: "bg-pink-500" },
              { step: 5, icon: Users, title: "Praktische zaken", desc: "Rekeningen, abonnementen, lopende zaken afhandelen", color: "bg-green-500" },
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

      {/* Hypotheek bij overlijden */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Home className="w-4 h-4" />
                Hypotheek
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Wat gebeurt er met de hypotheek?
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Bij het overlijden van uw partner moet de hypotheek vaak aangepast worden. 
                Soms is er een overlijdensrisicoverzekering die (een deel van) de hypotheek aflost.
              </p>
              <p className="text-lg font-medium mb-6">
                Wij brengen in kaart wat uw opties zijn en of u in de woning kunt blijven wonen.
              </p>
              <Link href="/contact">
                <Button className="group" data-testid="button-cta-hypotheek">
                  Bespreek uw situatie
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src={familyImg} 
                alt="Thuis blijven wonen" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Onze aanpak */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={advisorMeetingImg} 
                alt="Persoonlijk gesprek" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Onze Aanpak
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Wij werken op uw tempo en met begrip voor uw situatie. 
                Geen druk, geen haast - wel duidelijkheid en concrete hulp.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Persoonlijk gesprek op locatie naar keuze",
                  "Complete inventarisatie van wat er geregeld moet worden",
                  "Uitleg van alle opties in begrijpelijke taal",
                  "Hulp bij het afhandelen van de administratie",
                  "Begeleiding zo lang als nodig"
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

      {/* Checklist */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Wat Moet Er Geregeld Worden?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600" />
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-blue-500" />
                  Eerste weken
                </h3>
                <ul className="space-y-3">
                  {[
                    "Bank en verzekeraars informeren",
                    "Overlijdensakte aanvragen",
                    "Uitvaartverzekering claimen",
                    "Werkgever informeren"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600" />
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-purple-500" />
                  Eerste maanden
                </h3>
                <ul className="space-y-3">
                  {[
                    "Erfenis regelen bij notaris",
                    "Hypotheek beoordelen",
                    "Verzekeringen aanpassen",
                    "Aangifte erfbelasting"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Veelgestelde Vragen</h2>
            <p className="text-muted-foreground">Antwoorden op veelgestelde vragen</p>
          </div>
          
          <div className="space-y-3">
            {[
              {
                q: "Kan ik in mijn huis blijven wonen?",
                a: "Dat hangt af van de hypotheek, eventuele overlijdensrisicoverzekering en uw inkomen. Wij brengen in kaart wat de mogelijkheden zijn."
              },
              {
                q: "Heb ik recht op nabestaandenpensioen?",
                a: "In veel gevallen wel, als uw partner pensioen opbouwde. Wij helpen u uitzoeken waar u recht op heeft en hoe u dit aanvraagt."
              },
              {
                q: "Moet ik erfbelasting betalen?",
                a: "Dat hangt af van de waarde van de nalatenschap en uw relatie tot de overledene. Partners hebben een hoge vrijstelling."
              },
              {
                q: "Wanneer moet ik dit allemaal geregeld hebben?",
                a: "Er zijn geen strikte deadlines, behalve voor de aangifte erfbelasting (8 maanden). Neem de tijd die u nodig heeft."
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wij staan voor u klaar
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Neem gerust contact op voor een vrijblijvend gesprek. 
            Wij helpen u graag door deze moeilijke tijd.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-cta-bottom">
              <Phone className="w-5 h-5 mr-2" />
              Neem Contact Op
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
