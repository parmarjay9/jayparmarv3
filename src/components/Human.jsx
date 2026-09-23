import { useEffect, useState } from "react";
import { NOTES } from "../data.js";

function NoteModal({ n, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/60 p-5 backdrop-blur-sm"
    >
      <div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg border border-line bg-paper">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-ink/40 text-white hover:bg-ink/60"
        >
          ✕
        </button>

        {n.image ? (
          <img src={n.image} alt={n.h} className="aspect-video w-full object-cover" />
        ) : (
          <div className="flex aspect-video w-full items-end p-3" style={{ backgroundImage: n.gradient }}>
            <span className="rounded-sm bg-black/20 px-2 py-1 font-mono text-[11px] text-white">add a photo</span>
          </div>
        )}

        <div className="p-6">
          <div className="mb-2 font-mono text-[11px] text-faint">{n.fn}</div>
          <h3 className="mb-2.5 font-serif text-2xl font-medium">{n.h}</h3>
          <p className="mb-5 text-sm text-muted">{n.long || n.p}</p>
          {n.href && (
            <a
              href={n.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-terracotta bg-terracotta px-4 py-2 font-mono text-[12.5px] text-white hover:opacity-85"
            >
              {n.label} ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Human() {
  const [active, setActive] = useState(null);

  return (
    <section id="human" className="border-b border-line py-[74px]">
      <div className="mx-auto max-w-content px-7">
        <div className="reveal mb-[26px] font-mono text-[12.5px] text-terracotta">// side quests</div>
        <div className="grid gap-5 md:grid-cols-3">
          {NOTES.map((n, i) => (
            <div
              key={i}
              style={{ transitionDelay: i * 80 + "ms" }}
              className="reveal flex flex-col overflow-hidden rounded border border-line bg-paper transition duration-[250ms] hover:-translate-y-1 hover:border-terracotta hover:shadow-[0_14px_30px_-18px_rgba(74,59,42,0.45)]"
            >
              <button onClick={() => setActive(n)} className="group relative flex-1 p-5 text-left">
                <div className="mb-2.5 font-mono text-[11px] text-faint">{n.fn}</div>
                <h4 className="mb-2 font-serif text-[22px] font-medium">{n.h}</h4>
                <p className="text-sm text-muted">{n.p}</p>
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-cream/0 font-mono text-[13px] uppercase tracking-wider text-terracotta opacity-0 transition-all duration-200 group-hover:bg-cream/85 group-hover:opacity-100">
                  Take a look →
                </span>
              </button>
              {n.href && (
                <div className="flex items-center border-t border-line px-5 py-3">
                  <a
                    href={n.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[12px] text-muted hover:text-terracotta"
                  >
                    {n.label} ↗
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {active && <NoteModal n={active} onClose={() => setActive(null)} />}
    </section>
  );
}
