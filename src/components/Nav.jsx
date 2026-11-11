import { useEffect, useState } from "react";
import { LINKS } from "../data.js";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Escape closes the open menu too
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const onClick = (e) => {
    const a = e.target.closest("a");
    setOpen(false);
    if (!a) return;
    const href = a.getAttribute("href") || "";
    if (href.startsWith("#") && href.length > 1) {
      const el = document.getElementById(href.slice(1));
      if (el) {
        e.preventDefault();
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      }
    }
  };

  return (
    <>
    {/* Tapping anywhere outside the open menu closes it. The tap lands on this
        layer, so it won't also open a card or follow a link underneath.
        (It lives outside <header> because the header's backdrop-blur would
        otherwise trap a fixed element inside the header's own box.) */}
    {open && (
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-40 bg-ink/10 md:hidden"
      />
    )}
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur">
      <div
        // taps on the header bar itself (logo, empty space) close the menu too
        onClick={(e) => !e.target.closest("nav, button") && setOpen(false)}
        className="mx-auto flex h-16 max-w-content items-center justify-between px-7"
      >
        <a href="#top" className="font-mono text-[13px] text-muted">
          ~/ <b className="font-medium text-ink">jp</b>
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="text-ink md:hidden"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>

        <nav
          onClick={onClick}
          className={
            (open
              ? "absolute left-0 right-0 top-16 flex flex-col items-start gap-0 border-b border-line bg-cream px-7 py-2 "
              : "hidden ") +
            "md:static md:flex md:flex-row md:items-center md:gap-5 md:border-0 md:bg-transparent md:p-0"
          }
        >
          <a href="#projects" className="py-2.5 text-sm text-muted transition-colors hover:text-terracotta md:py-0">Projects</a>
          <a href="#experience" className="py-2.5 text-sm text-muted transition-colors hover:text-terracotta md:py-0">Experience</a>
          <a href="#education" className="py-2.5 text-sm text-muted transition-colors hover:text-terracotta md:py-0">Education</a>
          <a href="#skills" className="py-2.5 text-sm text-muted transition-colors hover:text-terracotta md:py-0">Skills</a>
          <a href={LINKS.resume} target="_blank" rel="noreferrer" className="mt-2 inline-flex w-fit rounded-full border border-terracotta px-4 py-1.5 text-sm text-terracotta hover:bg-terracotta hover:text-white md:mt-0">Résumé</a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="mb-1 mt-2 inline-flex w-fit rounded-full border border-terracotta px-4 py-1.5 text-sm text-terracotta hover:bg-terracotta hover:text-white md:my-0">LinkedIn</a>
        </nav>
      </div>
    </header>
    </>
  );
}
