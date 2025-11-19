import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Financieel Advies</h3>
            <p className="text-sm text-muted-foreground">
              Professioneel hypotheek- en financieel advies voor een zorgeloze toekomst.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hypotheekadvies">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-hypotheekadvies">
                    Hypotheekadvies
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/financieel-advies">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-financieel">
                    Financieel Advies
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/verzekeringsadvies">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-verzekeringen">
                    Verzekeringsadvies
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/over-ons">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-over-ons">
                    Over Ons
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-contact">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+31 20 123 4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info@financieeladvies.nl</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Hoofdstraat 123<br />
                  1234 AB Amsterdam
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Financieel Advies. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
