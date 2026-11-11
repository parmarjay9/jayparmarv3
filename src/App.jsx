import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Ticker from "./components/Ticker.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import SideQuests from "./components/SideQuests.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import BackToTop from "./components/BackToTop.jsx";
import BuildNotes from "./components/BuildNotes.jsx";

export default function App() {
  const [buildOpen, setBuildOpen] = useState(false);
  const [photos, setPhotos] = useState([]);

  const addPhoto = (place) =>
    setPhotos((prev) => [
      ...prev,
      {
        place,
        id: Date.now() + Math.random(),
        rot: Math.random() * 16 - 8,
        dx: Math.random() * 30 - 15,
        dy: Math.random() * 24 - 12,
      },
    ]);

  // scroll-reveal for any element with the `reveal` class
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            // once revealed, drop the stagger delay so hover effects respond instantly
            e.target.addEventListener("transitionend", () => e.target.classList.add("revealed"), { once: true });
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div id="top" className="relative min-h-screen">
      <div className="grain" />
      <ScrollProgress />
      <Nav />
      <Ticker />
      <main>
        <Hero photos={photos} addPhoto={addPhoto} />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <SideQuests />
        <Footer onBuild={() => setBuildOpen(true)} />
      </main>
      <BackToTop />
      <BuildNotes open={buildOpen} onClose={() => setBuildOpen(false)} />
    </div>
  );
}
