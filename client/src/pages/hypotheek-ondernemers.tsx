import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown, Briefcase, FileText, CheckCircle, AlertCircle, Lightbulb, Phone, TrendingUp, Users, Target, Star, Shield, ArrowRight, Clock } from "lucide-react";
import { useState } from "react";
import entrepreneurImg from "@assets/stock_images/entrepreneur_busines_2b5164aa.jpg";
import advisorMeetingImg from "@assets/stock_images/couple_reviewing_doc_7929205a.jpg";

export default function HypotheekOndernemersPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <title>Hypotheek Voor Ondernemers & ZZP | Advies Zelfstandigen</title>
      <meta name="description" content="Als ZZP'er of ondernemer een hypotheek krijgen? Wij kennen de eisen van banken. Maatwerkadvies voor ondernemers. Vraag advies aan!" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img 
          src={entrepreneurImg} 
          alt="Ondernemer aan het werk" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              Specialist in ondernemershypotheken
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ondernemer en Een Huis Kopen?<br />
              Wij kennen de weg.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              Als ZZP'er of ondernemer sta je er financieel vaak goed voor. 
              Maar banken kijken anders naar je. Wij weten precies wat nodig is.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg" data-testid="button-cta-hero">
                  <Phone className="w-5 h-5 mr-2" />
                  Ondernemersadvies Aanvragen
                </Button>
              </Link>
            </div>
            <p className="text-sm text-white/70 mt-6">
              Gratis oriëntatiegesprek. Wij denken met u mee.
            </p>
          </div>
        </div>
      </section>

      {/* Vertrouwensindicatoren */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-card border-b">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Briefcase className="w-5 h-5 text-primary" />
              <span className="text-sm">Specialist in ondernemers</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">Ervaren met ZZP & BV</span>
            </div>
          </div>
        </div>
      </section>

      {/* Herkenbare situatie */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Lightbulb className="w-4 h-4" />
                Herkenbaar?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                "Mijn bedrijf loopt prima, maar de bank wil zoveel papieren..."
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                "...en mijn accountant heeft het druk."
              </p>
              <p className="text-lg font-medium mb-6">
                Dit horen we vaak. Wij helpen u door het papierwerk en zorgen voor een sterke aanvraag.
              </p>
              <Link href="/contact">
                <Button className="group" data-testid="button-cta-helpen">
                  Laat ons helpen
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src={advisorMeetingImg} 
                  alt="Adviesgesprek met ondernemer" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                  <p className="text-sm font-medium">Gem. doorlooptijd</p>
                  <p className="text-2xl font-bold">6-8 weken</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kan het? */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kun Je Als Ondernemer Een Hypotheek Krijgen?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Absoluut. Duizenden ondernemers kopen elk jaar een huis. 
              Het vraagt alleen wat meer voorbereiding.
            </p>
          </div>

          <Card className="border-0 shadow-xl overflow-hidden mb-8">
            <div className="h-2 bg-gradient-to-r from-primary to-primary/70" />
            <CardContent className="pt-8">
              <p className="text-lg text-muted-foreground mb-6">
                Banken willen zekerheid. Zonder vast salaris kijken ze naar uw bedrijfsresultaten over meerdere jaren. 
                Met de juiste documentatie en een goed verhaal staat u sterker dan u denkt.
              </p>
              <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                <p className="font-medium">Met de juiste begeleiding krijgt 85% van de ondernemers een hypotheek</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Wat vragen banken */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wat Vragen Banken Van Ondernemers?</h2>
            <p className="text-muted-foreground">Verwacht meer papierwerk dan bij een werknemer</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: FileText, title: "Jaarrekeningen (3 jaar)", desc: "Officieel opgestelde cijfers van uw accountant", color: "text-blue-600 bg-blue-100 dark:bg-blue-900/30" },
              { icon: FileText, title: "Belastingaanslagen", desc: "De afgelopen 3 jaar, inclusief voorlopige aanslagen", color: "text-purple-600 bg-purple-100 dark:bg-purple-900/30" },
              { icon: Briefcase, title: "Uittreksel KvK", desc: "Recent bewijs dat uw bedrijf bestaat", color: "text-green-600 bg-green-100 dark:bg-green-900/30" },
              { icon: TrendingUp, title: "Prognose (soms)", desc: "Bij starters of groeiende bedrijven", color: "text-amber-600 bg-amber-100 dark:bg-amber-900/30" }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-md hover-elevate transition-all">
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 border-0 shadow-md bg-amber-50 dark:bg-amber-900/10">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-200 dark:bg-amber-800 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-amber-700 dark:text-amber-300" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Timing is belangrijk</h3>
                  <p className="text-sm text-muted-foreground">
                    Plan uw hypotheekaanvraag niet vlak voor het indienen van uw jaarrekening. 
                    De bank wil de meest recente cijfers zien. Wij helpen u met de timing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="mx-auto max-w-4xl text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Wilt u weten hoeveel u kunt lenen?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Wij maken een inschatting op basis van uw cijfers en geven u een realistisch beeld.
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg" data-testid="button-cta-middle">
              <Phone className="w-5 h-5 mr-2" />
              Vraag Oriëntatiegesprek
            </Button>
          </Link>
        </div>
      </section>

      {/* Onze aanpak */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Onze Aanpak Voor Ondernemers</h2>
            <p className="text-muted-foreground">Wij hebben veel ervaring met ZZP'ers, eenmanszaken en BV's</p>
          </div>

          <div className="space-y-4">
            {[
              { step: 1, title: "Intake en analyse", desc: "We bekijken uw cijfers en bespreken uw wensen. Wat is realistisch?", color: "bg-blue-500" },
              { step: 2, title: "Documenten verzamelen", desc: "Wij vertellen precies wat u nodig hebt en checken of alles compleet is.", color: "bg-indigo-500" },
              { step: 3, title: "De juiste bank kiezen", desc: "Niet elke bank is ondernemer-vriendelijk. Wij weten welke banken goed scoren.", color: "bg-purple-500" },
              { step: 4, title: "Sterke aanvraag opstellen", desc: "Wij presenteren uw situatie zo sterk mogelijk, met uitleg waar nodig.", color: "bg-pink-500" },
              { step: 5, title: "Begeleiding tot de sleutel", desc: "Van aanvraag tot notaris: wij blijven uw aanspreekpunt.", color: "bg-green-500" }
            ].map((item) => (
              <Card key={item.step} className="border-0 shadow-sm overflow-hidden hover-elevate transition-all">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4">
                    <div className={`${item.color} w-16 h-16 flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                      {item.step}
                    </div>
                    <div className="py-4 pr-4">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom ons */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Waarom Ondernemers Voor Ons Kiezen</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Users, title: "Ervaring met ondernemers", desc: "We spreken uw taal en begrijpen de uitdagingen van ondernemerschap." },
              { icon: Shield, title: "Netwerk bij banken", desc: "We weten welke acceptanten ondernemersvriendelijk zijn." },
              { icon: FileText, title: "Sterke dossieropbouw", desc: "Een goede presentatie maakt het verschil bij de beoordeling." },
              { icon: CheckCircle, title: "Eerlijk advies", desc: "We vertellen u direct of uw plan haalbaar is en wat de alternatieven zijn." }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-md hover-elevate transition-all">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
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
          </div>
          
          <div className="space-y-3">
            {[
              {
                q: "Hoeveel jaar moet mijn bedrijf bestaan?",
                a: "De meeste banken vragen 3 jaar. Sommige accepteren 2 jaar of zelfs 1 jaar met een goede prognose. Wij weten welke banken flexibeler zijn."
              },
              {
                q: "Telt mijn BV-winst of mijn salaris?",
                a: "Beide kunnen meetellen, afhankelijk van de bank. Sommige kijken naar uw DGA-salaris, andere naar de bedrijfswinst."
              },
              {
                q: "Wat als mijn omzet schommelt?",
                a: "Schommelende omzet is normaal voor ondernemers. Banken kijken naar het gemiddelde. Wel helpt het als de trend stijgend is."
              },
              {
                q: "Kan ik een hypotheek krijgen als starter ondernemer?",
                a: "Dat is lastiger, maar niet onmogelijk. Met een goede prognose en eventueel een mede-aanvrager zijn er mogelijkheden."
              },
              {
                q: "Hoe lang duurt het hele traject?",
                a: "Voor ondernemers gemiddeld 6-8 weken, iets langer dan bij werknemers. De extra documentatie vraagt meer beoordelingstijd."
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar Om Uw Plannen Te Bespreken?</h2>
                <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                  Als ondernemer verdient u een adviseur die begrijpt hoe uw wereld eruitziet. 
                  Plan een oriëntatiegesprek en ontdek wat er mogelijk is.
                </p>
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg" data-testid="button-cta-bottom">
                    <Phone className="w-5 h-5 mr-2" />
                    Plan Oriëntatiegesprek
                  </Button>
                </Link>
                <p className="text-sm text-primary-foreground/70 mt-6">
                  Gratis en vrijblijvend. Gewoon even kennismaken.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
