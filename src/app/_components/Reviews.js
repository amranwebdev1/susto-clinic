import { Star } from "lucide-react";
import { REVIEWS } from "@/data/site";

export default function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">রোগীদের অভিজ্ঞতা</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5">
            <div className="flex gap-0.5 text-amber-400">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={16} className="fill-current" />)}</div>
            <blockquote className="mt-3 text-[17px]">{r.text}</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-navy">{r.name}, {r.place}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
