import { useState } from "react";
import { NOTES } from "../data.js";
import useModal from "./useModal.js";

function NoteModal({ n, onClose }) {
  const dialog = useModal(true, onClose, "note-modal-title");

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/60 p-5 backdrop-blur-sm"
    >
      <div {...dialog} className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg border border-line bg-paper outline-none">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-ink/40 text-white hover:bg-ink/60"
        >
          ✕
        </button>

        {n.image && (
          <img
            src={n.image}
            alt={n.h}
            style={{ objectPosition: n.imagePos }}
            className="aspect-[4/3] w-full object-cover"
          />
        )}
        <div className="h-[5px] w-full" style={{ backgroundImage: n.gradient }} />

        <div className="p-6">
          <div className="mb-2 font-mono text-[11px] text-faint">{n.fn}</div>
          <h3 id="note-modal-title" className="mb-2.5 font-serif text-2xl font-medium">{n.h}</h3>
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

// Grayscale on the card, color on hover (and always in color inside the popup).
// Cards without a photo get a grayscale gradient block with the title, so the row stays even.
// Movement (300ms) matches the card's lift; the color fade is slower (500ms) on purpose.
const TINT = "grayscale group-hover:grayscale-0 transform-gpu will-change-transform";
const TINT_TRANSITION = { transition: "transform 300ms ease-out, filter 500ms ease-out" };

function NotePreview({ n }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-codebg">
      {n.image ? (
        <img
          src={n.image}
          alt=""
          loading="lazy"
          style={{ objectPosition: n.imagePos, ...TINT_TRANSITION }}
          className={`h-full w-full object-cover ${TINT} group-hover:scale-[1.03]`}
        />
      ) : (
        <div className={`flex h-full items-end p-4 ${TINT}`} style={{ backgroundImage: n.gradient, ...TINT_TRANSITION }}>
          <span className="select-none font-display text-[52px] italic leading-none text-white/25">{n.h}</span>
        </div>
      )}
    </div>
  );
}

export default function SideQuests() {
  const [active, setActive] = useState(null);

  return (
    <section id="side-quests" className="border-b border-line py-[74px]">
      <div className="mx-auto max-w-content px-7">
        <div className="reveal mb-[26px] font-mono text-[12.5px] text-terracotta">// side quests</div>
        <div className="grid gap-5 md:grid-cols-3">
          {NOTES.map((n, i) => (
            <div
              key={i}
              style={{ transitionDelay: i * 80 + "ms" }}
              className="reveal group flex flex-col overflow-hidden rounded border border-line bg-paper transform-gpu will-change-transform transition duration-300 ease-out hover:-translate-y-1 hover:border-terracotta hover:shadow-[0_14px_30px_-18px_rgba(74,59,42,0.45)]"
            >
              <div className="h-[5px] w-full" style={{ backgroundImage: n.gradient }} />
              <button onClick={() => setActive(n)} className="relative flex flex-1 flex-col text-left">
                <NotePreview n={n} />
                <div className="p-5">
                  <div className="mb-2.5 font-mono text-[11px] text-faint">{n.fn}</div>
                  <h4 className="mb-2 font-serif text-[22px] font-medium">{n.h}</h4>
                  <p className="text-sm text-muted">{n.p}</p>
                </div>
              </button>
              <div className="flex items-center border-t border-line px-5 py-3">
                {n.href && (
                  <a
                    href={n.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[12px] text-muted hover:text-terracotta"
                  >
                    {n.label} ↗
                  </a>
                )}
                {/* mouse/touch shortcut; keyboard users already reach the card button above */}
                <button
                  onClick={() => setActive(n)}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="ml-auto font-mono text-[12px] text-terracotta"
                >
                  View <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && <NoteModal n={active} onClose={() => setActive(null)} />}
    </section>
  );
}
