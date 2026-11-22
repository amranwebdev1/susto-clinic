import { CalendarClock } from "lucide-react";
import Photo from "@/components/Photo";
import { DOCTORS } from "@/data/site";
import { taka } from "@/lib/format";
import DoctorButton from "./DoctorButton";

export default function Doctors() {
  return (
    <section id="doctors" className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">আমাদের বিশেষজ্ঞ ডাক্তার</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {DOCTORS.map((d) => (
            <article key={d.id} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 transition hover:shadow-xl hover:shadow-navy/10">
              <div className="overflow-hidden">
                <Photo src={d.photo} alt={d.name} className="aspect-[5/4] w-full object-[50%_15%] transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy">{d.name}</h3>
                <p className="font-medium text-leaf-dark">{d.spec}</p>
                <p className="text-sm text-ink/60">{d.degree}</p>
                <p className="mt-4 flex items-start gap-2 text-[15px]"><CalendarClock size={18} className="mt-0.5 shrink-0 text-blue" />{d.time}</p>
                <p className="mt-2 text-sm text-ink/60">ভিজিট: <b className="text-ink">{taka(d.fee)}</b></p>
                <DoctorButton id={d.id} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
