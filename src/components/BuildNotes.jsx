import { LAST_UPDATED } from "../data.js";
import useModal from "./useModal.js";

const STICKY_BG = "#f6e58d";

const STICKIES = [
  { rot: "-4deg", body: <><b className="font-bold">Built with</b><br />React · Vite · Tailwind CSS</> },
  { rot: "3deg", body: <>inline SVG grain &amp; Simple Icons</> },
  { rot: "-2deg", body: <><b className="font-bold">palette</b><br />cream + #b0593a + #c98a34</> },
  { rot: "2.5deg", body: <><b className="font-bold">type</b><br />Instrument Serif · Fraunces · Space Grotesk · JetBrains Mono</> },
  { rot: "-3deg", body: <>last updated<br /><b className="font-bold">{LAST_UPDATED}</b></> },
];

export default function BuildNotes({ open, onClose }) {
  const dialog = useModal(open, onClose);

  if (!open) return null;

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/50 p-6 backdrop-blur-sm"
    >
      <div {...dialog} aria-label="Build notes" className="relative flex max-w-[560px] flex-wrap items-start justify-center gap-[18px] outline-none">
        <button aria-label="Close" onClick={onClose} className="absolute -right-1 -top-10 text-[22px] text-white">
          ✕
        </button>
        {STICKIES.map((n, i) => (
          <div
            key={i}
            style={{ background: STICKY_BG, transform: `rotate(${n.rot})`, animationDelay: i * 0.06 + "s" }}
            className="sticky-note relative min-h-[150px] w-[180px] p-4 font-hand text-[21px] leading-tight text-[#3a3320] shadow-xl"
          >
            {n.body}
          </div>
        ))}
      </div>
    </div>
  );
}
