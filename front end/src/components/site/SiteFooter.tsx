import { Link } from "@tanstack/react-router";
import { NAV, MODULES, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep text-brand-deep-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-4xl font-extrabold italic uppercase">{SITE.name}</p>
          <p className="mt-4 max-w-sm text-sm text-on-image-muted">{SITE.tagline}.</p>
          <a
            href={SITE.chatgptUrl}
            target="_blank"
            rel="noreferrer"
            className="eyebrow mt-8 inline-block border-b-2 border-brand-bright pb-1 text-brand-bright"
          >
            Provalo su ChatGPT
          </a>
        </div>
        <div>
          <p className="eyebrow text-on-image-muted">Esplora</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-brand-bright">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-on-image-muted">Moduli</p>
          <ul className="mt-4 space-y-2 text-sm">
            {MODULES.map((m) => (
              <li key={m.id}>
                <Link to="/gestione" hash={m.id} className="hover:text-brand-bright">{m.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-on-image/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 text-xs text-on-image-muted md:flex-row">
          <span>© {new Date().getFullYear()} {SITE.name}. Tutti i diritti riservati.</span>
          <span>ChatGPT è un marchio di OpenAI. {SITE.name} è un GPT indipendente.</span>
        </div>
      </div>
    </footer>
  );
}
