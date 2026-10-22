export default function PageHero({
  eyebrow,
  h1,
  intro,
}: {
  eyebrow?: string;
  h1: string;
  intro: string;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 pt-16 pb-8 text-center">
      {eyebrow && (
        <p className="text-brand-accent text-xs tracking-wide uppercase mb-3">{eyebrow}</p>
      )}
      <h1 className="text-3xl md:text-5xl mb-4">{h1}</h1>
      <p className="text-brand-muted text-lg">{intro}</p>
    </section>
  );
}
