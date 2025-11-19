import ServiceSlider, { type ServiceCard } from "@/components/ServiceSlider";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import pensionImage from "@assets/generated_images/Happy_retired_couple_3f286504.png";
import earlyRetirementImage from "@assets/generated_images/Early_retirement_lifestyle_b083e5da.png";
import savingsImage from "@assets/generated_images/Savings_and_growth_concept_7c6691ba.png";
import celebrationImage from "@assets/generated_images/Family_celebration_moment_32172724.png";
import transitionImage from "@assets/generated_images/Life_transition_moment_ea3e01f6.png";
import protectionImage from "@assets/generated_images/Family_protection_and_security_c6a64d29.png";

const financialCards: ServiceCard[] = [
  {
    title: "Aanvullend pensioen opbouwen",
    description: "Zorg voor een comfortabele oude dag met slimme pensioenopbouw.",
    image: pensionImage,
  },
  {
    title: "Eerder stoppen met werken",
    description: "Realiseer uw droom om eerder van uw pensioen te genieten.",
    image: earlyRetirementImage,
  },
  {
    title: "Sparen voor later",
    description: "Bouw vermogen op voor toekomstige doelen en zekerheid.",
    image: savingsImage,
  },
  {
    title: "Mee- of tegenvaller",
    description: "Benut financiële meevallers optimaal of vang tegenvallers op.",
    image: celebrationImage,
  },
  {
    title: "Wijzigingen in mijn situatie",
    description: "Pas uw financiële planning aan bij levensveranderingen.",
    image: transitionImage,
  },
  {
    title: "Overlijden",
    description: "Zorg voor financiële zekerheid van uw nabestaanden.",
    image: protectionImage,
  },
];

export default function FinancieelAdviesPage() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="relative h-[45vh] min-h-[350px] w-full overflow-hidden bg-accent/10">
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl" data-testid="text-page-title">
            Financieel Advies
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground" data-testid="text-page-subtitle">
            Plan uw financiële toekomst met deskundig advies over pensioen, vermogensopbouw en financiële zekerheid
          </p>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 mb-8">
          <h2 className="text-center text-2xl font-semibold mb-2">Onze Financiële Diensten</h2>
          <p className="text-center text-muted-foreground">
            Klik op de pijlen om meer diensten te bekijken
          </p>
        </div>
        <ServiceSlider cards={financialCards} />
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Waarom financieel advies?</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/30 text-accent-foreground font-semibold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Totaalbeeld van uw financiën</h3>
                <p className="text-sm text-muted-foreground">
                  Wij brengen uw complete financiële situatie in kaart voor betere beslissingen
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/30 text-accent-foreground font-semibold">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Optimale pensioenopbouw</h3>
                <p className="text-sm text-muted-foreground">
                  Plan uw pensioen zo dat u kunt genieten van de oude dag zonder zorgen
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/30 text-accent-foreground font-semibold">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Bescherming van uw gezin</h3>
                <p className="text-sm text-muted-foreground">
                  Zorg ervoor dat uw naasten financieel verzorgd zijn in alle omstandigheden
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/30 text-accent-foreground font-semibold">
                  4
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Flexibel inspelen op verandering</h3>
                <p className="text-sm text-muted-foreground">
                  Uw financiële plan past zich aan bij grote levensveranderingen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Start met uw financiële planning</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Maak een afspraak voor een vrijblijvend gesprek over uw financiële toekomst
          </p>
          <Link href="/contact">
            <a data-testid="link-cta-contact">
              <Button size="lg" className="text-lg px-8">
                Maak een Afspraak
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
