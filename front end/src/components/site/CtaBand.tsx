import { ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-gradient-brand relative isolate overflow-hidden">
      <div className="dot-pattern absolute inset-0 -z-10" />
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-end">
        <div>
          <p className="eyebrow text-brand-bright">Pronto per la prossima stagione?</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-extrabold leading-none text-on-image md:text-6xl">
            Porta la tua azienda agricola dentro ChatGPT.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="light" size="xl">
            <a href={SITE.chatgptUrl} target="_blank" rel="noreferrer">
              Apri {SITE.name} <ExternalLink />
            </a>
          </Button>
          <Button asChild variant="outlineLight" size="xl">
            <Link to="/come-funziona">Come funziona</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
