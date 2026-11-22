import { NextResponse } from "next/server";
import { SERVICES, DOCTORS, SLOTS } from "@/data/site";
import { validateBooking } from "@/lib/validators";
import { sendTelegram } from "@/lib/telegram";
import { bn } from "@/lib/format";

const clean = (s) => String(s ?? "").replace(/[<>&]/g, "").slice(0, 200);

export async function POST(req) {
  let d;
  try { d = await req.json(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }
  if (Object.keys(validateBooking(d)).length) return NextResponse.json({ ok: false }, { status: 400 });

  const service = SERVICES.find((s) => s.id === d.service);
  const doctor = DOCTORS.find((x) => x.id === d.doctor);
  const slot = SLOTS.find((s) => s.id === d.slot);

  const text =
    "🩺 নতুন অ্যাপয়েন্টমেন্ট\n" +
    `সার্ভিস: ${service.title}\nডাক্তার: ${doctor ? doctor.name : "যেকোনো"}\n` +
    `তারিখ: ${bn(d.date)}\nসময়: ${slot.label}\n\n` +
    `রোগী: ${clean(d.name)}\nফোন: ${clean(d.phone)}`;

  const r = await sendTelegram(text);
  return NextResponse.json({ ok: r.ok }, { status: r.ok ? 200 : 502 });
}
