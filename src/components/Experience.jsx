import { useState } from "react";
import { XP } from "../data.js";
import useModal from "./useModal.js";

function OrgLogo({ x, size = "h-11 w-11" }) {
  return x.logo ? (
    <span className={`${size} flex-none overflow-hidden rounded-[9px] border border-line`}>
      <img src={x.logo} alt={x.org} className="h-full w-full object-cover" />
    </span>
  ) : (
    <span
      style={{ background: x.color }}
      className={`${size} flex flex-none items-center justify-center rounded-[9px] font-serif text-[12px] font-medium tracking-wide text-white`}
    >
      {x.initials}
    </span>
  );
}

function XpModal({ x, onClose }) {
  const dialog = useModal(true, onClose, "xp-modal-title");

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/60 p-5 backdrop-blur-sm"
    >
      <div {...dialog} className="relative w-full max-w-md rounded-lg border border-line bg-paper p-6 outline-none">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink/15 text-ink hover:bg-ink/25"
        >
          ✕
        </button>
        <div className="mb-1 font-mono text-[11px] text-faint">{x.when}</div>
        <div className="flex items-center gap-3.5 pr-8">
          <OrgLogo x={x} size="h-12 w-12" />
          <div>
            <h3 id="xp-modal-title" className="font-serif text-2xl font-medium leading-tight">{x.role}</h3>
            <div className="mt-0.5 text-[15px] text-muted">{x.org}</div>
          </div>
        </div>
        {x.details?.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {x.details.map((d, k) => (
              <li key={k} className="flex gap-2.5 text-sm text-ink/85">
                <span className="mt-2 h-1 w-1 flex-none rounded-full bg-terracotta" />
                {d}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const [active, setActive] = useState(null);

  return (
    <section id="experience" className="border-b border-line py-[74px]">
      <div className="mx-auto max-w-content px-7">
        <div className="reveal mb-[26px] font-mono text-[12.5px] text-terracotta">// experience</div>
        <div className="flex flex-col">
          {XP.map((x, i) => (
            <button
              key={i}
              onClick={() => setActive(x)}
              style={{ transitionDelay: i * 70 + "ms" }}
              className="reveal group grid grid-cols-1 items-baseline gap-2 border-t border-line py-[22px] text-left transition-[padding] first:border-t-0 hover:pl-2 md:grid-cols-[155px_1fr_auto] md:items-center md:gap-11"
            >
              <span className="order-first font-mono text-[12.5px] text-faint md:order-none">{x.when}</span>
              <span className="flex items-center gap-3.5">
                <OrgLogo x={x} />
                <span>
                  <div className="font-serif text-[21px] font-medium">{x.role}</div>
                  <div className="mt-0.5 text-[14.5px] text-muted">{x.org}</div>
                </span>
              </span>
              <span className="flex items-center gap-2 justify-self-start">
                <span className="whitespace-nowrap rounded-[3px] bg-codebg px-2.5 py-1 font-mono text-[11px] text-terracotta">
                  {x.tag}
                </span>
                <span className="text-terracotta opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">
                  ↗
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && <XpModal x={active} onClose={() => setActive(null)} />}
    </section>
  );
}
