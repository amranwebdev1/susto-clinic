"use client";
import { createContext, useContext, useState } from "react";

const Ctx = createContext(null);
export const useBooking = () => useContext(Ctx);

const EMPTY = { name: "", phone: "", service: "", doctor: "", date: "", slot: "" };

export default function BookingProvider({ children }) {
  const [form, setForm] = useState(EMPTY);
  const pick = (patch) => {
    setForm((f) => ({ ...f, ...patch }));
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return <Ctx.Provider value={{ form, setForm, pick, reset: () => setForm(EMPTY) }}>{children}</Ctx.Provider>;
}
