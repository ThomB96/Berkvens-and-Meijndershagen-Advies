import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function EersteHuisKopenPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <title>Eerste Huis Kopen Hypotheek | Advies Voor Starters</title>
      <meta name="description" content="Uw eerste woning kopen? Wij helpen starters stap-voor-stap bij hypotheekadvies. Geen verborgen kosten, alleen eerlijk advies. Plan nu een kennismaking!" />

      {/* Hero Section */}
      <section className="bg-primary/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-4" data-testid="text-page-h1">
            Eerste Huis Kopen: Stap-voor-stap naar Uw Droomwoning
          </h1>
          <p className="text-lg text-muted-foreground">
            Het kopen van uw eerste huis is een grote stap. Wij begeleiden u met deskundig en duidelijk advies, zodat u met vertrouwen uw eerste woning kunt kopen.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          
          {/* Introductie */}
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Het moment is daar: u wilt uw eerste huis kopen. Spannend, maar ook overweldigend met al die vragen. Hoeveel kan ik lenen? Wat zijn de kosten? Hoe zit het met die hypotheekvormen? Bij Berkvens & Meijndershagen advies helpen wij starters graag stap-voor-stap door dit proces. Wij nemen alle tijd om uw situatie te begrijpen en geven u advies dat echt bij u past.
            </p>
          </div>

          {/* H2: Wat komt er kijken */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Wat Komt Er Kijken bij Je Eerste Huis Kopen?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Het koopproces bestaat uit meerdere stappen. Eerst bepalen we hoeveel u kunt lenen op basis van uw inkomen, spaargeld en schulden. Dit is uw leencapaciteit. Daarna zoekt u uw droomhuis.
              </p>
              <p>
                Als u een huis hebt gevonden dat u aanstaat, volgt de onderhandelingsfase. Vervolgens regelen we de hypotheek en zorgen we voor alle administratie. Tenslotte vindt de overdracht plaats bij de notaris en gaat u de sleutel in ontvangst nemen.
              </p>
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mt-4">
                <h3 className="font-semibold mb-3">De belangrijkste stappen:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Bepalen van uw budget en leencapaciteit</li>
                  <li>Huizen zoeken en besichtigen</li>
                  <li>Onderhandelen over de prijs</li>
                  <li>Hypotheek aanvragen en beoordelen</li>
                  <li>Inspecties en waardering van het huis</li>
                  <li>Notariële begeleiding</li>
                  <li>Afronding en inhuizing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* H2: Waar moet je op letten */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Waar Moet Je Op Letten als Starter?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Als eerste huiskopers zijn daar enkele zaken waar u extra aandacht op moet richten:
              </p>
              
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1. Uw Eigen Vermogen</h3>
                    <p className="text-sm">
                      De meeste banken eisen dat u zelf een deel van de koopprijs inbrengt, meestal 10-20%. Dit verhoogt uw kansen op goede voorwaarden.
                    </p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">2. Rentevaste Periode</h3>
                    <p className="text-sm">
                      Kies niet zomaar voor 30 jaar vastigheid. Wij helpen u kiezen wat het beste past bij uw financiële situatie en toekomstplannen.
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">3. Bijkomende Kosten</h3>
                    <p className="text-sm">
                      Hypotheek is niet alles. Zorg voor duidelijkheid over hypotheekprocessingkosten, taxatiekosten en notariskosten.
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">4. Nog Even Geduld</h3>
                    <p className="text-sm">
                      Verhoog uw schulden niet kort voor u een hypotheek aanvraagt. Dit kan uw positie verslechteren.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* H2: Hoe helpen wij */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Hoe Helpen Wij Starters bij Hun Hypotheek?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Onze aanpak is persoonlijk en gericht op uw situatie. We beginnen met een grondige oriëntatiegesprek waarin we uw wensen, plannen en financiële situatie doorspreken. Daarna:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-semibold text-primary min-w-fit">Analyse:</span>
                  <span>We berekenen exact hoeveel u kunt lenen en welke woning realistisch voor u is.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary min-w-fit">Vergelijken:</span>
                  <span>We vergelijken hypotheeken van alle aanbieders en kiezen de beste optie voor u.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary min-w-fit">Begeleiding:</span>
                  <span>Van aanvraag tot ondertekening: wij regelen alles en zijn uw aanspreekpunt.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary min-w-fit">Nazorg:</span>
                  <span>Ook na het afsluiten: vragen? Wij zijn er voor u.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* H2: FAQ */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Veelgestelde Vragen</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Hoeveel kan ik als starter lenen?",
                  a: "Dat hangt af van uw inkomen, spaargeld en schulden. Veel banken hanteren de vuistregel: u kunt ongeveer 4-5 keer uw jaarinkomen lenen. Wij berekenen dit voor u in een gratis oriëntatiegesprek."
                },
                {
                  q: "Hoelang duurt het koopproces?",
                  a: "Van offerte tot sleuteloverdracht duurt het meestal 6-8 weken. Dit verschilt per situatie. Wij zorgen dat het proces soepel verloopt."
                },
                {
                  q: "Wat als mijn hypotheek wordt afgekeurd?",
                  a: "Dat gebeurt zelden als u eerlijk bent geweest en uw financiën op orde zijn. Mocht het gebeuren, helpen wij u naar alternatieven. Preventie is beter, dus we checken alles van tevoren."
                },
                {
                  q: "Kan ik gebruik maken van ouders geld?",
                  a: "Ja, maar banken willen hier duidelijkheid over. Is het een gift of een lening? Dit moet goed worden gedocumenteerd. Wij helpen u hier doorheen."
                }
              ].map((item, idx) => (
                <Card key={idx} className="cursor-pointer hover-elevate" onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold">{item.q}</h3>
                      <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                    </div>
                    {expandedFaq === idx && (
                      <p className="mt-4 text-sm text-muted-foreground">{item.a}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20 text-center space-y-4">
            <h2 className="text-2xl font-bold">Klaar Om Te Starten?</h2>
            <p className="text-muted-foreground">
              Neem contact op voor een vrijblijvend kennismakingsgesprek. Wij geven u eerlijk advies zonder verplichtingen.
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-cta-eerste-huis">
                Plan Uw Kennismaking
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
