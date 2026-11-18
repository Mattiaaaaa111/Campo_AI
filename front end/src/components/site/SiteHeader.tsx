import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ExternalLink } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        {/* Utility bar */}
        <div className="hidden items-center justify-between border-b border-border py-2 text-xs text-muted-foreground lg:flex">
          <div className="flex gap-8">
            <Link to="/come-funziona" className="hover:text-primary">Come iniziare</Link>
            <Link to="/come-funziona" hash="faq" className="hover:text-primary">Domande frequenti</Link>
            <Link to="/pianificazione" className="hover:text-primary">Calendario stagionale</Link>
          </div>
          <span>Disponibile su ChatGPT · In italiano</span>
        </div>

        {/* Main bar */}
        <div className="flex h-18 items-center justify-between gap-6 py-4">
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principale">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[15px] font-semibold text-foreground/80 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="lg:hidden">
            <Logo />
          </div>

          <div className="flex items-center gap-6">
            <Button asChild variant="brand" size="lg" className="hidden md:inline-flex">
              <a href={SITE.chatgptUrl} target="_blank" rel="noreferrer">
                Apri in ChatGPT <ExternalLink />
              </a>
            </Button>
            <div className="hidden lg:block">
              <Logo />
            </div>
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Apri menu">
                  <Menu className="!size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <nav className="mt-10 flex flex-col gap-1">
                  {NAV.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="border-b border-border py-4 font-display text-2xl font-bold text-foreground hover:text-primary"
                      activeProps={{ className: "text-primary" }}
                      activeOptions={{ exact: true }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild variant="brand" size="xl" className="mt-8 w-full">
                  <a href={SITE.chatgptUrl} target="_blank" rel="noreferrer">
                    Apri in ChatGPT <ExternalLink />
                  </a>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
