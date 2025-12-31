import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function VerbouwenPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <title>Hypotheek Voor Verbouwing | Financiering Renovatie</title>
      <meta name="description" content="Uw huis renoveren? Ontdek hoe u uw verbouwing financiert met hypotheekuitbreiding of lening. Tips voor energiebesparende verbouwingen." />

      <section className="bg-accent/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Verbouwen: Uw Hypotheek Voor Een Mooier Huis</h1>
          <p className="text-lg text-muted-foreground">
            Uw huis kan nog beter. Wij helpen u de verbouwing financieel mogelijk te maken met slimme hypotheekoplossingen.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Verbouwen is een groot onderdeel van huiseigenaarschap. Misschien wilt u een groter keuken, een extra badkamer, of wilt u uw huis energiezuiniger maken. Dit kost geld. Gelukkig zijn er vele financieringsmogelijkheden. Wij helpen u de beste keuze te maken.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Hoe Financier Je Een Verbouwing?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Dit hangt af van het bedrag, uw eigen spaargeld, en de huiswaarde. Laten we de opties langs gaan.
              </p>
              
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1. Uit Eigen Spaargeld</h3>
                    <p className="text-sm">
                      Ideaal als u het kunt betalen. Geen extra schuld, geen rente. Maar wellicht wilt u voorzichtig blijven voor noodgevallen.
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">2. Hypotheek Uitbreiden</h3>
                    <p className="text-sm">
                      Uw hypotheek groeit mee met uw huiswaarde. Als uw huis meer waard is geworden, kunt u extra lenen tegen hypotheekrentarief (laag).
                    </p>
                    <p className="text-sm mt-2"><span className="font-semibold">Voordeel:</span> Laag rentepercentage.</p>
                    <p className="text-sm"><span className="font-semibold">Nadeel:</span> Hogere totale hypotheekschuld.</p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">3. Persoonlijke Lening</h3>
                    <p className="text-sm">
                      Sneller dan hypotheekuitbreiding. Geen onderpand nodig. Maar rentetarief is hoger.
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">4. Combinatie</h3>
                    <p className="text-sm">
                      Gebruik eigen spaargeld voor een deel, en financier de rest via hypotheekuitbreiding of lening.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Verbouwen Met of Zonder Hypotheekuitbreiding?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Dit is een belangrijke keuze. Beiden hebben voor- en nadelen.
              </p>

              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Met Hypotheekuitbreiding</h3>
                    <p className="text-sm mb-2"><span className="font-semibold">Voordelen:</span></p>
                    <ul className="text-sm list-disc list-inside space-y-1 mb-3">
                      <li>Zeer laag rentepercentage (ongeveer 3-4%)</li>
                      <li>Lange aflossingstermijn mogelijk (20-30 jaar)</li>
                      <li>Lage maandlasten</li>
                    </ul>
                    <p className="text-sm"><span className="font-semibold">Nadelen:</span></p>
                    <ul className="text-sm list-disc list-inside space-y-1">
                      <li>Totale schuld groeit</li>
                      <li>Onderhandelingsproces kan 4-6 weken duren</li>
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-foreground mb-3">Met Persoonlijke Lening</h3>
                    <p className="text-sm mb-2"><span className="font-semibold">Voordelen:</span></p>
                    <ul className="text-sm list-disc list-inside space-y-1 mb-3">
                      <li>Snel, vaak binnen 2 weken gereed</li>
                      <li>Geen ingewikkelde onderhandelingen</li>
                      <li>Flexibel bedrag</li>
                    </ul>
                    <p className="text-sm"><span className="font-semibold">Nadelen:</span></p>
                    <ul className="text-sm list-disc list-inside space-y-1">
                      <li>Hoger rentepercentage (6-9%)</li>
                      <li>Kortere aflossingstermijn (meestal 5-10 jaar)</li>
                      <li>Hogere maandlasten</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <p className="pt-4">
                Wij helpen u bepalen welke optie het beste past. Voor grote verbouwingen loont hypotheekuitbreiding meestal. Voor kleinere bedragen is een lening sneller.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Energiebesparende Verbouwingen</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Energiebesparende verbouwingen worden steeds populairder. Veel gemeenten bieden subsidies en belastingvoordelen. Dit maakt uw verbouwing goedkoper!
              </p>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">Populaire Energiebesparingsmaatregelen:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span><span className="font-semibold">Isolatie:</span> Betere muren, daken, ramen besparen veel energie.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span><span className="font-semibold">HR++ Glas:</span> Moderne ramen houden warmte beter vast.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span><span className="font-semibold">Warmtepomp:</span> Vervang uw cv-ketel door een duurzaamere oplossing.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span><span className="font-semibold">Zonnepanelen:</span> Bespaar op elektriciteit, en krijg teruggave via subsidies.</span>
                    </li>
                  </ul>
                  <p className="text-sm mt-4">
                    <span className="font-semibold">Tip:</span> Veel gemeenten bieden subsidies tot 50% van de kosten. Vraag uw gemeente naar mogelijkheden!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Veelgestelde Vragen</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Hoeveel kan ik maximaal lenen voor verbouwing?",
                  a: "Dat hangt af van uw huiswaarde en uw inkomen. Wij berekenen hoeveel hypotheekruimte u heeft. Meestal is 70-80% van uw huiswaarde beschikbaar."
                },
                {
                  q: "Betaal ik meer rente als ik mijn hypotheek uitbreid?",
                  a: "Nee, meestal niet. Uw rentetarief blijft hetzelfde. Alleen u schuld groeit, dus het totale bedrag aan rente stijgt."
                },
                {
                  q: "Kan ik mijn hypotheek uitbreiden terwijl ik aan het verbouwen ben?",
                  a: "Ja. Veel banken betalen het geld rechtstreeks aan de aannemer. Dit voorkomt dat u zelf moet voorschieten."
                },
                {
                  q: "Wat als mijn verbouwing duurder wordt?",
                  a: "Regel dit van tevoren met uw financier. Vaak kunt u nog aanpassingen maken. Beter voorkomen dan beperkt raken!"
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

          <div className="bg-accent/10 p-8 rounded-lg border border-accent/20 text-center space-y-4">
            <h2 className="text-2xl font-bold">Klaar Voor Uw Verbouwing?</h2>
            <p className="text-muted-foreground">
              Laat ons u helpen met de financiering. Wij vinden de meest voordelige manier voor uw situatie.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-cta-verbouwen">
                Vraag Verbouwadvies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
