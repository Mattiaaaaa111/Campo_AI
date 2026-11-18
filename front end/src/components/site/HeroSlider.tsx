import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Pause, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import heroTractor from "@/assets/hero-tractor.jpg";
import fieldsAerial from "@/assets/fields-aerial.jpg";
import farmerPhone from "@/assets/farmer-phone.jpg";
import warehouse from "@/assets/warehouse.jpg";

const SLIDES = [
  {
    tab: "Il tuo gestionale AI",
    image: heroTractor,
    title: "La tua azienda agricola, guidata dall'AI.",
    subtitle: "Raccogli dati, organizza le attività e decidi meglio, semplicemente parlando con ChatGPT.",
    cta: { label: "Scopri la gestione", to: "/gestione" as const },
  },
  {
    tab: "Terreni e colture",
    image: fieldsAerial,
    title: "Ogni appezzamento, sotto controllo.",
    subtitle: "Superfici, suoli, colture e rotazioni in un unico dataset aziendale sempre aggiornato.",
    cta: { label: "Aziende e terreni", to: "/gestione" as const },
  },
  {
    tab: "Pianificazione",
    image: farmerPhone,
    title: "La stagione, organizzata in una chat.",
    subtitle: "Cosa è fatto, cosa resta da fare e con quali risorse. Lo chiedi, CampoAI risponde.",
    cta: { label: "Pianifica le lavorazioni", to: "/pianificazione" as const },
  },
  {
    tab: "Magazzino e costi",
    image: warehouse,
    title: "Scorte e conti, senza sorprese.",
    subtitle: "Sementi, fertilizzanti, fitosanitari, carburante, spese e ricavi: tutto collegato.",
    cta: { label: "Esplora i moduli", to: "/gestione" as const },
  },
];

const DURATION = 7000;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % SLIDES.length), DURATION);
    return () => clearTimeout(t);
  }, [active, paused]);

  const slide = SLIDES[active] ?? SLIDES[0]!;

  return (
    <section className="relative isolate h-[calc(100svh-73px)] min-h-[620px] max-h-[920px] overflow-hidden bg-brand-deep lg:h-[calc(100svh-106px)]">
      {SLIDES.map((s, i) => (
        <img
          key={s.tab}
          src={s.image}
          alt=""
          width={1920}
          height={1088}
          className={`absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-1000 ${
            i === active ? "animate-slow-zoom opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="bg-image-overlay absolute inset-0 -z-10" />

      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? "Riprendi" : "Pausa"}
        className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-background text-primary md:right-12 md:top-10"
      >
        {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
      </button>

      <div className="mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-8">
        <div key={active} className="max-w-3xl">
          <p className="eyebrow animate-rise flex items-center gap-3 text-on-image">
            <span className="h-0.5 w-8 bg-brand-bright" />
            {SITE.name} · GPT per ChatGPT
          </p>
          <h1 className="animate-rise mt-4 text-5xl font-extrabold leading-[0.92] text-on-image md:text-7xl lg:text-8xl">
            {slide.title}
          </h1>
          <p className="animate-rise mt-6 max-w-xl text-lg font-light text-on-image-muted md:text-2xl">
            {slide.subtitle}
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3">
            <Button asChild variant="light" size="xl">
              <a href={SITE.chatgptUrl} target="_blank" rel="noreferrer">
                Provalo su ChatGPT <ExternalLink />
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <Link to={slide.cta.to}>{slide.cta.label}</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 hidden grid-cols-4 md:grid">
          {SLIDES.map((s, i) => (
            <button
              key={s.tab}
              type="button"
              onClick={() => setActive(i)}
              className="group relative pt-5 text-left"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 bg-on-image/30" />
              {i === active && (
                <span
                  key={`${active}-${paused}`}
                  className={`absolute inset-x-0 top-0 h-0.5 bg-on-image ${paused ? "" : "animate-progress"}`}
                  style={{ ["--slide-duration" as string]: `${DURATION}ms` }}
                />
              )}
              <span
                className={`font-display text-xl font-bold transition-colors lg:text-2xl ${
                  i === active ? "text-on-image" : "text-on-image-muted group-hover:text-on-image"
                }`}
              >
                {s.tab}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
