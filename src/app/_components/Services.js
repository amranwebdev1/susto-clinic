import { Stethoscope, Users, FlaskConical, Activity, ScanLine, Bone, Syringe, Siren, Phone } from "lucide-react";
import { SERVICES, EMERGENCY, SITE } from "@/data/site";
import ServiceButton from "./ServiceButton";

const ICONS = { stetho: Stethoscope, users: Users, flask: FlaskConical, activity: Activity, scan: ScanLine, bone: Bone, syringe: Syringe };

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">আমাদের সেবা সমূহ</h2>
      <p className="mt-2 max-w-xl text-ink/60">যেকোনো সেবার জন্য আগে থেকে সিরিয়াল নিয়ে রাখুন।</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => {
          const Icon = ICONS[s.icon];
          return (
            <article key={s.id} className="group flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-blue text-white transition group-hover:scale-110"><Icon size={24} /></span>
              <h3 className="mt-4 text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-1 flex-1 text-[15px] text-ink/60">{s.text}</p>
              <p className="mt-4 font-semibold text-leaf-dark">{s.price}</p>
              <ServiceButton id={s.id} />
            </article>
          );
        })}
        <article className="flex flex-col rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-6 text-white shadow-xl shadow-navy/20">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf text-white"><Siren size={24} /></span>
          <h3 className="mt-4 text-lg font-semibold">{EMERGENCY.title}</h3>
          <p className="mt-1 flex-1 text-[15px] text-white/75">{EMERGENCY.text}</p>
          <a href={`tel:${SITE.tel}`} className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-white py-2.5 font-semibold text-navy transition hover:bg-green-100"><Phone size={16} /> {SITE.phone}</a>
        </article>
      </div>
    </section>
  );
}
