import type { ReactNode } from "react";

type Props = {
  image: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
};

export function PageHero({ image, eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      <img
        src={image}
        alt=""
        width={1600}
        height={1000}
        className="animate-slow-zoom absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="bg-image-side absolute inset-0 -z-10" />
      <div className="mx-auto flex min-h-[460px] max-w-7xl flex-col justify-end px-6 py-16 md:min-h-[540px]">
        <p className="eyebrow animate-rise text-brand-bright">{eyebrow}</p>
        <h1 className="animate-rise mt-4 max-w-3xl text-5xl font-extrabold leading-[0.95] text-on-image md:text-7xl">
          {title}
        </h1>
        <p className="animate-rise mt-6 max-w-xl text-lg font-light text-on-image-muted md:text-xl">
          {subtitle}
        </p>
        {children && <div className="animate-rise mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
