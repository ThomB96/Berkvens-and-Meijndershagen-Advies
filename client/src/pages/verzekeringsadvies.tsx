import ServiceSlider, { type ServiceCard } from "@/components/ServiceSlider";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import protectionImage from "@assets/generated_images/Family_protection_and_security_c6a64d29.png";
import consultationImage from "@assets/generated_images/Financial_advisor_consultation_b625ef50.png";
import insuranceImage from "@assets/generated_images/Insurance_consultation_professional_92b23f35.png";
import handshakeImage from "@assets/generated_images/Professional_business_handshake_f5099191.png";
import transitionImage from "@assets/generated_images/Life_transition_moment_ea3e01f6.png";
import celebrationImage from "@assets/generated_images/Family_celebration_moment_32172724.png";

const verzekeringsCards: ServiceCard[] = [
  {
    title: "Overlijdensrisicoverzekering",
    description: "Zorg voor financiële zekerheid van uw nabestaanden bij overlijden.",
    image: protectionImage,
  },
  {
    title: "Arbeidsongeschiktheidsverzekering",
    description: "Behoud uw inkomen bij ziekte of arbeidsongeschiktheid.",
    image: consultationImage,
  },
  {
    title: "Inkomensverzekering",
    description: "Bescherm uw inkomen tegen onverwachte omstandigheden.",
    image: insuranceImage,
  },
  {
    title: "Zorgverzekering",
    description: "Vind de beste zorgverzekering die past bij uw situatie.",
    image: handshakeImage,
  },
  {
    title: "Woonhuisverzekering",
    description: "Bescherm uw woning tegen schade en inbraak.",
    image: transitionImage,
  },
  {
    title: "Aansprakelijkheidsverzekering",
    description: "Voorkom financiële problemen door aansprakelijkheidsclaims.",
    image: celebrationImage,
  },
];

export default function VerzkeringsadviesPage() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="relative h-[45vh] min-h-[350px] w-full overflow-hidden bg-blue-600/10">
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl" data-testid="text-page-title">
            Verzekeringsadvies
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground" data-testid="text-page-subtitle">
            Optimale bescherming voor u en uw gezin met onafhankelijk verzekeringsadvies
          </p>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 mb-8">
          <h2 className="text-center text-2xl font-semibold mb-2">Onze Verzekeringsdiensten</h2>
          <p className="text-center text-muted-foreground">
            De slider wisselt automatisch tussen de verschillende diensten
          </p>
        </div>
        <ServiceSlider cards={verzekeringsCards} />
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Waarom verzekeringsadvies?</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 text-blue-700 font-semibold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Onafhankelijk vergelijken</h3>
                <p className="text-sm text-muted-foreground">
                  Wij vergelijken alle aanbieders en vinden de beste dekking tegen de laagste premie
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 text-blue-700 font-semibold">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Persoonlijk advies</h3>
                <p className="text-sm text-muted-foreground">
                  Uw situatie is uniek, daarom krijgt u advies dat perfect aansluit bij uw behoeften
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 text-blue-700 font-semibold">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Geen onderverzekering</h3>
                <p className="text-sm text-muted-foreground">
                  Wij zorgen ervoor dat u optimaal verzekerd bent zonder te veel te betalen
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 text-blue-700 font-semibold">
                  4
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Regelmatige controle</h3>
                <p className="text-sm text-muted-foreground">
                  We controleren jaarlijks of uw verzekeringen nog steeds passend zijn
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Goed verzekerd, goed voorbereid</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Laat uw huidige verzekeringen controleren of vraag advies voor nieuwe verzekeringen
          </p>
          <Link href="/contact">
            <a data-testid="link-cta-contact">
              <Button size="lg" className="text-lg px-8">
                Vraag Advies Aan
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
