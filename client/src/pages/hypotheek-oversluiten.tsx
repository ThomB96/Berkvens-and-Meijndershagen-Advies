import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function HypotheekOversluitenPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <title>Hypotheek Oversluiten | Lagere Rente & Betere Voorwaarden</title>
      <meta name="description" content="Hypotheek oversluiten? Bespaar op maandlasten met lagere rentes. Wij berekenen uw voordeel en regelen alles. Gratis oversluitcheck!" />

      <section className="bg-primary/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Hypotheek Oversluiten: Betere Voorwaarden, Lagere Lasten</h1>
          <p className="text-lg text-muted-foreground">
            Is uw rentetarief niet meer competitief? Oversluiten kan u honderden euro's per maand besparen. Wij berekenen of het voordelig voor u is.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rentes bewegen mee met de markt. Wat enkele jaren geleden normaal was, kan nu veel hoger zijn dan wat nieuwe klanten krijgen. Oversluiten betekent dat u een nieuwe hypotheek bij een ander bedrijf afsluit en zo de oude beëindigt. Dit kan aanzienlijke voordelen opleveren, maar vraagt wel voorbereiding.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Wat Is Hypotheek Oversluiten?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Oversluiten betekent dat u uw huisje als onderpand blijft houden, maar uw hypotheekcontract verschuift van de ene naar de andere bank. De nieuwe bank betaalt het restantbedrag van de oude af, en u krijgt een nieuwe hypotheekovereenkomst met hopelijk betere voorwaarden.
              </p>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">Procces in Stappen:</h3>
                  <ol className="space-y-3 list-decimal list-inside text-sm space-y-2">
                    <li>U vraagt een offerte aan bij een nieuwe bank</li>
                    <li>Nieuwe bank beoordeelt uw situatie en maakt een offerte</li>
                    <li>U kiest de beste offerte</li>
                    <li>Nieuwe bank regelt alles, inclusief betaling van de oude bank</li>
                    <li>Notaris verwerkt de overdracht van onderpand</li>
                    <li>U betaalt maandlasten aan de nieuwe bank</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Wanneer Is Oversluiten Interessant?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Niet altijd is oversluiten voordelig. Dit hangt af van verschillende factoren:
              </p>
              
              <div className="space-y-3">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-2">Rente is Flink Gedaald</h3>
                    <p className="text-sm">
                      Als u nu 5% betaalt en nieuwe klanten 3% krijgen, loont het vaak. Elke 1% rente verschil betekent honderden euro's besparing per jaar.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-2">Rentevaste Periode is Bijna Voorbij</h3>
                    <p className="text-sm">
                      Komt uw vastgestelde rente soon af? Dan is het moment om te vergelijken. Nu oversluiten kan beter zijn dan wachten tot die datum.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-2">U Wilt Betere Voorwaarden</h3>
                    <p className="text-sm">
                      Niet alleen rente telt. Vaak kunnen extra aflossingen zonder straf, flexibeler aflossingsverhoudingen, etc. waarde toevoegen.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Kosten en Boeterente Uitgelegd</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Voorzichtig: oversluiten kost geld. U betaalt boeterente en administratiekosten. Deze moeten minstens opwegen tegen de besparing.
              </p>
              
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Boeterente</h3>
                    <p className="text-sm">
                      Als u voortijdig afsluit, betaalt u boeterente. Dit is het verschil tussen het huidige rentetarief en wat u nog zou betalen. Voor grote bedragen kan dit veel zijn.
                    </p>
                    <p className="text-sm mt-2">
                      <span className="font-semibold">Voorbeeld:</span> U hebt €200.000 open op 5% rente. Huisbanken bieden nu 3% voor dezelfde periode. Boeterente kan dan rond de €5.000 zijn.
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">Oversluitkosten</h3>
                    <p className="text-sm">
                      Notaris, taxatie, administratie: dit loopt op tot €1.500-€3.000 afhankelijk van uw situatie.
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">Breakeven Berekening</h3>
                    <p className="text-sm">
                      We berekenen: hoeveel maanden moet u het nieuwe tarief betalen om de kosten terug te verdienen? Als u langer dan 5-6 jaar blijft wonen, loont het meestal.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Veelgestelde Vragen</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Hoe lang duurt oversluiten?",
                  a: "Typically 4-6 weken van aanvraag tot afronding. Wij regelen alles, u hoeft niet veel te doen behalve documenten ondertekenen."
                },
                {
                  q: "Kan ik oversluiten als mijn huis in waarde is gedaald?",
                  a: "Ja, maar mogelijk met beperking. Veel banken accepteren dit zonder probleem. In extreme gevallen kan het lastig zijn. Wij checken dit vooraf."
                },
                {
                  q: "Wat als de bank weigert?",
                  a: "Zelden, als uw financiën op orde zijn. Zeker niet met jouw huiswaarde als veiligheid. We maken een voorstudie om dit uit te sluiten."
                },
                {
                  q: "Moet ik mijn hele schuld afbetalen?",
                  a: "Nee, u hoeft niet minder schuld te hebben. Oversluiten is louter wissel-van-hypotheekprovider. Uw schuld verandert niet, alleen uw rentetarief."
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

          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20 text-center space-y-4">
            <h2 className="text-2xl font-bold">Benieuwd naar Uw Voordeel?</h2>
            <p className="text-muted-foreground">
              Vraag onze gratis oversluitcheck aan. Wij berekenen exact hoeveel u kunt besparen zonder verplichtingen.
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-cta-oversluiten">
                Vraag Oversluitcheck
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
