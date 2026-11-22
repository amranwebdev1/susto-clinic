import { STEPS } from "@/data/site";

export default function Steps() {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-deep py-20 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-bold md:text-4xl">তিন ধাপে সিরিয়াল</h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-leaf font-display text-xl font-bold">{"১২৩"[i]}</span>
              <h3 className="mt-4 text-xl font-semibold">{t}</h3>
              <p className="mt-1 text-white/75">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
