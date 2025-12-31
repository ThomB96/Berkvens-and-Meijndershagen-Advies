import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function VolgendHuisKopenPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <title>Volgend Huis Kopen | Hypotheekadvies Voor Doorstromers</title>
      <meta name="description" content="Doorstromen naar een groter huis? Ontdek uw mogelijkheden met overwaarde, meeneemhypotheek en financieringsopties. Deskundig advies voor doorstromers." />

      <section className="bg-primary/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Volgend Huis Kopen: Slimmer Financieren bij Doorstromen</h1>
          <p className="text-lg text-muted-foreground">
            Uw gezin groeit of u wilt een groter huis. Wij begeleiden u door het doorstroomproces en zorgen dat u optimaal van uw huidige situatie gebruikmaakt.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Doorstromen naar uw volgende huis brengt nieuwe mogelijkheden met zich mee. Uw huiswaarde is gestegen, u hebt misschien spaargeld opgebouwd, en u kent nu het hypotheekproces. Dit geeft u voordelen! Toch zijn er ook complexe keuzes: overwaarde, meeneemhypotheek, timing van verkoop en aankoop. Wij helpen u alle opties helder in kaart brengen.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Wat Betekent Doorstromen?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Doorstromen betekent dat u uw huisje verkoopt en een nieuw huis koopt. Dit klinkt simpel, maar er zit veel voorbereiding achter. Cruciaal is de timing: verkoop en aankoop moeten goed op elkaar aansluiten.
              </p>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">Twee Scenario's:</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">1. Eerst Verkopen, Dan Kopen</h4>
                      <p className="text-sm">Voordeel: U weet precies hoeveel geld u heeft voor het nieuwe huis. Nadeel: U bent even zonder huis, of u moet ergens tussen blijven.</p>
                    </div>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">2. Eerst Kopen, Dan Verkopen</h4>
                      <p className="text-sm">Voordeel: U hebt meer tijd om rustig de perfecte woning te zoeken. Nadeel: U draagt twee maanden huren/aflossingen.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Wat Kun Je Doen met Overwaarde?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Overwaarde is het verschil tussen de verkoopprijs van uw huis en het restantbedrag van uw hypotheek. Dit is veelal uw grootste voordeel bij doorstromen!
              </p>
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Voorbeeld:</h3>
                <ul className="space-y-2 text-sm">
                  <li><span className="font-semibold">Verkoopprijs huisje:</span> €350.000</li>
                  <li><span className="font-semibold">Restant hypotheek:</span> €200.000</li>
                  <li><span className="font-semibold">Overwaarde:</span> €150.000 (minus verkoopkosten)</li>
                </ul>
              </div>
              <p className="pt-4">
                Deze overwaarde kunt u gebruiken voor:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Eigen vermogen voor de nieuwe woning (scherper rentetarief)</li>
                <li>Volledig aflossen van de oude hypotheek</li>
                <li>Inventaris en verbouwingen in het nieuwe huis</li>
                <li>Spaarreserve opbouwen</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Hypotheek Meenemen of Oversluiten?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                U hebt rechten op uw huisje, waaronder het recht om uw hypotheek mee te nemen bij doorstroming. Maar is dit altijd het beste? Laten we beide opties vergelijken.
              </p>
              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Hypotheek Meenemen (Subrogatie)</h3>
                    <p className="text-sm mb-3">U brengt de oude hypotheek mee naar de nieuwe woning.</p>
                    <p className="text-sm"><span className="font-semibold">Voordeel:</span> Meestal geen extra kosten. Het rente percentage blijft gelijk.</p>
                    <p className="text-sm"><span className="font-semibold">Nadeel:</span> U heeft minder keus. Misschien zijn betere tarieven beschikbaar.</p>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-foreground mb-3">Oversluiten naar Nieuw Tarief</h3>
                    <p className="text-sm mb-3">U beëindigt de oude en neemt een nieuwe hypotheek.</p>
                    <p className="text-sm"><span className="font-semibold">Voordeel:</span> U kunt van lagere rentes profiteren. U hebt volledige keus.</p>
                    <p className="text-sm"><span className="font-semibold">Nadeel:</span> Boeterente op de oude hypotheek mogelijk. Administratiekosten.</p>
                  </div>
                </CardContent>
              </Card>
              <p className="pt-4">
                Wij berekenen wat voor u het financieel voordeligst is. Soms is meenemen beter, soms oversluiten.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Veelgestelde Vragen</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Hoeveel moet ik aftrekken voor verkoopkosten?",
                  a: "Ongeveer 2-3% van de verkoopprijs gaat naar makelaarsprovisie, overdrachtsbelasting en notariskosten. Dit moet u meepakken in uw berekening."
                },
                {
                  q: "Kan ik tijdens het doorstromen beide huizen bezitten?",
                  a: "Ja, maar beide huizen tel je mee bij je schuldenlast. De bank zal hier kritisch naar kijken. Probeer de timing zo goed mogelijk af te stemmen."
                },
                {
                  q: "Wat als mijn nieuwe huis minder waard is?",
                  a: "Dan kunt u de overwaarde gebruiken om toch nog een degelijke hypotheek af te sluiten. Soms is het beter om kleiner of goedkoper te kopen en spaargeld op te bouwen."
                },
                {
                  q: "Hoe snel kan het doorstroomproces gaan?",
                  a: "Idealiter 6-8 weken als alles soepel loopt. Met twee transacties kan het wat langer duren. Wij regelen de timing."
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
            <h2 className="text-2xl font-bold">Klaar Voor Het Volgende Avontuur?</h2>
            <p className="text-muted-foreground">
              Laat ons u helpen met een persoonlijk doorstroomplan. Wij zorgen dat u optimaal van uw overwaarde gebruikmaakt.
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-cta-volgend-huis">
                Vraag Advies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
