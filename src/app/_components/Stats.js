import { STATS } from "@/data/site";

export default function Stats() {
  return (
    <div className="relative z-10 mx-auto -mt-12 max-w-6xl px-5">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ink/10 shadow-2xl shadow-navy/20 md:grid-cols-4">
        {STATS.map(([big, small]) => (
          <div key={small} className="bg-white px-5 py-6 text-center">
            <p className="font-display text-2xl font-bold text-navy md:text-3xl">{big}</p>
            <p className="mt-1 text-sm text-ink/60">{small}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
