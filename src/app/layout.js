import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "সুস্থ ডায়াগনস্টিক ও ক্লিনিক | অনলাইনে অ্যাপয়েন্টমেন্ট",
  description: "অভিজ্ঞ ডাক্তার ও নির্ভুল টেস্ট। ফর্ম পূরণ করে ঘরে বসেই সিরিয়াল নিন।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@600;700;800&family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-paper font-sans text-ink antialiased">
        {children}
        <Toaster position="top-center" toastOptions={{ style: { fontFamily: "inherit" } }} />
      </body>
    </html>
  );
}
