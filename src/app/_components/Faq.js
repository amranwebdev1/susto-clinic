import { ChevronDown } from "lucide-react";
import { FAQ } from "@/data/site";

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 pb-20">
      <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">সাধারণ প্রশ্ন</h2>
      <div className="mt-6 divide-y divide-ink/10">
        {FAQ.map(([q, a]) => (
          <details key={q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold">
              {q}<ChevronDown size={20} className="shrink-0 text-blue transition group-open:rotate-180" />
            </summary>
            <p className="mt-2 text-ink/65">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
