import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown, Home, Calculator, FileText, Key, CheckCircle, AlertCircle, Heart, Users, Phone } from "lucide-react";
import { useState } from "react";

export default function EersteHuisKopenPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <title>Eerste Huis Kopen Hypotheek | Advies Voor Starters</title>
      <meta name="description" content="Uw eerste woning kopen? Wij helpen starters stap-voor-stap bij hypotheekadvies. Geen verborgen kosten, alleen eerlijk advies. Plan nu een kennismaking!" />

      {/* Hero Section - Emotioneel & Herkenbaar */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Home className="w-4 h-4" />
            Voor starters op de woningmarkt
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-page-h1">
            Uw Eerste Huis Kopen?<br />
            <span className="text-primary">Wij maken het begrijpelijk.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Spannend, toch? Al die termen, formulieren en bedragen. Maar geen zorgen: wij leggen alles uit in gewone taal en begeleiden u van A tot Z.
          </p>
          
          {/* CTA-blok #1 - Direct na hero */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8" data-testid="button-cta-hero">
                <Phone className="w-5 h-5 mr-2" />
                Gratis Kennismaken
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => document.getElementById('stappenplan')?.scrollIntoView({ behavior: 'smooth' })}>
              Hoe werkt het?
            </Button>
          </div>
          
          {/* Microcopy - Geruststelling */}
          <p className="text-sm text-muted-foreground mt-4">
            Geen verplichtingen. Gewoon een goed gesprek over uw plannen.
          </p>
        </div>
      </section>

      {/* Highlightblok - Herkenbare situatie */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Herkenbaar?</h3>
                  <p className="text-muted-foreground">
                    "Ik wil graag een huis kopen, maar waar begin ik? Hoeveel kan ik eigenlijk lenen? 
                    En wat zijn al die kosten koper precies?"
                  </p>
                  <p className="text-foreground mt-3 font-medium">
                    Dit horen we dagelijks. En we snappen het helemaal. Daarom nemen we de tijd om alles 
                    rustig met u door te nemen.
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
          
          {/* Introductie - Korte alinea's */}
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Het kopen van uw eerste huis is een van de grootste beslissingen in uw leven. 
              En eerlijk? Het kan overweldigend voelen.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Maar dat hoeft niet. Met de juiste begeleiding wordt het een avontuur waar u met 
              plezier op terugkijkt. Wij zorgen dat u precies weet waar u aan toe bent.
            </p>
          </div>

          {/* Stappenplan - Visueel overzicht */}
          <div id="stappenplan">
            <h2 className="text-3xl font-bold mb-3">Van Droom naar Sleutel: Zo Werkt Het</h2>
            <p className="text-muted-foreground mb-8">In 7 overzichtelijke stappen naar uw eerste woning</p>
            
            <div className="grid gap-4">
              {[
                { step: 1, icon: Calculator, title: "Oriëntatiegesprek", desc: "We berekenen hoeveel u kunt lenen en wat comfortabel is voor uw situatie" },
                { step: 2, icon: Home, title: "Huizen zoeken", desc: "U gaat op jacht! Wij staan klaar voor vragen over specifieke woningen" },
                { step: 3, icon: FileText, title: "Bod uitbrengen", desc: "Gevonden? Wij adviseren over een realistisch bod en de voorwaarden" },
                { step: 4, icon: Calculator, title: "Hypotheek regelen", desc: "Wij vergelijken alle aanbieders en kiezen de beste hypotheek voor u" },
                { step: 5, icon: CheckCircle, title: "Taxatie & keuring", desc: "Het huis wordt getaxeerd en eventueel bouwkundig gekeurd" },
                { step: 6, icon: FileText, title: "Naar de notaris", desc: "Alle papieren worden getekend. Bijna zover!" },
                { step: 7, icon: Key, title: "Sleutel ontvangen", desc: "Gefeliciteerd! Het huis is van u. Tijd om te vieren." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start p-4 rounded-lg hover:bg-accent/5 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <item.icon className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA-blok #2 - Halverwege */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6 text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Liever eerst even sparren?</h3>
              <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                Geen probleem. Bel ons of plan een vrijblijvend gesprek. 
                We denken graag met u mee over uw mogelijkheden.
              </p>
              <Link href="/contact">
                <Button data-testid="button-cta-middle">
                  Plan een Gesprek
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Voordelen & Aandachtspunten - Twee kolommen */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Waar Moet U Op Letten?</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Voordelen */}
              <Card className="border-t-4 border-t-green-500">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Voordelen als starter
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Starterslening mogelijk in veel gemeenten",
                      "Geen overdrachtsbelasting tot 35 jaar",
                      "Nationale Hypotheek Garantie (NHG) geeft korting",
                      "Schenkingsvrijstelling van ouders mogelijk"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Aandachtspunten */}
              <Card className="border-t-4 border-t-amber-500">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-500" />
                    Let hierop
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Kosten koper zijn circa 4-6% van de koopsom",
                      "Uw studieschuld telt mee bij de berekening",
                      "Niet alle schulden mag u verzwijgen",
                      "Een bouwkundige keuring voorkomt verrassingen"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm">
                        <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Highlightblok - Onze aanpak */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Hoe Helpen Wij U?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Persoonlijke aanpak", desc: "Geen standaard advies, maar maatwerk dat past bij uw situatie en wensen." },
                { title: "Alle aanbieders vergeleken", desc: "Wij zijn onafhankelijk en vergelijken hypotheken van alle banken en verzekeraars." },
                { title: "Duidelijke uitleg", desc: "Geen vakjargon, maar heldere taal. U begrijpt precies waar u voor tekent." },
                { title: "Nazorg inclusief", desc: "Ook na de aankoop zijn wij uw aanspreekpunt voor vragen of wijzigingen." }
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

          {/* FAQ - Uitklapbaar */}
          <div>
            <h2 className="text-3xl font-bold mb-3">Veelgestelde Vragen</h2>
            <p className="text-muted-foreground mb-6">De vragen die we het meest horen van starters</p>
            
            <div className="space-y-3">
              {[
                {
                  q: "Hoeveel kan ik als starter lenen?",
                  a: "Dat hangt af van uw inkomen, eventuele studieschuld en spaargeld. Een vuistregel is 4-5 keer uw bruto jaarinkomen, maar dit is per situatie anders. In een gratis oriëntatiegesprek berekenen we exact wat voor u haalbaar is."
                },
                {
                  q: "Wat zijn de bijkomende kosten bij een huis kopen?",
                  a: "Reken op 4-6% van de koopsom. Dit zijn onder andere: notariskosten, taxatiekosten, advies- en bemiddelingskosten, en eventueel een bouwkundige keuring. Wij geven u vooraf een volledig kostenoverzicht."
                },
                {
                  q: "Kan ik mijn studieschuld verzwijgen?",
                  a: "Nee, en dat raden we ook sterk af. DUO wordt altijd gecontroleerd door de bank. Eerlijkheid voorkomt problemen later in het proces. Wij helpen u rekening te houden met uw studieschuld."
                },
                {
                  q: "Hoe lang duurt het hele proces?",
                  a: "Van eerste gesprek tot sleuteloverdracht gemiddeld 2-3 maanden. Dit hangt af van hoe snel u een huis vindt en hoe soepel de hypotheekaanvraag verloopt. Wij houden u steeds op de hoogte van de voortgang."
                }
              ].map((item, idx) => (
                <Card 
                  key={idx} 
                  className="cursor-pointer hover-elevate transition-all" 
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold">{item.q}</h3>
                      <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 text-muted-foreground ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                    </div>
                    {expandedFaq === idx && (
                      <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA-blok #3 - Eindpagina */}
          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Klaar om de Eerste Stap te Zetten?</h2>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              Plan een gratis kennismakingsgesprek. We bespreken uw wensen, berekenen uw mogelijkheden 
              en beantwoorden al uw vragen. Zonder verplichtingen.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-cta-bottom">
                <Phone className="w-5 h-5 mr-2" />
                Plan Uw Kennismaking
              </Button>
            </Link>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Liever eerst bellen? Dat kan ook: we staan voor u klaar.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
