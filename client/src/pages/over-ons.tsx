import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Target, Heart, Award } from "lucide-react";
import maleAdvisorImage from "@assets/generated_images/Male_advisor_professional_portrait_9b0ead0d.png";
import femaleAdvisorImage from "@assets/generated_images/Female_advisor_professional_portrait_db799d64.png";

export default function OverOnsPage() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl" data-testid="text-page-title">
            Over Ons
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-page-subtitle">
            Persoonlijk advies met jarenlange ervaring
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Wie zijn wij?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-center mb-6">
              Met meer dan 15 jaar ervaring in de financiële sector, helpen wij particulieren 
              bij het maken van de juiste keuzes voor hun financiële toekomst. Of het nu gaat 
              om het kopen van een huis, het opbouwen van pensioen, of het optimaliseren van 
              uw vermogen - wij staan voor u klaar.
            </p>
            <p className="text-muted-foreground text-center">
              Ons team bestaat uit gediplomeerde adviseurs die up-to-date blijven met de 
              laatste ontwikkelingen in de markt. We werken onafhankelijk en kiezen altijd 
              voor de oplossing die het beste bij uw situatie past.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Ons Team</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* Advisor 1 */}
            <Card className="overflow-hidden" data-testid="card-advisor-1">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-32 w-32 mb-4">
                    <AvatarImage src={maleAdvisorImage} alt="Jan de Vries" />
                    <AvatarFallback>JV</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-1">Jan de Vries</h3>
                  <p className="text-sm text-muted-foreground mb-4">Senior Hypotheekadviseur</p>
                  <p className="text-sm text-muted-foreground">
                    Jan heeft meer dan 20 jaar ervaring in hypotheekadvies en begeleidt 
                    klanten van oriëntatie tot offerte. Met zijn uitgebreide kennis van 
                    de woningmarkt vindt hij altijd de beste oplossing voor uw situatie.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Advisor 2 */}
            <Card className="overflow-hidden" data-testid="card-advisor-2">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-32 w-32 mb-4">
                    <AvatarImage src={femaleAdvisorImage} alt="Lisa van Dijk" />
                    <AvatarFallback>LV</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-1">Lisa van Dijk</h3>
                  <p className="text-sm text-muted-foreground mb-4">Financieel Adviseur</p>
                  <p className="text-sm text-muted-foreground">
                    Lisa is gespecialiseerd in pensioenplanning en vermogensopbouw. 
                    Ze helpt klanten bij het maken van slimme financiële keuzes voor 
                    de lange termijn en zorgt ervoor dat u goed voorbereid bent op uw toekomst.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Onze Werkwijze</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Missie</h3>
              <p className="text-sm text-muted-foreground">
                Iedereen toegang geven tot professioneel en onafhankelijk financieel 
                advies, zodat zij weloverwogen beslissingen kunnen nemen voor hun toekomst.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Visie</h3>
              <p className="text-sm text-muted-foreground">
                Een toekomst waarin financiële zekerheid toegankelijk is voor iedereen, 
                met persoonlijk advies dat echt het verschil maakt in uw leven.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Waarden</h3>
              <p className="text-sm text-muted-foreground">
                Betrouwbaarheid, transparantie en persoonlijke aandacht staan centraal 
                in alles wat wij doen. Uw belang komt altijd op de eerste plaats.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
