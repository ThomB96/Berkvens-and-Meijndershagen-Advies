import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ScheidenHypotheekPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <title>Scheiden en Hypotheek | Advies Bij Scheiding</title>
      <meta name="description" content="Scheiding en een hypotheek? Wij helpen u begrijpen wat er met uw huis gebeurt. Eerlijk, begripvol advies in moeilijke tijden." />

      <section className="bg-primary/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Scheiden en Hypotheek: Financiële Klariteit in Moeilijke Tijd</h1>
          <p className="text-lg text-muted-foreground">
            Scheiding is emotioneel moeilijk. Maar financieel en juridisch is het ook complex. Wij helpen u de hypotheekzaken helder in kaart brengen.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Scheiding brengt veel emoties mee. Daarnaast zijn er praktische zaken: wat gebeurt er met het huis? De hypotheek? Wij begrijpen dat dit gevoelig ligt. Ons doel is u rustig en duidelijk te helpen bij de financiële kant. U kunt ons bereiken zonder oordeel.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Wat Gebeurt Met de Hypotheek Bij Scheiding?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                De hypotheek is een juridisch document. Dit blijft bestaan, ongeacht wat u persoonlijk doet. U bent beiden aansprakelijk voor terugbetaling, tenzij dit juridisch anders wordt vastgesteld.
              </p>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Gezamenlijke Hypotheek</h3>
                    <p className="text-sm">
                      Beide partners zijn aansprakelijk. De bank kan beiden aanspreken voor het restantbedrag. Dit lost niet op met scheiding.
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">Oplossing 1: Hypotheek Overnemen</h3>
                    <p className="text-sm">
                      Één partner neemt de hele hypotheek over. De ander is niet meer aansprakelijk. Dit vereist dat de overnemer genoeg inkomen heeft en instemming van de bank.</p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">Oplossing 2: Huis Verkopen</h3>
                    <p className="text-sm">
                      Het huis wordt verkocht, schulden worden afbetaald, en de rest wordt gedeeld. Dit is schoon: geen toekomstige financiële banden meer.</p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">Oplossing 3: Één Partner Blijft</h3>
                    <p className="text-sm">
                      Één partner blijft in het huis, maar de hypotheek is voor beiden. Dit is riskant en vraagt voorzichtigheid. Meestal met rechtsterugkoop.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Huis Overnemen of Verkopen?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Dit is een grote beslissing. Beide opties hebben gevolgen.
              </p>

              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Huis Overnemen</h3>
                    <p className="text-sm mb-2">
                      U wilt graag in het huis blijven. Dit is emotioneel begrijpelijk, vooral als kinderen betrokken zijn.
                    </p>
                    <p className="text-sm"><span className="font-semibold">Voordelen:</span></p>
                    <ul className="text-sm list-disc list-inside space-y-1 mb-3">
                      <li>Kinderen blijven op vertrouwde plek</li>
                      <li>U behoudt uw thuis</li>
                    </ul>
                    <p className="text-sm"><span className="font-semibold">Nadelen:</span></p>
                    <ul className="text-sm list-disc list-inside space-y-1">
                      <li>U moet ex-partner uitkopen (duur!)</li>
                      <li>U moet hele hypotheek alleen kunnen dragen</li>
                      <li>U bent alleen aansprakelijk</li>
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-foreground mb-3">Huis Verkopen</h3>
                    <p className="text-sm mb-2">
                      Alles wordt schoon afgehandeld. Soms beter voor iedereen.
                    </p>
                    <p className="text-sm"><span className="font-semibold">Voordelen:</span></p>
                    <ul className="text-sm list-disc list-inside space-y-1 mb-3">
                      <li>Schone scheiding, geen toekomstige banden</li>
                      <li>Opbrengst wordt eerlijk gedeeld</li>
                      <li>Beide partners kunnen nieuw beginnen</li>
                    </ul>
                    <p className="text-sm"><span className="font-semibold">Nadelen:</span></p>
                    <ul className="text-sm list-disc list-inside space-y-1">
                      <li>Verkoopkosten (makelaar, belastingen)</li>
                      <li>Beide moeten verhuizen</li>
                      <li>Mogelijk gezin moet scholen wisselen</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Financiële Aandachtspunten</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Enkele zaken waarop u moet letten:
              </p>

              <Card>
                <CardContent className="pt-6 space-y-4 text-sm">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1. Waardering Huiswaarde</h3>
                    <p>
                      Beide partners moet het erover eens zijn wat het huis waard is. Dit bepaalt wie wie uitkoopt. Onafhankelijke taxatie is verstandig.
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">2. Inkomstentest</h3>
                    <p>
                      Kan u zonder uw ex-partner de hypotheek betalen? De bank zal dit onderzoeken. Realistisch blijven is belangrijk.
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">3. Schulden Verdelen</h3>
                    <p>
                      Hypotheek is niet de enige schuld. Zijn er andere leningen? Deze moeten ook verdeeld.
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">4. Juridische Begeleiding</h3>
                    <p>
                      Dit is financieel advies. U hebt ook juridische hulp nodig. Een advocaat helpt u rechten en plichten te regelen.
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
                  q: "Blijf ik aansprakelijk als mijn ex-partner in het huis blijft?",
                  a: "Ja, tenzij dit juridisch anders is geregeld. De bank beschouwt jullie nog als gezamenlijke schuldenaar. Vraag uw advocaat hoe dit veilig te regelen."
                },
                {
                  q: "Kan ik de hypotheek alleen overnemen?",
                  a: "Alleen als uw inkomen groot genoeg is. De bank zal dit beoordelen. Soms lukt het niet en moet het huis verkocht worden."
                },
                {
                  q: "Hoeveel moet ik mijn ex betalen voor zijn deel van het huis?",
                  a: "Dit hangt af van huiswaarde, restschuld hypotheek, en juridische overeenkomsten. Meestal: (huiswaarde – hypotheekschuld) / 2. Laat dit officieel berekenen."
                },
                {
                  q: "Hoe lang duurt dit allemaal?",
                  a: "Een scheiding duurt maanden. Hypotheekzaken kunnen parallel lopen. Realistische tijdlijn: 3-6 maanden met begeleiding van ons."
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
            <h2 className="text-2xl font-bold">Ondersteuning Nodig?</h2>
            <p className="text-muted-foreground">
              Wij begrijpen dat dit moeilijk is. Bel ons voor een discrete, vertrouwelijke bespreking. Geen oordeel, alleen hulp.
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-cta-scheiden">
                Neem Contact Op
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
