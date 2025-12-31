import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown, Briefcase, FileText, CheckCircle, AlertCircle, Lightbulb, Phone, TrendingUp, Users, Target } from "lucide-react";
import { useState } from "react";

export default function HypotheekOndernemersPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <title>Hypotheek Voor Ondernemers & ZZP | Advies Zelfstandigen</title>
      <meta name="description" content="Als ZZP'er of ondernemer een hypotheek krijgen? Wij kennen de eisen van banken. Maatwerkadvies voor ondernemers. Vraag advies aan!" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Briefcase className="w-4 h-4" />
            Specialist in ondernemershypotheken
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ondernemer en Een Huis Kopen?<br />
            <span className="text-primary">Wij kennen de weg.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Als ZZP'er of ondernemer sta je er financieel vaak goed voor. 
            Maar banken kijken anders naar je dan naar werknemers. Wij weten precies wat nodig is.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8" data-testid="button-cta-hero">
                <Phone className="w-5 h-5 mr-2" />
                Ondernemersadvies Aanvragen
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Gratis oriëntatiegesprek. Wij denken met u mee.
          </p>
        </div>
      </section>

      {/* Herkenbare situatie */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Lightbulb className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Herkenbaar?</h3>
                  <p className="text-muted-foreground">
                    "Mijn bedrijf loopt prima, ik verdien goed, maar de bank wil wel heel veel papieren zien. 
                    En mijn accountant heeft het druk..." - Dit horen we vaak. 
                    Wij helpen u door het papierwerk en zorgen voor een sterke aanvraag.
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
            <h2 className="text-3xl font-bold mb-6">Kun Je Als Ondernemer Een Hypotheek Krijgen?</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Absoluut. Duizenden ondernemers kopen elk jaar een huis. 
              Het vraagt alleen wat meer voorbereiding dan bij werknemers.
            </p>
            <p className="text-lg text-muted-foreground">
              Banken willen zekerheid. Zonder vast salaris kijken ze naar uw bedrijfsresultaten over meerdere jaren. 
              Met de juiste documentatie en een goed verhaal staat u sterker dan u denkt.
            </p>
          </div>

          {/* Wat vragen banken */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Wat Vragen Banken Van Ondernemers?</h2>
            <p className="text-muted-foreground mb-6">
              Verwacht meer papierwerk dan bij een werknemer. Dit is wat u nodig hebt:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: FileText, title: "Jaarrekeningen (3 jaar)", desc: "Officieel opgestelde cijfers van uw accountant" },
                { icon: FileText, title: "Belastingaanslagen", desc: "De afgelopen 3 jaar, inclusief voorlopige aanslagen" },
                { icon: Briefcase, title: "Uittreksel KvK", desc: "Recent bewijs dat uw bedrijf bestaat" },
                { icon: TrendingUp, title: "Prognose (soms)", desc: "Bij starters of groeiende bedrijven" }
              ].map((item, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <item.icon className="w-6 h-6 text-primary mb-3" />
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Let op: timing is belangrijk</h3>
                    <p className="text-sm text-muted-foreground">
                      Plan uw hypotheekaanvraag niet vlak voor het indienen van uw jaarrekening. 
                      De bank wil de meest recente cijfers zien. Wij helpen u met de timing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA halverwege */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6 text-center">
              <Target className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wilt u weten hoeveel u kunt lenen?</h3>
              <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                Wij maken een inschatting op basis van uw cijfers en geven u een realistisch beeld.
              </p>
              <Link href="/contact">
                <Button data-testid="button-cta-middle">
                  Vraag Oriëntatiegesprek
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Onze aanpak */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Onze Aanpak Voor Ondernemers</h2>
            <p className="text-muted-foreground mb-8">
              Wij hebben veel ervaring met ZZP'ers, eenmanszaken en BV's. Dit is hoe wij werken:
            </p>

            <div className="space-y-4">
              {[
                { step: 1, title: "Intake en analyse", desc: "We bekijken uw cijfers en bespreken uw wensen. Wat is realistisch?" },
                { step: 2, title: "Documenten verzamelen", desc: "Wij vertellen precies wat u nodig hebt en checken of alles compleet is." },
                { step: 3, title: "De juiste bank kiezen", desc: "Niet elke bank is ondernemer-vriendelijk. Wij weten welke banken goed scoren." },
                { step: 4, title: "Sterke aanvraag opstellen", desc: "Wij presenteren uw situatie zo sterk mogelijk, met uitleg waar nodig." },
                { step: 5, title: "Begeleiding tot de sleutel", desc: "Van aanvraag tot notaris: wij blijven uw aanspreekpunt." }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start p-4 rounded-lg bg-primary/5">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Voordelen */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Waarom Ondernemers Voor Ons Kiezen</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Ervaring met ondernemers", desc: "We spreken uw taal en begrijpen de uitdagingen van ondernemerschap." },
                { title: "Netwerk bij banken", desc: "We weten welke acceptanten ondernemersvriendelijk zijn." },
                { title: "Sterke dossieropbouw", desc: "Een goede presentatie maakt het verschil bij de beoordeling." },
                { title: "Eerlijk advies", desc: "We vertellen u direct of uw plan haalbaar is en wat de alternatieven zijn." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Veelgestelde Vragen</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Hoeveel jaar moet mijn bedrijf bestaan?",
                  a: "De meeste banken vragen 3 jaar. Sommige accepteren 2 jaar of zelfs 1 jaar met een goede prognose. Wij weten welke banken flexibeler zijn."
                },
                {
                  q: "Telt mijn BV-winst of mijn salaris?",
                  a: "Beide kunnen meetellen, afhankelijk van de bank. Sommige kijken naar uw DGA-salaris, andere naar de bedrijfswinst. Wij adviseren over de beste aanpak."
                },
                {
                  q: "Wat als mijn omzet schommelt?",
                  a: "Schommelende omzet is normaal voor ondernemers. Banken kijken naar het gemiddelde. Wel helpt het als de trend stijgend is."
                },
                {
                  q: "Kan ik een hypotheek krijgen als starter ondernemer?",
                  a: "Dat is lastiger, maar niet onmogelijk. Met een goede prognose en eventueel een mede-aanvrager of garantsteller zijn er mogelijkheden."
                },
                {
                  q: "Hoe lang duurt het hele traject?",
                  a: "Voor ondernemers gemiddeld 6-8 weken, iets langer dan bij werknemers. De extra documentatie vraagt meer beoordelingstijd."
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
            <h2 className="text-3xl font-bold mb-4">Klaar Om Uw Plannen Te Bespreken?</h2>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              Als ondernemer verdient u een adviseur die begrijpt hoe uw wereld eruitziet. 
              Plan een oriëntatiegesprek en ontdek wat er mogelijk is.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-cta-bottom">
                <Phone className="w-5 h-5 mr-2" />
                Plan Oriëntatiegesprek
              </Button>
            </Link>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Gratis en vrijblijvend. Gewoon even kennismaken.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
