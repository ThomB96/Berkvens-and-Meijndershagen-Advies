import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Homepage_hero_office_interior_b763b0e0.png";

export default function HeroSection() {
  return (
    <section className="relative h-[75vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional office interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl" data-testid="text-hero-title">
          Wij maken van cijfers kansen
        </h1>
        <p className="mb-8 text-lg text-white/90 sm:text-xl" data-testid="text-hero-subtitle">
          Berkvens & Meijndershagen advies - Professioneel hypotheek- en financieel advies op maat. Wij helpen u bij alle belangrijke financiële beslissingen.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link href="/hypotheekadvies" data-testid="link-cta-hypotheek">
            <Button
              size="lg"
              className="bg-primary/90 backdrop-blur-sm border border-primary-border hover:bg-primary text-lg px-8"
            >
              Hypotheekadvies
            </Button>
          </Link>
          <Link href="/financieel-advies" data-testid="link-cta-financieel">
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8"
            >
              Financieel Advies
            </Button>
          </Link>
          <Link href="/verzekeringsadvies" data-testid="link-cta-verzekeringen">
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8"
            >
              Verzekeringsadvies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
