import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown, Heart, Home, Users, CheckCircle, AlertCircle, Phone, Shield, ArrowRight, Star, Lock } from "lucide-react";
import { useState } from "react";
import advisorMeetingImg from "@assets/stock_images/couple_reviewing_doc_48aad1b1.jpg";

export default function ScheidenHypotheekPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <title>Scheiden en Hypotheek | Advies Bij Scheiding</title>
      <meta name="description" content="Scheiding en een hypotheek? Wij helpen u begrijpen wat er met uw huis gebeurt. Eerlijk, begripvol advies in moeilijke tijden." />

      {/* Hero - Empathische toon */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Lock className="w-4 h-4" />
            Vertrouwelijk en zonder oordeel
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Scheiden en Hypotheek?<br />
            <span className="text-primary">Wij helpen u verder.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Een scheiding is emotioneel en ingewikkeld. Wij begrijpen dat. 
            Laat ons u helpen met het financiële plaatje.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 shadow-lg" data-testid="button-cta-hero">
                <Phone className="w-5 h-5 mr-2" />
                Vertrouwelijk Gesprek
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Discrete en persoonlijke begeleiding. Op uw tempo.
          </p>
        </div>
      </section>

      {/* Vertrouwensindicatoren */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-card border-b">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="font-bold text-lg">9.4</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock className="w-5 h-5 text-primary" />
              <span className="text-sm">100% vertrouwelijk</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-sm">Begripvolle aanpak</span>
            </div>
          </div>
        </div>
      </section>

      {/* Geruststellende boodschap + foto */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                Wij begrijpen het
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Praten over geld voelt nu als het laatste waar u zin in hebt
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Toch is het belangrijk om de financiële zaken goed te regelen. 
                Wij maken het zo makkelijk mogelijk en nemen de tijd die u nodig hebt.
              </p>
              <p className="text-lg font-medium mb-6">
                Geen haast, geen druk. Gewoon een luisterend oor en duidelijk advies.
              </p>
              <Link href="/contact">
                <Button className="group" data-testid="button-cta-contact">
                  Neem contact op
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src={advisorMeetingImg} 
                alt="Vertrouwelijk adviesgesprek" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wat gebeurt er met de hypotheek */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wat Gebeurt Er Met De Hypotheek?</h2>
            <p className="text-muted-foreground">U bent beiden aansprakelijk - dit moet worden opgelost</p>
          </div>

          <div className="space-y-4">
            <Card className="border-0 shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="flex gap-4">
                  <div className="bg-primary w-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-foreground">1</span>
                  </div>
                  <div className="py-5 pr-5">
                    <h3 className="font-semibold text-lg mb-2">Eén partner neemt het huis over</h3>
                    <p className="text-muted-foreground">
                      De ene partner koopt de ander uit en neemt de hypotheek volledig over. 
                      Dit kan alleen als het inkomen voldoende is.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="flex gap-4">
                  <div className="bg-primary w-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-foreground">2</span>
                  </div>
                  <div className="py-5 pr-5">
                    <h3 className="font-semibold text-lg mb-2">Het huis wordt verkocht</h3>
                    <p className="text-muted-foreground">
                      De woning wordt verkocht, de hypotheek afgelost, en de overwaarde gedeeld. 
                      Beide partners kunnen opnieuw beginnen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md overflow-hidden bg-amber-50 dark:bg-amber-900/10">
              <CardContent className="p-0">
                <div className="flex gap-4">
                  <div className="bg-amber-500 w-16 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="py-5 pr-5">
                    <h3 className="font-semibold text-lg mb-2">Voorlopig samen blijven wonen</h3>
                    <p className="text-muted-foreground">
                      Soms is dit tijdelijk nodig, maar wees voorzichtig. U blijft beiden aansprakelijk. 
                      Leg goede afspraken vast.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Vragen over uw situatie?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Ieder verhaal is anders. Laten we samen kijken wat in uw geval de beste aanpak is.
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg" data-testid="button-cta-middle">
              <Phone className="w-5 h-5 mr-2" />
              Plan een Gesprek
            </Button>
          </Link>
        </div>
      </section>

      {/* Huis overnemen of verkopen */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Huis Overnemen of Verkopen?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-primary/70" />
              <CardContent className="pt-6">
                <Home className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-xl mb-4">Huis overnemen</h3>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Kinderen blijven in vertrouwde omgeving</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Geen verhuisstress bovenop alles</li>
                  <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Partner moet worden uitgekocht</li>
                  <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Inkomen moet voldoende zijn</li>
                </ul>
                <p className="text-xs text-muted-foreground">
                  Wij berekenen of u het huis alleen kunt betalen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-accent to-accent/70" />
              <CardContent className="pt-6">
                <ArrowRight className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-xl mb-4">Huis verkopen</h3>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Schone scheiding, geen financiële band</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Overwaarde wordt eerlijk gedeeld</li>
                  <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Beide partners moeten verhuizen</li>
                  <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Timing kan lastig zijn</li>
                </ul>
                <p className="text-xs text-muted-foreground">
                  Soms de verstandigste keuze. Wij helpen u de gevolgen te overzien.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Aandachtspunten */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Belangrijke Aandachtspunten</h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Laat het huis taxeren", desc: "Beide partners moeten het eens zijn over de waarde. Een onafhankelijke taxatie voorkomt discussie." },
              { title: "Check uw inkomsten", desc: "Partneralimentatie telt vaak mee bij de berekening van uw leencapaciteit." },
              { title: "Verdeel alle schulden", desc: "Niet alleen de hypotheek. Denk ook aan leningen, creditcards en andere schulden." },
              { title: "Schakel een jurist in", desc: "Wij helpen met de hypotheek, maar voor juridische zaken hebt u een advocaat of mediator nodig." }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-sm hover-elevate transition-all">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Veelgestelde Vragen</h2>
          </div>
          
          <div className="space-y-3">
            {[
              {
                q: "Blijf ik aansprakelijk als mijn ex in het huis blijft wonen?",
                a: "Ja, zolang de hypotheek op beide namen staat. Dit moet juridisch worden opgelost."
              },
              {
                q: "Hoeveel moet ik mijn ex betalen voor het huis?",
                a: "Meestal: (waarde - hypotheek) / 2. Laat dit officieel berekenen."
              },
              {
                q: "Kan ik met partneralimentatie genoeg lenen?",
                a: "Ja, partneralimentatie telt mee als inkomen. Maar het moet wel lang genoeg doorlopen."
              },
              {
                q: "Hoe lang duurt dit allemaal?",
                a: "Gemiddeld 3-6 maanden, afhankelijk van hoe snel jullie tot overeenstemming komen."
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wij Staan Voor U Klaar</h2>
                <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                  Neem vrijblijvend contact op. Wij luisteren, rekenen voor, en helpen u de beste keuze te maken. 
                  Vertrouwelijk en op uw tempo.
                </p>
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg" data-testid="button-cta-bottom">
                    <Phone className="w-5 h-5 mr-2" />
                    Bel of Mail Ons
                  </Button>
                </Link>
                <p className="text-sm text-primary-foreground/70 mt-6">
                  Uw verhaal blijft tussen ons.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
