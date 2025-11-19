import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl" data-testid="text-page-title">
            Contact
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-page-subtitle">
            Neem vrijblijvend contact met ons op
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Stuur ons een bericht</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contactgegevens</h2>
                
                <div className="space-y-4">
                  <Card>
                    <CardHeader className="pb-3 gap-1">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Telefoon</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">+31 20 123 4567</p>
                      <p className="text-xs text-muted-foreground mt-1">Ma-Vr: 09:00 - 17:00</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3 gap-1">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">E-mail</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">info@financieeladvies.nl</p>
                      <p className="text-xs text-muted-foreground mt-1">We reageren binnen 24 uur</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3 gap-1">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Adres</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Hoofdstraat 123<br />
                        1234 AB Amsterdam<br />
                        Nederland
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3 gap-1">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">Openingstijden</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Maandag - Vrijdag: 09:00 - 17:00</p>
                        <p>Zaterdag: Op afspraak</p>
                        <p>Zondag: Gesloten</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Locatie</h3>
                <div className="aspect-video w-full overflow-hidden rounded-lg border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.9264073654!2d4.895168!3d52.370216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3db87e6bb%3A0xb3a175ceffbd0a9f!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps locatie"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
