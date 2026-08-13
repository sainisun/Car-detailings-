/*
 * Style reminder: Midnight Gold Atelier — dark graphite surfaces, Sanwaliya Gold
 * accents, editorial automotive typography, asymmetric layout, purposeful motion.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import Services from "./pages/Services";
import Visit from "./pages/Visit";
import { SiteLayout } from "./components/SiteChrome";

function Router() {
  return (
    <Switch>
      <Route path="/">
        <SiteLayout><Home /></SiteLayout>
      </Route>
      <Route path="/services">
        <SiteLayout><Services /></SiteLayout>
      </Route>
      <Route path="/services/:slug">
        <SiteLayout><ServiceDetail /></SiteLayout>
      </Route>
      <Route path="/about">
        <SiteLayout><About /></SiteLayout>
      </Route>
      <Route path="/visit">
        <SiteLayout><Visit /></SiteLayout>
      </Route>
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
