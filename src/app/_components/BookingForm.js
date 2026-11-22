"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Send, MessageCircle } from "lucide-react";
import { useBooking } from "./BookingContext";
import { SITE, SERVICES, DOCTORS, SLOTS } from "@/data/site";
import { validateBooking } from "@/lib/validators";
import { bn } from "@/lib/format";

const box = "mt-1 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none focus:border-navy";

export default function BookingForm() {
  const { form, setForm, reset } = useBooking();
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [today, setToday] = useState("");
  useEffect(() => setToday(new Date().toLocaleDateString("en-CA")), []);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const waText = encodeURIComponent(
    `আসসালামু আলাইকুম, আমি অ্যাপয়েন্টমেন্ট নিতে চাই।\nসার্ভিস: ${SERVICES.find((s) => s.id === form.service)?.title ?? ""}\n` +
      `তারিখ: ${bn(form.date)}\nসময়: ${SLOTS.find((s) => s.id === form.slot)?.label ?? ""}\nরোগী: ${form.name}`
  );

  async function submit(e) {
    e.preventDefault();
    const er = validateBooking(form);
    setErrors(er);
    if (Object.keys(er).length) return;
    setBusy(true);
    try {
      const res = await fetch("/api/book", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error();
      toast.success("অনুরোধ পেয়েছি! ফোন করে সিরিয়াল কনফার্ম করব।", { duration: 5000 });
      reset();
    } catch {
      toast.error("পাঠানো যায়নি। আবার চেষ্টা করুন বা ফোন করুন।");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form id="book" onSubmit={submit} noValidate className="space-y-4 rounded-3xl bg-white p-6 shadow-2xl shadow-black/30">
      <div>
        <h2 className="font-display text-2xl font-bold">অ্যাপয়েন্টমেন্ট নিন</h2>
        <p className="text-sm text-ink/60">আগাম টাকা লাগে না। আমরা ফোন করে কনফার্ম করব।</p>
      </div>

      <label className="block text-sm font-semibold">সার্ভিস
        <select value={form.service} onChange={set("service")} className={box}>
          <option value="">বেছে নিন</option>
          {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
        </select>
        {errors.service && <small className="font-normal text-red-600">{errors.service}</small>}
      </label>

      <label className="block text-sm font-semibold">ডাক্তার (ঐচ্ছিক)
        <select value={form.doctor} onChange={set("doctor")} className={box}>
          <option value="">যেকোনো ডাক্তার</option>
          {DOCTORS.map((d) => <option key={d.id} value={d.id}>{d.name} ({d.spec})</option>)}
        </select>
      </label>

      <label className="block text-sm font-semibold">তারিখ
        <input type="date" min={today} value={form.date} onChange={set("date")} className={box} />
        {errors.date && <small className="font-normal text-red-600">{errors.date}</small>}
      </label>

      <fieldset>
        <legend className="text-sm font-semibold">পছন্দের সময়</legend>
        <div className="mt-1 grid grid-cols-2 gap-2">
          {SLOTS.map((s) => (
            <label key={s.id} className={`cursor-pointer rounded-xl border px-3 py-2.5 text-center text-sm font-medium transition ${form.slot === s.id ? "border-navy bg-mist text-navy" : "border-ink/15 bg-white hover:border-navy/40"}`}>
              <input type="radio" name="slot" value={s.id} checked={form.slot === s.id} onChange={set("slot")} className="sr-only" />
              {s.label}
            </label>
          ))}
        </div>
        {errors.slot && <small className="text-red-600">{errors.slot}</small>}
      </fieldset>

      <label className="block text-sm font-semibold">রোগীর নাম
        <input value={form.name} onChange={set("name")} autoComplete="name" className={box} />
        {errors.name && <small className="font-normal text-red-600">{errors.name}</small>}
      </label>
      <label className="block text-sm font-semibold">মোবাইল নম্বর
        <input value={form.phone} onChange={set("phone")} inputMode="numeric" maxLength={11} autoComplete="tel" className={box} />
        {errors.phone && <small className="font-normal text-red-600">{errors.phone}</small>}
      </label>

      <button disabled={busy} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-leaf py-4 text-lg font-semibold text-white transition hover:bg-leaf-dark disabled:opacity-60">
        <Send size={18} /> {busy ? "পাঠানো হচ্ছে..." : "সিরিয়াল চাই"}
      </button>
      <a href={`https://wa.me/${SITE.wa}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-2xl border border-ink/15 py-3.5 font-semibold hover:bg-mist">
        <MessageCircle size={18} /> হোয়াটসঅ্যাপে জানাই
      </a>
    </form>
  );
}
