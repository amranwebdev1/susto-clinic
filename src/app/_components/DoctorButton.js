"use client";
import { useBooking } from "./BookingContext";

export default function DoctorButton({ id }) {
  const { pick } = useBooking();
  return (
    <button onClick={() => pick({ doctor: id, service: "special" })} className="mt-4 w-full rounded-xl bg-navy py-3 font-semibold text-white transition hover:bg-blue">
      এই ডাক্তারের সিরিয়াল নিন
    </button>
  );
}
