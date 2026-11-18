import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SITE } from "@/lib/site";
import heroTractor from "@/assets/hero-tractor.jpg";

export const Route = createFileRoute("/come-funziona")({
  head: () => ({
    meta: [
      { title: `Come funziona ${SITE.name} su ChatGPT` },
      {
        name: "description",
        content: `Come iniziare a usare ${SITE.name}, il gestionale agricolo AI su ChatGPT: tre passi e domande frequenti.`,
      },
      { property: "og:title", content: `Come funziona ${SITE.name}` },
      {
        property: "og:description",
        content: "Apri il GPT, descrivi la tua azienda e inizia a pianificare la stagione.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ComeFunzionaPage,
});

const STEPS = [
  { title: "Apri il GPT", text: `Cerca ${SITE.name} su ChatGPT o usa il link diretto. Non serve installare nulla.` },
  { title: "Descrivi l'azienda", text: "Inserisci terreni, colture, mezzi e magazzino: il GPT costruisce il tuo dataset aziendale." },
  { title: "Gestisci la stagione", text: "Registra lavorazioni, chiedi cosa fare, controlla scorte e costi. Ogni giorno, in una chat." },
];

const FAQ = [
  {
    q: `Cos'è ${SITE.name}?`,
    a: `È un GPT pubblicato su ChatGPT che funziona come un gestionale aziendale agricolo assistito dall'intelligenza artificiale: raccoglie dati, organizza le attività e supporta le decisioni operative.`,
  },
  {
    q: "Di cosa ho bisogno per usarlo?",
    a: "Di un account ChatGPT. Si usa dal computer o dallo smartphone, anche direttamente in campo.",
  },
  {
    q: "Quali dati posso gestire?",
    a: "Aziende e terreni, colture e rotazioni, lavorazioni effettuate e da effettuare, macchinari e consumi di carburante, magazzino di sementi, fertilizzanti e fitosanitari, costi e ricavi.",
  },
  {
    q: "Mi aiuta a pianificare le lavorazioni?",
    a: "Sì. Identifica le lavorazioni necessarie per ogni coltura, le organizza nella stagione, tiene traccia di quelle completate ed evidenzia quelle ancora da eseguire.",
  },
  {
    q: "Sostituisce l'agronomo?",
    a: "No. È uno strumento di supporto alle decisioni: organizza le informazioni e suggerisce, ma le scelte restano a te e ai tuoi tecnici di fiducia.",
  },
];

function ComeFunzionaPage() {
  return (
    <>
      <PageHero
        image={heroTractor}
        eyebrow="Come funziona"
        title="Tre passi per iniziare."
        subtitle="Nessun software da installare, nessun corso da seguire. Se sai scrivere un messaggio, sai usare CampoAI."
      >
        <Button asChild variant="light" size="xl">
          <a href={SITE.chatgptUrl} target="_blank" rel="noreferrer">
            Apri in ChatGPT <ExternalLink />
          </a>
        </Button>
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.title} className="border-t-4 border-primary pt-8">
              <span className="font-display text-7xl font-extrabold text-primary">{i + 1}</span>
              <h2 className="mt-4 text-3xl font-bold">{s.title}</h2>
              <p className="mt-3 text-lg text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="scroll-mt-32 bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="eyebrow text-primary">Domande frequenti</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-none text-primary md:text-6xl">
              Hai qualche dubbio?
            </h2>
          </div>
          <Accordion type="single" collapsible className="border-t border-border">
            {FAQ.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="py-6 text-left font-display text-xl font-bold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
