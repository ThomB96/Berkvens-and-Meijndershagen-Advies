import ServiceSlider, { type ServiceCard } from "@/components/ServiceSlider";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import firstHomeImage from "@assets/generated_images/First_home_buyers_celebration_6717e5d7.png";
import nextHomeImage from "@assets/generated_images/Family_upgrading_to_bigger_home_7743af46.png";
import renovationImage from "@assets/generated_images/Home_renovation_inspiration_08181638.png";
import financialPlanImage from "@assets/generated_images/Financial_planning_concept_aafca629.png";
import handshakeImage from "@assets/generated_images/Professional_business_handshake_f5099191.png";
import consultationImage from "@assets/generated_images/Financial_advisor_consultation_b625ef50.png";

const hypotheekCards: ServiceCard[] = [
  {
    title: "Eerste huis kopen",
    description: "Maak uw droom waar met de juiste hypotheek voor uw eerste eigen huis.",
    image: firstHomeImage,
  },
  {
    title: "Volgend huis kopen",
    description: "Doorgroeien naar een grotere woning met optimale financiering.",
    image: nextHomeImage,
  },
  {
    title: "Verbouwen",
    description: "Realiseer uw verbouwplannen met een passende hypotheek.",
    image: renovationImage,
  },
  {
    title: "Overwaarde opnemen",
    description: "Benut de overwaarde van uw woning voor andere doeleinden.",
    image: financialPlanImage,
  },
  {
    title: "Oversluiten",
    description: "Profiteer van lagere rentetarieven door over te sluiten.",
    image: handshakeImage,
  },
  {
    title: "Hypotheekscan",
    description: "Laat uw huidige hypotheek scannen op verbetermogelijkheden.",
    image: consultationImage,
  },
];

export default function HypotheekadviesPage() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="relative h-[45vh] min-h-[350px] w-full overflow-hidden bg-primary/5">
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl" data-testid="text-page-title">
            Hypotheekadvies
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground" data-testid="text-page-subtitle">
            Van eerste huis tot oversluiten - wij begeleiden u bij elke stap van uw hypotheektraject
          </p>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 mb-8">
          <h2 className="text-center text-2xl font-semibold mb-2">Onze Hypotheekdiensten</h2>
          <p className="text-center text-muted-foreground">
            Klik op de pijlen om meer diensten te bekijken
          </p>
        </div>
        <ServiceSlider cards={hypotheekCards} />
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Voordelen van ons hypotheekadvies</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Onafhankelijk advies</h3>
                <p className="text-sm text-muted-foreground">
                  Wij werken met alle aanbieders en kiezen altijd de beste optie voor u
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Volledige begeleiding</h3>
                <p className="text-sm text-muted-foreground">
                  Van oriëntatie tot offerte en ondertekening - wij regelen alles voor u
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Scherpe voorwaarden</h3>
                <p className="text-sm text-muted-foreground">
                  Door onze kennis en ervaring onderhandelen wij de beste condities
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                  4
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Nazorg gegarandeerd</h3>
                <p className="text-sm text-muted-foreground">
                  Ook na het afsluiten blijven wij uw aanspreekpunt voor vragen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Vrijblijvend kennismaken?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Neem contact met ons op voor een persoonlijk adviesgesprek
          </p>
          <Link href="/contact">
            <a data-testid="link-cta-contact">
              <Button size="lg" className="text-lg px-8">
                Plan een Afspraak
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
