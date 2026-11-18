import { Sprout, User } from "lucide-react";
import { SITE } from "@/lib/site";

type Msg = { from: "user" | "ai"; text: string; table?: [string, string, string][] };

const DEFAULT: Msg[] = [
  { from: "user", text: "Cosa devo fare questa settimana in azienda?" },
  {
    from: "ai",
    text: "Ecco le lavorazioni in programma per i prossimi 7 giorni:",
    table: [
      ["Campo Nord · Mais", "Semina", "Da eseguire"],
      ["Vigna Vecchia · Frumento", "Concimazione N", "Da eseguire"],
      ["Podere Sud · Soia", "Erpicatura", "Completata"],
    ],
  },
  {
    from: "ai",
    text: "Attenzione: in magazzino restano 6 q di urea, ne servono 9 per la concimazione. Vuoi che lo aggiunga agli acquisti?",
  },
];

export function ChatMockup({ messages = DEFAULT }: { messages?: Msg[] }) {
  return (
    <div className="shadow-card w-full max-w-lg border border-border bg-card">
      <div className="flex items-center gap-3 border-b border-border px-5 py-3">
        <span className="flex h-7 w-7 items-center justify-center bg-primary text-primary-foreground">
          <Sprout className="h-4 w-4" />
        </span>
        <span className="text-sm font-bold">{SITE.name}</span>
        <span className="ml-auto text-xs text-muted-foreground">GPT · ChatGPT</span>
      </div>
      <div className="space-y-4 p-5">
        {messages.map((m, i) => (
          <div key={i} className={m.from === "user" ? "flex justify-end" : "flex gap-3"}>
            {m.from === "ai" && (
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center bg-accent text-accent-foreground">
                <Sprout className="h-3.5 w-3.5" />
              </span>
            )}
            <div
              className={
                m.from === "user"
                  ? "flex max-w-[85%] items-start gap-2 bg-secondary px-4 py-2.5 text-sm"
                  : "max-w-[90%] text-sm leading-relaxed"
              }
            >
              {m.from === "user" && <User className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />}
              <div>
                <p>{m.text}</p>
                {m.table && (
                  <div className="mt-3 divide-y divide-border border border-border">
                    {m.table.map(([a, b, c]) => (
                      <div key={a} className="grid grid-cols-[1.4fr_1fr_auto] items-center gap-3 px-3 py-2 text-xs">
                        <span className="font-semibold">{a}</span>
                        <span className="text-muted-foreground">{b}</span>
                        <span
                          className={
                            c === "Completata"
                              ? "bg-accent px-2 py-0.5 font-bold text-accent-foreground"
                              : "bg-primary px-2 py-0.5 font-bold text-primary-foreground"
                          }
                        >
                          {c}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
