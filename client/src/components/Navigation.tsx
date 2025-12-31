import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hypotheekSubmenuOpen, setHypotheekSubmenuOpen] = useState(false);
  const [financieelSubmenuOpen, setFinancieelSubmenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/hypotheekadvies", label: "Hypotheekadvies", submenuType: "hypotheek" },
    { href: "/financieel-advies", label: "Financieel Advies", submenuType: "financieel" },
    { href: "/verzekeringsadvies", label: "Verzekeringsadvies" },
    { href: "/over-ons", label: "Over Ons" },
    { href: "/contact", label: "Contact" },
  ];

  const hypotheekSubLinks = [
    { href: "/hypotheekadvies/eerste-huis-kopen", label: "Eerste huis kopen" },
    { href: "/hypotheekadvies/volgend-huis-kopen", label: "Volgend huis kopen" },
    { href: "/hypotheekadvies/hypotheek-oversluiten", label: "Hypotheek oversluiten" },
    { href: "/hypotheekadvies/verbouwen", label: "Verbouwen & hypotheek" },
    { href: "/hypotheekadvies/scheiden", label: "Scheiden & hypotheek" },
    { href: "/hypotheekadvies/ondernemers", label: "Hypotheek voor ondernemers" },
  ];

  const financieelSubLinks = [
    { href: "/financieel-advies/aanvullend-pensioen", label: "Aanvullend pensioen" },
    { href: "/financieel-advies/eerder-stoppen", label: "Eerder stoppen met werken" },
    { href: "/financieel-advies/sparen-voor-later", label: "Sparen voor later" },
    { href: "/financieel-advies/mee-tegenvaller", label: "Mee- of tegenvaller" },
    { href: "/financieel-advies/wijzigingen-situatie", label: "Wijzigingen in situatie" },
    { href: "/financieel-advies/overlijden", label: "Overlijden" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary hover-elevate rounded-md px-3 py-2" data-testid="link-home-logo">
          <span className="text-2xl">🏠</span>
          <span className="hidden sm:inline">Berkvens & Meijndershagen</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative group"
              onMouseEnter={() => {
                if (link.submenuType === "hypotheek") setHypotheekSubmenuOpen(true);
                if (link.submenuType === "financieel") setFinancieelSubmenuOpen(true);
              }}
              onMouseLeave={() => {
                if (link.submenuType === "hypotheek") setHypotheekSubmenuOpen(false);
                if (link.submenuType === "financieel") setFinancieelSubmenuOpen(false);
              }}
            >
              <Link href={link.href} data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <Button
                  variant={location === link.href ? "secondary" : "ghost"}
                  className="text-sm flex items-center gap-1"
                >
                  {link.label}
                  {link.submenuType && <ChevronDown className="w-4 h-4" />}
                </Button>
              </Link>

              {/* Submenu for Hypotheekadvies */}
              {link.submenuType === "hypotheek" && hypotheekSubmenuOpen && (
                <div className="absolute left-0 top-full mt-0 w-56 bg-background border border-input rounded-md shadow-lg z-50 py-2">
                  {hypotheekSubLinks.map((sublink) => (
                    <Link
                      key={sublink.href}
                      href={sublink.href}
                      data-testid={`link-nav-submenu-${sublink.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start px-4 py-2 h-auto text-sm rounded-none hover:bg-accent/50"
                      >
                        {sublink.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              )}

              {/* Submenu for Financieel Advies */}
              {link.submenuType === "financieel" && financieelSubmenuOpen && (
                <div className="absolute left-0 top-full mt-0 w-56 bg-background border border-input rounded-md shadow-lg z-50 py-2">
                  {financieelSubLinks.map((sublink) => (
                    <Link
                      key={sublink.href}
                      href={sublink.href}
                      data-testid={`link-nav-submenu-${sublink.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start px-4 py-2 h-auto text-sm rounded-none hover:bg-accent/50"
                      >
                        {sublink.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-16 border-b bg-background md:hidden">
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <div key={link.href} className="flex flex-col">
                  <Link 
                    href={link.href}
                    onClick={() => !link.submenuType && setMobileMenuOpen(false)}
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <Button
                      variant={location === link.href ? "secondary" : "ghost"}
                      className="w-full justify-start"
                    >
                      {link.label}
                    </Button>
                  </Link>
                  
                  {/* Mobile Submenu for Hypotheekadvies */}
                  {link.submenuType === "hypotheek" && (
                    <div className="ml-4 flex flex-col gap-1 mt-1">
                      {hypotheekSubLinks.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          onClick={() => setMobileMenuOpen(false)}
                          data-testid={`link-mobile-submenu-${sublink.label.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-sm py-1"
                          >
                            {sublink.label}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Mobile Submenu for Financieel Advies */}
                  {link.submenuType === "financieel" && (
                    <div className="ml-4 flex flex-col gap-1 mt-1">
                      {financieelSubLinks.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          onClick={() => setMobileMenuOpen(false)}
                          data-testid={`link-mobile-submenu-${sublink.label.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-sm py-1"
                          >
                            {sublink.label}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
