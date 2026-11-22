import { SERVICES, SLOTS } from "@/data/site";

const dhakaToday = () => new Date(Date.now() + 6 * 3600 * 1000).toISOString().slice(0, 10);

export function validateBooking({ name = "", phone = "", service = "", date = "", slot = "" }) {
  const errors = {};
  if (name.trim().length < 3) errors.name = "রোগীর পুরো নাম লিখুন";
  if (!/^01[3-9]\d{8}$/.test(phone.trim())) errors.phone = "১১ সংখ্যার সঠিক মোবাইল নম্বর দিন, যেমন 01712345678";
  if (!SERVICES.some((s) => s.id === service)) errors.service = "সার্ভিস বেছে নিন";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date < dhakaToday()) errors.date = "আজ বা পরের একটা তারিখ দিন";
  if (!SLOTS.some((s) => s.id === slot)) errors.slot = "পছন্দের সময় বেছে নিন";
  return errors;
}
