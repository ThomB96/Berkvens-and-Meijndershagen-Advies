import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomePage from "@/pages/home";
import HypotheekadviesPage from "@/pages/hypotheekadvies";
import FinancieelAdviesPage from "@/pages/financieel-advies";
import VezekeringsadviesPage from "@/pages/verzekeringsadvies";
import OverOnsPage from "@/pages/over-ons";
import ContactPage from "@/pages/contact";
import EersteHuisKopenPage from "@/pages/eerste-huis-kopen";
import VolgendHuisKopenPage from "@/pages/volgend-huis-kopen";
import HypotheekOversluitenPage from "@/pages/hypotheek-oversluiten";
import VerbouwenPage from "@/pages/verbouwen-hypotheek";
import ScheidenPage from "@/pages/scheiden-hypotheek";
import OndernémersPage from "@/pages/hypotheek-ondernemers";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/hypotheekadvies" component={HypotheekadviesPage} />
      <Route path="/hypotheekadvies/eerste-huis-kopen" component={EersteHuisKopenPage} />
      <Route path="/hypotheekadvies/volgend-huis-kopen" component={VolgendHuisKopenPage} />
      <Route path="/hypotheekadvies/hypotheek-oversluiten" component={HypotheekOversluitenPage} />
      <Route path="/hypotheekadvies/verbouwen" component={VerbouwenPage} />
      <Route path="/hypotheekadvies/scheiden" component={ScheidenPage} />
      <Route path="/hypotheekadvies/ondernemers" component={OndernémersPage} />
      <Route path="/financieel-advies" component={FinancieelAdviesPage} />
      <Route path="/verzekeringsadvies" component={VezekeringsadviesPage} />
      <Route path="/over-ons" component={OverOnsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
