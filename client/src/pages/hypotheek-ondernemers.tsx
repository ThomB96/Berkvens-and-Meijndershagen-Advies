import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function HypotheekOndernémersPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <title>Hypotheek Voor Ondernemers & ZZP | Advies Zelfstandigen</title>
      <meta name="description" content="Als ZZP'er of ondernemer een hypotheek krijgen? Wij kennen de eisen van banken. Maatwerkadvies voor ondernemers. Vraag advies aan!" />

      <section className="bg-primary/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Hypotheek Voor Ondernemers: Duidelijkheid Voor ZZP'ers en BV's</h1>
          <p className="text-lg text-muted-foreground">
            Als ondernemer een hypotheek krijgen vergt extra voorbereiding. Wij kennen wat banken van u verwachten en helpen u goed voor den dag te komen.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ondernemerschap is fantastisch, maar voor banken is het risicovol. U hebt geen vast maandelijks salaris als werknemer. Dit maakt het lastiger om een hypotheek af te sluiten. Toch is het zeker niet onmogelijk. Veel ondernemers en ZZP'ers hebben hypotheken. Het vergt alleen voorbereiding en goede begeleiding.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Kun Je Als Ondernemer Een Hypotheek Krijgen?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Ja, absoluut. Maar banken zijn kritischer. Zij willen zekerheid dat u uw hypotheek kunt betalen, ook als uw bedrijf minder draait. Dit onderzoeken zij door naar uw financiële historie te kijken.
              </p>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Voordelen als Ondernemer</h3>
                    <ul className="text-sm list-disc list-inside space-y-1">
                      <li>U bent vaak financieel stabiel en verdient goed</li>
                      <li>U hebt vaak eigen vermogen gespaard</li>
                      <li>U bent gemotiveerd: het gaat om uw bedrijf</li>
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">Wat Banken Willen Zien</h3>
                    <ul className="text-sm list-disc list-inside space-y-1">
                      <li>Consistent inkomen over 2-3 jaar</li>
                      <li>Goede boekhouding en belastingaanslagen</li>
                      <li>Gezonde buffers in uw bedrijf</li>
                      <li>Laag persoonlijk schuldenquotum</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Wat Vragen Banken Van Ondernemers?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Banken voeren diepere onderzoeken uit voor ondernemers. Hierop moet u voorbereid zijn.
              </p>

              <Card>
                <CardContent className="pt-6 space-y-4 text-sm">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1. Belastingaanslagen (3 Jaar)</h3>
                    <p>
                      De bank wil zien hoe uw inkomen zich ontwikkeld heeft. Groei is goed, maar stabiliteit ook.
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">2. Jaarrekeningen en Boekhouding</h3>
                    <p>
                      Zorg voor schone, nette administratie. Een slordig boekhouding is een rood vlaggetje.
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">3. Omschrijving van Uw Bedrijf</h3>
                    <p>
                      Waar werkt u? Wat is uw bedrijfsmodel? Banken willen zekerheid dat uw sector stabiel is.
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">4. Persoonlijke Schulden</h3>
                    <p>
                      Auto's, creditcards, persoonlijke leningen? Dit maakt uw schuldenquotum groter. Af zien van schulden helpt.
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">5. Bedrijfsoplossing (ZZP vs. BV)</h3>
                    <p>
                      Bent u ZZP of hebt u een BV? Dit maakt verschil. Een BV biedt meer bescherming, maar een ZZP is soms voordelig.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Onze Aanpak Voor Ondernemers</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Wij hebben veel ervaring met zelfstandigen. Onze aanpak is:
              </p>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1. Voorbereiding</h3>
                    <p className="text-sm">
                      We kijken samen naar uw administratie. Welke ondernemersvoordelen kunt u gebruiken? Waar zijn sterke punten?
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">2. Juiste Bank Selectie</h3>
                    <p className="text-sm">
                      Niet alle banken geven makkelijk hypotheken aan ondernemers. Wij weten wie wel openstaat.
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">3. Sterke Aanvraag</h3>
                    <p className="text-sm">
                      We helpen u alles juist aan te dragen. Getallen, toelichting, dossier – alles klopt.
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-foreground mb-2">4. Onderhandelingen</h3>
                    <p className="text-sm">
                      Wij onderhandelen voor u. Banken luisteren meer naar adviseurs. Wij krijgen betere tarieven.
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
                  q: "Is het lastiger om als ZZP'er een hypotheek te krijgen?",
                  a: "Ja, iets moeilijker dan als werknemer met vast salaris. Maar zeker haalbaar. Veel ZZP'ers hebben hypotheken. De sleutel: stabiel inkomen over 2-3 jaar."
                },
                {
                  q: "Hoeveel kan ik lenen met inkomsten uit mijn bedrijf?",
                  a: "Banken hanteren dezelfde formule: ongeveer 4-5 keer uw gemiddeld netto-inkomen van de afgelopen 2-3 jaar. Wij berekenen dit voor u."
                },
                {
                  q: "Wat als mijn inkomsten sterk schommelen?",
                  a: "Banken kijken naar gemiddelde inkomsten. Als u veel verdient in boom maar minder in crisis, nemen ze het gemiddelde. Transparantie helpt."
                },
                {
                  q: "Moet ik extra documenten als ondernemer aanleveren?",
                  a: "Ja: belastingaanslagen (3 jaar), jaarrekeningen, en mogelijk een bedrijfsbeschrijving. Zorg dat alles netjes is."
                },
                {
                  q: "Wat is beter: ZZP of BV voor hypotheek?",
                  a: "Voor hypotheek: beide zijn mogelijk. BV kan voordelen hebben (minder belastingdruk) maar ZZP is soms eenvoudiger. Dit hangt af van uw situatie. Wij adviseren!"
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
            <h2 className="text-2xl font-bold">Klaar Voor Uw Ondernemershypotheek?</h2>
            <p className="text-muted-foreground">
              Wij hebben veel ervaring met zelfstandigen. Laat ons u helpen een sterke aanvraag in te dienen bij de juiste bank.
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-cta-ondernemers">
                Vraag Ondernemersadvies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
