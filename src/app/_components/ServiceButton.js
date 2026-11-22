"use client";
import { useBooking } from "./BookingContext";

export default function ServiceButton({ id }) {
  const { pick } = useBooking();
  return (
    <button onClick={() => pick({ service: id })} className="mt-3 w-full rounded-xl border border-navy/20 py-2.5 font-semibold text-navy transition hover:bg-navy hover:text-white">
      সিরিয়াল নিন
    </button>
  );
}
