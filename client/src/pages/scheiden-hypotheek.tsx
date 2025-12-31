import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown, Heart, Home, Users, CheckCircle, AlertCircle, Phone, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ScheidenHypotheekPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <title>Scheiden en Hypotheek | Advies Bij Scheiding</title>
      <meta name="description" content="Scheiding en een hypotheek? Wij helpen u begrijpen wat er met uw huis gebeurt. Eerlijk, begripvol advies in moeilijke tijden." />

      {/* Hero - Empathische toon */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Vertrouwelijk en zonder oordeel
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Scheiden en Hypotheek?<br />
            <span className="text-primary">Wij helpen u verder.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Een scheiding is emotioneel en ingewikkeld. Wij begrijpen dat. 
            Laat ons u helpen met het financiële plaatje, zodat u zich kunt richten op wat belangrijk is.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8" data-testid="button-cta-hero">
                <Phone className="w-5 h-5 mr-2" />
                Vertrouwelijk Gesprek
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Discrete en persoonlijke begeleiding. Op uw tempo.
          </p>
        </div>
      </section>

      {/* Geruststellende boodschap */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Wij begrijpen het</h3>
                  <p className="text-muted-foreground">
                    Praten over geld tijdens een scheiding voelt misschien als het laatste waar u zin in heeft. 
                    Toch is het belangrijk om de financiële zaken goed te regelen. 
                    Wij maken het zo makkelijk mogelijk en nemen de tijd die u nodig hebt.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-16">
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Wat Gebeurt Er Met De Hypotheek?</h2>
            <p className="text-muted-foreground mb-6">
              Bij een scheiding moet de hypotheek worden aangepakt. U bent namelijk beiden aansprakelijk 
              voor de aflossing - ook na de scheiding. Dit moet worden opgelost.
            </p>

            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Eén partner neemt het huis over</h3>
                      <p className="text-muted-foreground text-sm">
                        De ene partner koopt de ander uit en neemt de hypotheek volledig over. 
                        Dit kan alleen als het inkomen voldoende is om de hypotheek alleen te dragen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Het huis wordt verkocht</h3>
                      <p className="text-muted-foreground text-sm">
                        De woning wordt verkocht, de hypotheek afgelost, en de overwaarde (of restschuld) wordt gedeeld. 
                        Een schone oplossing: beide partners kunnen opnieuw beginnen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Voorlopig samen blijven wonen</h3>
                      <p className="text-muted-foreground text-sm">
                        Soms is dit tijdelijk nodig, maar wees voorzichtig. U blijft beiden aansprakelijk. 
                        Leg goede afspraken vast en werk naar een definitieve oplossing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA halverwege */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6 text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Vragen over uw situatie?</h3>
              <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                Ieder verhaal is anders. Laten we samen kijken wat in uw geval de beste aanpak is.
              </p>
              <Link href="/contact">
                <Button data-testid="button-cta-middle">
                  Plan een Gesprek
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Huis overnemen of verkopen */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Huis Overnemen of Verkopen?</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-t-4 border-t-primary">
                <CardContent className="pt-6">
                  <Home className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-4">Huis overnemen</h3>
                  <ul className="space-y-2 text-sm mb-4">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Kinderen blijven in vertrouwde omgeving</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Geen verhuisstress bovenop alles</li>
                    <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Partner moet worden uitgekocht</li>
                    <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Inkomen moet voldoende zijn</li>
                  </ul>
                  <p className="text-xs text-muted-foreground">
                    Wij berekenen of u het huis alleen kunt betalen en hoeveel u uw ex-partner moet betalen.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-accent">
                <CardContent className="pt-6">
                  <ArrowRight className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-semibold text-lg mb-4">Huis verkopen</h3>
                  <ul className="space-y-2 text-sm mb-4">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Schone scheiding, geen financiële band</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Overwaarde wordt eerlijk gedeeld</li>
                    <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Beide partners moeten verhuizen</li>
                    <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Timing kan lastig zijn</li>
                  </ul>
                  <p className="text-xs text-muted-foreground">
                    Soms de verstandigste keuze. Wij helpen u de financiële gevolgen te overzien.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Financiële aandachtspunten */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Belangrijke Aandachtspunten</h2>
            
            <div className="space-y-4">
              {[
                { title: "Laat het huis taxeren", desc: "Beide partners moeten het eens zijn over de waarde. Een onafhankelijke taxatie voorkomt discussie." },
                { title: "Check uw inkomsten", desc: "Als u het huis wilt overnemen, controleert de bank of u het alleen kunt betalen. Partneralimentatie telt vaak mee." },
                { title: "Verdeel alle schulden", desc: "Niet alleen de hypotheek. Denk ook aan leningen, creditcards en andere schulden." },
                { title: "Schakel een jurist in", desc: "Wij helpen met de hypotheek, maar voor juridische zaken hebt u een advocaat of mediator nodig." }
              ].map((item, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Veelgestelde Vragen</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Blijf ik aansprakelijk als mijn ex in het huis blijft wonen?",
                  a: "Ja, zolang de hypotheek op beide namen staat. Dit moet juridisch worden opgelost. Wij adviseren sterk om dit goed te regelen, voor beide partijen."
                },
                {
                  q: "Hoeveel moet ik mijn ex betalen voor het huis?",
                  a: "Dit hangt af van de huiswaarde, de resterende hypotheek en wat jullie hebben afgesproken. Meestal: (waarde - hypotheek) / 2. Laat dit officieel berekenen."
                },
                {
                  q: "Kan ik met partneralimentatie genoeg lenen?",
                  a: "Ja, partneralimentatie telt mee als inkomen. Maar let op: het moet wel lang genoeg doorlopen. De bank rekent voorzichtig."
                },
                {
                  q: "Hoe lang duurt dit allemaal?",
                  a: "Gemiddeld 3-6 maanden, afhankelijk van hoe snel jullie tot overeenstemming komen. Wij proberen het proces zo soepel mogelijk te maken."
                }
              ].map((item, idx) => (
                <Card 
                  key={idx} 
                  className="cursor-pointer hover-elevate" 
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold">{item.q}</h3>
                      <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 text-muted-foreground ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                    </div>
                    {expandedFaq === idx && (
                      <p className="mt-4 text-muted-foreground">{item.a}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA-blok eindpagina */}
          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Wij Staan Voor U Klaar</h2>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              Neem vrijblijvend contact op. Wij luisteren, rekenen voor, en helpen u de beste keuze te maken. 
              Vertrouwelijk en op uw tempo.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-cta-bottom">
                <Phone className="w-5 h-5 mr-2" />
                Bel of Mail Ons
              </Button>
            </Link>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Uw verhaal blijft tussen ons.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
