import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageSquareText, Database, Lightbulb } from "lucide-react";
import { HeroSlider } from "@/components/site/HeroSlider";
import { ChatMockup } from "@/components/site/ChatMockup";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/button";
import { MODULES, PLANNING, SITE } from "@/lib/site";
import fieldsAerial from "@/assets/fields-aerial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} – Gestionale agricolo con intelligenza artificiale su ChatGPT` },
      {
        name: "description",
        content:
          "Gestisci terreni, colture, lavorazioni, macchinari, magazzino e costi della tua azienda agricola parlando con ChatGPT.",
      },
      { property: "og:title", content: `${SITE.name} – Il gestionale agricolo AI su ChatGPT` },
      {
        property: "og:description",
        content: "Raccogli dati, organizza le lavorazioni e prendi decisioni migliori con l'AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PILLARS = [
  { icon: Database, title: "Raccoglie i dati", text: "Terreni, colture, mezzi, scorte e conti in un unico dataset aziendale." },
  { icon: MessageSquareText, title: "Organizza le attività", text: "Pianifica e registra le lavorazioni scrivendo come parleresti a un collaboratore." },
  { icon: Lightbulb, title: "Supporta le decisioni", text: "Ti segnala cosa manca, cosa costa di più e cosa conviene fare dopo." },
];

function Index() {
  return (
    <>
      <HeroSlider />

      {/* Intro */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="eyebrow text-primary">Un gestionale che ti ascolta</p>
          <h2 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[0.95] text-primary md:text-7xl">
            Meno fogli di calcolo. Più tempo in campo.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {SITE.name} è un GPT pubblicato su ChatGPT che funziona come un gestionale aziendale agricolo
            assistito dall'intelligenza artificiale: capace di raccogliere dati, organizzare le attività e
            supportare le decisioni operative.
          </p>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="bg-background p-8">
                <p.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <h3 className="mt-6 text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-primary">Gestione dell'azienda agricola</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-none md:text-6xl">
              Sei moduli, un'unica azienda.
            </h2>
          </div>
          <Button asChild variant="outlineBrand" size="xl">
            <Link to="/gestione">Tutti i moduli</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m) => (
            <Link
              key={m.id}
              to="/gestione"
              hash={m.id}
              className="group relative flex flex-col border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-card"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform group-hover:scale-x-100" />
              <m.icon className="h-10 w-10 text-primary" strokeWidth={1.4} />
              <h3 className="mt-8 text-3xl font-bold">{m.title}</h3>
              <p className="mt-2 flex-1 text-muted-foreground">{m.short}</p>
              <span className="eyebrow mt-8 flex items-center gap-2 text-primary">
                Scopri <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Chat demo */}
      <section className="relative isolate overflow-hidden bg-brand-deep">
        <img
          src={fieldsAerial}
          alt=""
          loading="lazy"
          width={1600}
          height={1008}
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
        />
        <div className="bg-image-side absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-brand-bright">Parla, registra, decidi</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-none text-on-image md:text-6xl">
              Il tuo consulente aziendale, sempre in tasca.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-on-image-muted">
              Chiedi a {SITE.name} cosa fare oggi, registra una lavorazione appena finita o verifica le scorte
              di magazzino. Risponde con dati della tua azienda, non con risposte generiche.
            </p>
            <ul className="mt-8 space-y-3 text-on-image">
              {["«Registra la semina del mais sul Campo Nord»", "«Quanto gasolio abbiamo consumato a ottobre?»", "«Quali lavorazioni sono in ritardo?»"].map((q) => (
                <li key={q} className="flex items-center gap-3 font-display text-xl">
                  <span className="h-px w-8 bg-brand-bright" /> {q}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <ChatMockup />
          </div>
        </div>
      </section>

      {/* Planning teaser */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="eyebrow text-primary">Pianificazione delle lavorazioni</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-none text-primary md:text-6xl">
                La stagione, in ordine.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Una delle funzioni principali di {SITE.name}: organizzare le attività agricole dalla semina alla
                raccolta.
              </p>
              <Button asChild variant="brand" size="xl" className="mt-8">
                <Link to="/pianificazione">
                  Scopri la pianificazione <ArrowRight />
                </Link>
              </Button>
            </div>
            <ol className="divide-y divide-border border-y border-border">
              {PLANNING.map((p, i) => (
                <li key={p.title} className="grid grid-cols-[4rem_1fr] gap-4 py-6">
                  <span className="font-display text-4xl font-extrabold text-primary/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold">{p.title}</h3>
                    <p className="mt-1 text-muted-foreground">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
