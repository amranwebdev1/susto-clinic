import { Siren } from "lucide-react";
import Photo from "@/components/Photo";
import BookingForm from "./BookingForm";
import { PHOTOS, SITE } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <Photo src={PHOTOS.clinic} alt="সুস্থ ডায়াগনস্টিক ও ক্লিনিকের প্রবেশপথ" className="absolute inset-0 -z-20 h-full w-full" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deep/90 via-navy/80 to-navy/65 lg:bg-gradient-to-r lg:from-navy-deep/95 lg:via-navy/75 lg:to-navy/30" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-24 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-16">
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium ring-1 ring-white/20 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" /> ২৪/৭ জরুরি সেবা চালু
          </span>
          <h1 className="mt-5 font-display text-[2.5rem] font-extrabold leading-[1.15] md:text-6xl">
            সুস্থ থাকুন, <span className="text-green-400">সুখে থাকুন</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-white/80">অভিজ্ঞ ডাক্তার ও নির্ভুল টেস্ট এক ছাদের নিচে। ঘরে বসে সিরিয়াল নিন, সময়মতো এসে সরাসরি ডাক্তার দেখান।</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#book" className="rounded-full bg-leaf px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-900/30 transition hover:bg-leaf-dark">সিরিয়াল নিন</a>
            <a href={`tel:${SITE.tel}`} className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-navy"><Siren size={18} /> জরুরি ফোন</a>
          </div>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
