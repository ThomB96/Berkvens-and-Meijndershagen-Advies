import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/hypotheekadvies", label: "Hypotheekadvies" },
    { href: "/financieel-advies", label: "Financieel Advies" },
    { href: "/verzekeringsadvies", label: "Verzekeringsadvies" },
    { href: "/over-ons", label: "Over Ons" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <a className="flex items-center gap-2 text-xl font-semibold text-primary hover-elevate rounded-md px-3 py-2" data-testid="link-home-logo">
            <span className="text-2xl">🏠</span>
            <span className="hidden sm:inline">Financieel Advies</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <Button
                  variant={location === link.href ? "secondary" : "ghost"}
                  className="text-sm"
                >
                  {link.label}
                </Button>
              </a>
            </Link>
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
                <Link key={link.href} href={link.href}>
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <Button
                      variant={location === link.href ? "secondary" : "ghost"}
                      className="w-full justify-start"
                    >
                      {link.label}
                    </Button>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
