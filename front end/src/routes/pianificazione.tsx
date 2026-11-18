import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Circle, Tractor, Users, Package } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { PLANNING, SITE } from "@/lib/site";
import farmerPhone from "@/assets/farmer-phone.jpg";

export const Route = createFileRoute("/pianificazione")({
  head: () => ({
    meta: [
      { title: `Pianificazione delle lavorazioni agricole – ${SITE.name}` },
      {
        name: "description",
        content:
          "Identifica le lavorazioni per coltura, organizza la stagione, traccia le operazioni completate ed evidenzia quelle da eseguire.",
      },
      { property: "og:title", content: `Pianificazione delle lavorazioni – ${SITE.name}` },
      {
        property: "og:description",
        content: "La stagione agricola organizzata con l'AI: cosa è fatto, cosa manca, con quali risorse.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PianificazionePage,
});

const MONTHS = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];

type Bar = { label: string; start: number; end: number; done?: boolean };
const SEASON: { crop: string; bars: Bar[] }[] = [
  {
    crop: "Frumento tenero",
    bars: [
      { label: "Concimazione", start: 1, end: 3, done: true },
      { label: "Diserbo", start: 3, end: 4, done: true },
      { label: "Raccolta", start: 6, end: 7 },
      { label: "Semina", start: 10, end: 11 },
    ],
  },
  {
    crop: "Mais",
    bars: [
      { label: "Aratura", start: 2, end: 3, done: true },
      { label: "Semina", start: 3, end: 5 },
      { label: "Irrigazione", start: 6, end: 8 },
      { label: "Raccolta", start: 8, end: 10 },
    ],
  },
  {
    crop: "Soia",
    bars: [
      { label: "Erpicatura", start: 3, end: 4, done: true },
      { label: "Semina", start: 4, end: 5 },
      { label: "Trattamento", start: 6, end: 7 },
      { label: "Raccolta", start: 9, end: 10 },
    ],
  },
  {
    crop: "Girasole",
    bars: [
      { label: "Preparazione", start: 2, end: 4 },
      { label: "Semina", start: 4, end: 5 },
      { label: "Raccolta", start: 8, end: 9 },
    ],
  },
];

const DONE = [
  { task: "Aratura · Mais", where: "Campo Nord · 12,5 ha", date: "04 mar" },
  { task: "Concimazione · Frumento", where: "Vigna Vecchia · 8,0 ha", date: "11 mar" },
  { task: "Erpicatura · Soia", where: "Podere Sud · 6,3 ha", date: "02 apr" },
];
const TODO = [
  { task: "Semina · Mais", where: "Campo Nord · 12,5 ha", date: "entro 20 apr" },
  { task: "Semina · Soia", where: "Podere Sud · 6,3 ha", date: "entro 05 mag" },
  { task: "Preparazione · Girasole", where: "Le Basse · 9,1 ha", date: "in ritardo" },
];
const RESOURCES = [
  { icon: Tractor, label: "Trattore 200 CV", value: "Occupato 4 giorni su 7" },
  { icon: Users, label: "Operatori", value: "2 disponibili questa settimana" },
  { icon: Package, label: "Seme di mais", value: "Scorta sufficiente per 14 ha" },
];

function PianificazionePage() {
  return (
    <>
      <PageHero
        image={farmerPhone}
        eyebrow="Pianificazione delle lavorazioni"
        title="Ogni lavorazione al momento giusto."
        subtitle={`${SITE.name} organizza le attività agricole della stagione e ti dice sempre cosa è fatto e cosa resta da fare.`}
      />

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="eyebrow text-primary">Cosa fa il sistema</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-none md:text-6xl">
          Cinque funzioni per una stagione senza imprevisti.
        </h2>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {PLANNING.map((p, i) => (
            <div key={p.title} className="bg-background p-6">
              <span className="font-display text-5xl font-extrabold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-2xl font-bold leading-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Season calendar */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-primary">Calendario stagionale</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-none text-primary md:text-6xl">
                La stagione, a colpo d'occhio.
              </h2>
            </div>
            <div className="flex gap-6 text-sm">
              <span className="flex items-center gap-2"><span className="h-3 w-6 bg-primary" /> Completata</span>
              <span className="flex items-center gap-2"><span className="h-3 w-6 border-2 border-primary bg-background" /> Da eseguire</span>
            </div>
          </div>

          <p className="mt-8 text-sm text-muted-foreground md:hidden">Scorri di lato per vedere tutti i mesi →</p>
          <div className="mt-4 overflow-x-auto md:mt-12">
            <div className="min-w-[860px] bg-background p-6 shadow-card">
              <div className="grid grid-cols-[10rem_repeat(12,1fr)] border-b border-border pb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <span />
                {MONTHS.map((m) => (
                  <span key={m} className="text-center">{m}</span>
                ))}
              </div>
              {SEASON.map((row) => (
                <div key={row.crop} className="grid grid-cols-[10rem_repeat(12,1fr)] items-center border-b border-border py-4 last:border-b-0">
                  <span className="font-display text-lg font-bold">{row.crop}</span>
                  {row.bars.map((b) => (
                    <span
                      key={b.label + b.start}
                      style={{ gridColumn: `${b.start + 2} / ${b.end + 2}`, gridRow: 1 }}
                      className={`mx-0.5 truncate px-2 py-1.5 text-xs font-semibold ${
                        b.done ? "bg-primary text-primary-foreground" : "border-2 border-primary bg-background text-primary"
                      }`}
                    >
                      {b.label}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Status board */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="eyebrow text-primary">Stato delle lavorazioni</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-none md:text-6xl">
          Fatto, da fare, e con cosa.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="border border-border">
            <div className="flex items-center justify-between bg-accent px-6 py-4">
              <h3 className="text-xl font-bold text-accent-foreground">Completate</h3>
              <span className="font-display text-2xl font-extrabold text-accent-foreground">{DONE.length}</span>
            </div>
            <ul className="divide-y divide-border">
              {DONE.map((t) => (
                <li key={t.task} className="flex gap-3 px-6 py-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div className="flex-1">
                    <p className="font-semibold">{t.task}</p>
                    <p className="text-sm text-muted-foreground">{t.where}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{t.date}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-2 border-primary">
            <div className="flex items-center justify-between bg-primary px-6 py-4">
              <h3 className="text-xl font-bold text-primary-foreground">Da eseguire</h3>
              <span className="font-display text-2xl font-extrabold text-primary-foreground">{TODO.length}</span>
            </div>
            <ul className="divide-y divide-border">
              {TODO.map((t) => (
                <li key={t.task} className="flex gap-3 px-6 py-4">
                  <Circle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div className="flex-1">
                    <p className="font-semibold">{t.task}</p>
                    <p className="text-sm text-muted-foreground">{t.where}</p>
                  </div>
                  <span
                    className={`text-xs font-bold ${t.date === "in ritardo" ? "text-destructive" : "text-primary"}`}
                  >
                    {t.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border bg-brand-deep text-brand-deep-foreground">
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold">Risorse aziendali</h3>
            </div>
            <ul className="divide-y divide-on-image/10">
              {RESOURCES.map((r) => (
                <li key={r.label} className="flex gap-4 px-6 py-5">
                  <r.icon className="h-6 w-6 shrink-0 text-brand-bright" strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold">{r.label}</p>
                    <p className="text-sm text-on-image-muted">{r.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Dati di esempio a scopo illustrativo.</p>
      </section>

      <CtaBand />
    </>
  );
}
