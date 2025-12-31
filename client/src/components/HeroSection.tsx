import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, ArrowRight, Home, TrendingUp } from "lucide-react";
import heroImage from "@assets/background-BMadvies_1767198525880.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Berkvens & Meijndershagen - Uw adviseurs"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/50" />
      </div>

      <div className="relative z-10 mx-auto flex h-full min-h-[80vh] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-white">
          <Home className="w-4 h-4" />
          Hypotheek & Financieel Advies
        </div>
        
        <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight" data-testid="text-hero-title">
          Wij maken van<br />cijfers kansen
        </h1>
        
        <p className="mb-8 text-xl text-white/90 max-w-2xl" data-testid="text-hero-subtitle">
          Berkvens & Meijndershagen Advies helpt u bij alle belangrijke financiële 
          beslissingen. Van uw eerste hypotheek tot een zorgeloos pensioen.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" data-testid="link-cta-contact-hero">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Gratis Kennismaken
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8"
            onClick={() => document.getElementById('diensten')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-scroll-diensten"
          >
            Onze diensten
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
