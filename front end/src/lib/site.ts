import {
  Map,
  Sprout,
  ClipboardList,
  Tractor,
  Warehouse,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "CampoAI",
  tagline: "Il gestionale agricolo con l'intelligenza artificiale, dentro ChatGPT",
  // Link pubblico al GPT su ChatGPT
  chatgptUrl: "https://chatgpt.com/gpts",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/gestione", label: "Gestione aziendale" },
  { to: "/pianificazione", label: "Pianificazione" },
  { to: "/come-funziona", label: "Come funziona" },
] as const;

export type Module = {
  id: string;
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
  items: string[];
  prompt: string;
};

export const MODULES: Module[] = [
  {
    id: "terreni",
    icon: Map,
    title: "Aziende e terreni",
    short: "Superfici, appezzamenti e caratteristiche dei suoli.",
    description:
      "Censisci l'azienda in ogni dettaglio: corpi aziendali, appezzamenti, superfici e caratteristiche dei terreni, per avere sempre sotto controllo dove e come si coltiva.",
    items: ["Superfici e appezzamenti", "Tessitura e caratteristiche del suolo", "Più aziende in un solo dataset"],
    prompt: "Quanti ettari ho a disposizione per il mais quest'anno?",
  },
  {
    id: "colture",
    icon: Sprout,
    title: "Colture",
    short: "Colture presenti, rotazioni e programmazione.",
    description:
      "Tieni traccia delle colture in campo, delle rotazioni negli anni e della programmazione colturale delle prossime stagioni.",
    items: ["Colture attive per appezzamento", "Storico delle rotazioni", "Programmazione colturale"],
    prompt: "Proponimi una rotazione per il campo Nord dopo il frumento.",
  },
  {
    id: "lavorazioni",
    icon: ClipboardList,
    title: "Lavorazioni",
    short: "Operazioni effettuate e da effettuare.",
    description:
      "Registra ogni operazione in campo — semina, concimazione, trattamenti, raccolta — e visualizza subito cosa resta da fare.",
    items: ["Registro delle operazioni", "Lavorazioni da eseguire", "Note e date di intervento"],
    prompt: "Registra l'erpicatura di oggi sul campo Vigna Vecchia, 4,2 ha.",
  },
  {
    id: "macchinari",
    icon: Tractor,
    title: "Macchinari",
    short: "Mezzi, attrezzature e consumi di carburante.",
    description:
      "Gestisci il parco macchine: trattori, attrezzature e consumi di carburante per ogni lavorazione, per capire dove si spende di più.",
    items: ["Parco mezzi e attrezzature", "Consumi di gasolio", "Ore di lavoro per mezzo"],
    prompt: "Qual è il consumo medio di gasolio del trattore per l'aratura?",
  },
  {
    id: "magazzino",
    icon: Warehouse,
    title: "Magazzino",
    short: "Sementi, fertilizzanti e fitosanitari.",
    description:
      "Controlla le disponibilità di sementi, fertilizzanti e prodotti fitosanitari e ricevi un avviso quando le scorte non bastano per le lavorazioni previste.",
    items: ["Giacenze in tempo reale", "Carichi e scarichi", "Avvisi di scorta insufficiente"],
    prompt: "Ho abbastanza urea per le concimazioni di marzo?",
  },
  {
    id: "economia",
    icon: Wallet,
    title: "Costi e ricavi",
    short: "Spese e ricavi aziendali registrati.",
    description:
      "Registra spese e ricavi, collegali a colture e appezzamenti e ottieni una visione chiara della redditività dell'azienda.",
    items: ["Spese per categoria", "Ricavi per coltura", "Margini per appezzamento"],
    prompt: "Qual è stato il margine del girasole rispetto allo scorso anno?",
  },
];

export const PLANNING = [
  {
    title: "Identifica le lavorazioni",
    text: "Per ogni coltura individua le operazioni necessarie, dalla preparazione del terreno alla raccolta.",
  },
  {
    title: "Organizza la stagione",
    text: "Distribuisce le attività nel calendario della stagione, in base a colture, epoche e priorità.",
  },
  {
    title: "Traccia le completate",
    text: "Ogni lavorazione registrata aggiorna lo stato del piano: sai sempre cosa è stato fatto.",
  },
  {
    title: "Evidenzia cosa manca",
    text: "Mette in risalto le operazioni ancora da eseguire, così nulla resta indietro.",
  },
  {
    title: "Organizza le risorse",
    text: "Supporta l'uso di mezzi, persone e prodotti di magazzino nelle settimane più intense.",
  },
] as const;
