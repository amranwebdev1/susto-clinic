import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import BookingProvider from "./_components/BookingContext";
import Hero from "./_components/Hero";
import Stats from "./_components/Stats";
import Clinic from "./_components/Clinic";
import Services from "./_components/Services";
import Doctors from "./_components/Doctors";
import Steps from "./_components/Steps";
import Reviews from "./_components/Reviews";
import Faq from "./_components/Faq";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <BookingProvider>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Clinic />
        <Services />
        <Doctors />
        <Steps />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </BookingProvider>
  );
}
