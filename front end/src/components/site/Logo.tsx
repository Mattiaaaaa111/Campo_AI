import { Link } from "@tanstack/react-router";
import { Sprout } from "lucide-react";
import { SITE } from "@/lib/site";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 text-primary" aria-label={`${SITE.name} – Home`}>
      <span className="flex h-9 w-9 items-center justify-center bg-primary text-primary-foreground">
        <Sprout className="h-5 w-5" />
      </span>
      <span className="font-display text-3xl font-extrabold italic uppercase leading-none tracking-tight">
        {SITE.name}
      </span>
    </Link>
  );
}
