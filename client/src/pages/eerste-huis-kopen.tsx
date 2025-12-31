import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown, Home, Calculator, FileText, Key, CheckCircle, AlertCircle, Heart, Users, Phone, Star, Shield, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import coupleKeysImg from "@assets/stock_images/young_couple_looking_2c8128d6.jpg";
import familyMovingImg from "@assets/stock_images/family_moving_into_n_cf7fd414.jpg";
import advisorMeetingImg from "@assets/stock_images/couple_reviewing_doc_7929205a.jpg";

export default function EersteHuisKopenPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <title>Eerste Huis Kopen Hypotheek | Advies Voor Starters</title>
      <meta name="description" content="Uw eerste woning kopen? Wij helpen starters stap-voor-stap bij hypotheekadvies. Geen verborgen kosten, alleen eerlijk advies. Plan nu een kennismaking!" />

      {/* Hero Section met grote afbeelding */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img 
          src={coupleKeysImg} 
          alt="Jong stel met huissleutels" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Home className="w-4 h-4" />
              Voor starters op de woningmarkt
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-page-h1">
              Uw Eerste Huis Kopen?<br />
              Wij maken het begrijpelijk.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              Spannend, toch? Al die termen, formulieren en bedragen. Maar geen zorgen: 
              wij leggen alles uit in gewone taal.
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
                onClick={() => document.getElementById('stappenplan')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-scroll-stappenplan"
              >
                Hoe werkt het?
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <p className="text-sm text-white/70 mt-6">
              Geen verplichtingen. Gewoon een goed gesprek over uw plannen.
            </p>
          </div>
        </div>
      </section>

      {/* Vertrouwensindicatoren */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-card border-b">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">AFM Gecertificeerd</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">Reactie binnen 24 uur</span>
            </div>
          </div>
        </div>
      </section>

      {/* Herkenbare situatie met foto */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                Dit klinkt vast bekend
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                "Ik wil een huis kopen, maar waar begin ik?"
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Hoeveel kan ik eigenlijk lenen? Wat zijn al die kosten koper precies? 
                En wat als ik een studieschuld heb?
              </p>
              <p className="text-lg text-foreground font-medium mb-6">
                Dit horen we dagelijks. En we snappen het helemaal. 
                Daarom nemen we de tijd om alles rustig met u door te nemen.
              </p>
              <Link href="/contact">
                <Button className="group" data-testid="button-cta-vragen">
                  Stel uw vragen
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src={familyMovingImg} 
                  alt="Familie verhuist naar nieuw huis" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                  <p className="text-3xl font-bold">2-3</p>
                  <p className="text-sm">maanden van start tot sleutel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stappenplan */}
      <section id="stappenplan" className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Van Droom naar Sleutel</h2>
            <p className="text-lg text-muted-foreground">In 7 overzichtelijke stappen naar uw eerste woning</p>
          </div>
          
          <div className="grid gap-4">
            {[
              { step: 1, icon: Calculator, title: "Oriëntatiegesprek", desc: "We berekenen hoeveel u kunt lenen en wat comfortabel is", color: "bg-blue-500" },
              { step: 2, icon: Home, title: "Huizen zoeken", desc: "U gaat op jacht! Wij staan klaar voor vragen", color: "bg-indigo-500" },
              { step: 3, icon: FileText, title: "Bod uitbrengen", desc: "Wij adviseren over een realistisch bod", color: "bg-purple-500" },
              { step: 4, icon: Calculator, title: "Hypotheek regelen", desc: "Wij vergelijken alle aanbieders voor u", color: "bg-pink-500" },
              { step: 5, icon: CheckCircle, title: "Taxatie & keuring", desc: "Het huis wordt getaxeerd en gekeurd", color: "bg-rose-500" },
              { step: 6, icon: FileText, title: "Naar de notaris", desc: "Alle papieren worden getekend", color: "bg-orange-500" },
              { step: 7, icon: Key, title: "Sleutel ontvangen", desc: "Gefeliciteerd! Het huis is van u", color: "bg-green-500" },
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

      {/* CTA met adviseur foto */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={advisorMeetingImg} 
                alt="Adviesgesprek met hypotheekadviseur" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Liever eerst even sparren?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Geen probleem. Plan een vrijblijvend gesprek. 
                We denken graag met u mee over uw mogelijkheden.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Gratis oriëntatiegesprek",
                  "Berekening van uw leencapaciteit",
                  "Uitleg van alle kosten",
                  "Advies op maat voor uw situatie"
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
                  Plan een Gesprek
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen & Aandachtspunten */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Waar Moet U Op Letten?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-green-400 to-green-600" />
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Voordelen als starter
                </h3>
                <ul className="space-y-3">
                  {[
                    "Starterslening mogelijk in veel gemeenten",
                    "Geen overdrachtsbelasting tot 35 jaar",
                    "Nationale Hypotheek Garantie geeft korting",
                    "Schenkingsvrijstelling van ouders mogelijk"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600" />
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-amber-500" />
                  Let hierop
                </h3>
                <ul className="space-y-3">
                  {[
                    "Kosten koper zijn circa 4-6% van de koopsom",
                    "Uw studieschuld telt mee bij de berekening",
                    "Niet alle schulden mag u verzwijgen",
                    "Een bouwkundige keuring voorkomt verrassingen"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Onze aanpak */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hoe Helpen Wij U?</h2>
            <p className="text-lg text-muted-foreground">Persoonlijk, duidelijk en altijd in uw belang</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Users, title: "Persoonlijke aanpak", desc: "Geen standaard advies, maar maatwerk dat past bij uw situatie." },
              { icon: Calculator, title: "Alle aanbieders vergeleken", desc: "Wij zijn onafhankelijk en vergelijken hypotheken van alle banken." },
              { icon: Heart, title: "Duidelijke uitleg", desc: "Geen vakjargon, maar heldere taal. U begrijpt waar u voor tekent." },
              { icon: Shield, title: "Nazorg inclusief", desc: "Ook na de aankoop zijn wij uw aanspreekpunt voor vragen." }
            ].map((item, idx) => (
              <Card key={idx} className="hover-elevate transition-all border-0 shadow-sm hover:shadow-md">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Veelgestelde Vragen</h2>
            <p className="text-muted-foreground">De vragen die we het meest horen van starters</p>
          </div>
          
          <div className="space-y-3">
            {[
              {
                q: "Hoeveel kan ik als starter lenen?",
                a: "Dat hangt af van uw inkomen, eventuele studieschuld en spaargeld. Een vuistregel is 4-5 keer uw bruto jaarinkomen, maar dit is per situatie anders. In een gratis gesprek berekenen we exact wat haalbaar is."
              },
              {
                q: "Wat zijn de bijkomende kosten bij een huis kopen?",
                a: "Reken op 4-6% van de koopsom. Dit zijn onder andere: notariskosten, taxatiekosten, advies- en bemiddelingskosten, en eventueel een bouwkundige keuring. Wij geven u vooraf een volledig kostenoverzicht."
              },
              {
                q: "Kan ik mijn studieschuld verzwijgen?",
                a: "Nee, en dat raden we sterk af. DUO wordt altijd gecontroleerd door de bank. Eerlijkheid voorkomt problemen later. Wij helpen u rekening te houden met uw studieschuld."
              },
              {
                q: "Hoe lang duurt het hele proces?",
                a: "Van eerste gesprek tot sleuteloverdracht gemiddeld 2-3 maanden. Dit hangt af van hoe snel u een huis vindt en hoe soepel de hypotheekaanvraag verloopt."
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
                    <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
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
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar om de Eerste Stap te Zetten?</h2>
                <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                  Plan een gratis kennismakingsgesprek. We bespreken uw wensen, berekenen uw mogelijkheden 
                  en beantwoorden al uw vragen.
                </p>
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg" data-testid="button-cta-bottom">
                    <Phone className="w-5 h-5 mr-2" />
                    Plan Uw Kennismaking
                  </Button>
                </Link>
                <p className="text-sm text-primary-foreground/70 mt-6">
                  Liever eerst bellen? Dat kan ook: we staan voor u klaar.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
