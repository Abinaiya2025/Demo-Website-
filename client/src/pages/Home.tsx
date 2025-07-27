import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OrbitalTools from "@/components/OrbitalTools";
import Founder from "@/components/Founder";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RobotTour from "@/components/RobotTour";
import CustomCursor from "@/components/CustomCursor";
import SocialToggle from "@/components/SocialToggle";

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-slate-900 text-white font-inter overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      <Hero />
      <OrbitalTools />
      <Founder />
      <Services />
      <Philosophy />
      <Contact />
      <Footer />
      <RobotTour />
      <SocialToggle />
    </div>
  );
}
