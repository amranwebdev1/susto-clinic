import { HeartPulse, Phone } from "lucide-react";
import { SITE } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-blue text-white"><HeartPulse size={20} /></span>
          <span className="font-display text-lg font-bold text-navy">{SITE.short}</span>
        </a>
        <nav className="hidden items-center gap-8 text-[15px] font-medium md:flex">
          <a href="#services" className="hover:text-blue">সার্ভিস</a>
          <a href="#doctors" className="hover:text-blue">ডাক্তার</a>
          <a href="#faq" className="hover:text-blue">প্রশ্নোত্তর</a>
          <a href="#contact" className="hover:text-blue">যোগাযোগ</a>
        </nav>
        <a href={`tel:${SITE.tel}`} className="flex items-center gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue">
          <Phone size={16} /> <span className="hidden sm:inline">{SITE.phone}</span><span className="sm:hidden">ফোন</span>
        </a>
      </div>
    </header>
  );
}
