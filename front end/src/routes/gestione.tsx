import { createFileRoute } from "@tanstack/react-router";
import { Check, Sprout } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { MODULES, SITE } from "@/lib/site";
import fieldsAerial from "@/assets/fields-aerial.jpg";

export const Route = createFileRoute("/gestione")({
  head: () => ({
    meta: [
      { title: `Gestione aziendale agricola – ${SITE.name}` },
      {
        name: "description",
        content:
          "Aziende e terreni, colture, lavorazioni, macchinari, magazzino, costi e ricavi: tutti i moduli del gestionale agricolo AI.",
      },
      { property: "og:title", content: `Gestione aziendale agricola – ${SITE.name}` },
      {
        property: "og:description",
        content: "Sei moduli per gestire l'intera azienda agricola in un unico dataset, dentro ChatGPT.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GestionePage,
});

function GestionePage() {
  return (
    <>
      <PageHero
        image={fieldsAerial}
        eyebrow="Gestione dell'azienda agricola"
        title="Un unico dataset per tutta l'azienda."
        subtitle={`${SITE.name} organizza i dati aziendali in sei moduli collegati tra loro, consultabili e aggiornabili in linguaggio naturale.`}
      />

      {/* Sub navigation */}
      <nav className="sticky top-[73px] z-40 border-b border-border bg-background lg:top-[106px]" aria-label="Moduli">
        <div className="mx-auto flex max-w-7xl gap-8 overflow-x-auto px-6">
          {MODULES.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-semibold text-muted-foreground hover:border-primary hover:text-primary"
            >
              {m.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6">
        {MODULES.map((m, i) => (
          <section
            key={m.id}
            id={m.id}
            className="grid scroll-mt-40 items-center gap-12 border-b border-border py-20 last:border-b-0 lg:grid-cols-2 lg:scroll-mt-52"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground">
                  <m.icon className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <span className="font-display text-5xl font-extrabold text-primary/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-6 text-4xl font-extrabold leading-none md:text-5xl">{m.title}</h2>
              <p className="mt-4 max-w-lg text-lg text-muted-foreground">{m.description}</p>
              <ul className="mt-6 space-y-2">
                {m.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 font-medium">
                    <Check className="h-4 w-4 text-primary" /> {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="relative bg-secondary p-8 md:p-12">
                <span className="absolute left-0 top-0 h-full w-1 bg-primary" />
                <p className="eyebrow text-muted-foreground">Chiedi a {SITE.name}</p>
                <div className="mt-6 flex justify-end">
                  <p className="max-w-sm bg-background px-5 py-3 font-display text-xl font-semibold shadow-card md:text-2xl">
                    «{m.prompt}»
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3 text-primary">
                  <span className="flex h-8 w-8 items-center justify-center bg-primary text-primary-foreground">
                    <Sprout className="h-4 w-4" />
                  </span>
                  <span className="flex gap-1">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary [animation-delay:300ms]" />
                  </span>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
