import { CheckCircle2, MapPin } from "lucide-react";
import Photo from "@/components/Photo";
import { PHOTOS, SITE } from "@/data/site";

const POINTS = ["আধুনিক, পরিচ্ছন্ন ও শীতাতপ নিয়ন্ত্রিত পরিবেশ", "রোগী ও স্বজনদের জন্য আরামদায়ক বসার ব্যবস্থা", "একই ভবনে ডাক্তার, ল্যাব ও ইমেজিং", "দিন-রাত ২৪ ঘণ্টা জরুরি সেবা"];

export default function Clinic() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-6 pt-20 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="relative">
        <Photo src={PHOTOS.clinic} alt="সুস্থ ডায়াগনস্টিক ও ক্লিনিকের সামনের দৃশ্য" className="aspect-[16/10] w-full rounded-[2rem] shadow-2xl shadow-navy/25 ring-1 ring-ink/5" />
        <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf/10 text-leaf-dark"><MapPin size={20} /></span>
          <div className="leading-tight"><p className="text-xs text-ink/50">আমাদের ঠিকানা</p><p className="font-semibold text-navy">{SITE.address}</p></div>
        </div>
      </div>
      <div>
        <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">আমাদের ক্লিনিক</h2>
        <p className="mt-3 text-lg text-ink/65">{SITE.slogan}। এক ছাদের নিচে চিকিৎসা ও পরীক্ষার সব সুবিধা।</p>
        <ul className="mt-6 space-y-3">
          {POINTS.map((p) => (
            <li key={p} className="flex items-start gap-3"><CheckCircle2 size={22} className="mt-0.5 shrink-0 text-leaf" />{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
