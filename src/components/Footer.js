import { SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-navy-deep pb-24 pt-10 text-white/70">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-display text-xl font-bold text-white">{SITE.name}</p>
        <p className="mt-1 text-sm">{SITE.slogan} | {SITE.address}</p>
        <p className="mt-6 text-xs text-white/50">এটি একটি ডেমো ল্যান্ডিং পেজ। প্রতিষ্ঠান, ডাক্তার, ফি, রিভিউ ও ছবি ডেমোর জন্য তৈরি।</p>
      </div>
    </footer>
  );
}
