import { useState } from "react";
import { EDUCATION } from "../data.js";

function Courses({ list }) {
  return (
    <div className="mt-4 border-t border-line pt-4">
      <div className="mb-2.5 font-mono text-[11px] uppercase tracking-wide text-faint">Relevant coursework</div>
      <div className="flex flex-wrap gap-1.5">
        {list.map((c, k) => (
          <span key={k} className="rounded-[3px] bg-codebg px-2.5 py-[5px] font-mono text-[11.5px] text-ink">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

function EduCard({ e, i }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ transitionDelay: i * 90 + "ms" }}
      className="reveal rounded border border-line bg-paper p-6 transition-colors duration-200 hover:border-terracotta/40"
    >
      <div className="mb-4 flex items-start gap-3.5">
        <div className="flex h-[52px] w-[52px] flex-none items-center justify-center overflow-hidden rounded-[10px] border border-line bg-white p-1.5">
          {e.logo ? (
            <img src={e.logo} alt={e.initials} className="h-full w-full object-contain" />
          ) : (
            <span className="font-serif text-[13px] font-medium text-white" style={{ background: e.color }}>
              {e.initials}
            </span>
          )}
        </div>
        <div>
          <h3 className="font-serif text-[23px] font-medium leading-tight">{e.degree}</h3>
          <div className="mt-1 text-[15px] text-ink">{e.field}</div>
          <div className="mt-0.5 text-[14px] text-muted">{e.school}</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 font-mono text-[11px] text-muted">
        <span className="rounded-[3px] bg-codebg px-2.5 py-1">{e.when}</span>
        <span className="rounded-[3px] bg-codebg px-2.5 py-1">GPA {e.gpa}</span>
        <span className="rounded-[3px] bg-codebg px-2.5 py-1">{e.place}</span>
      </div>

      {e.courses?.length > 0 && e.showCourses && <Courses list={e.courses} />}

      {e.courses?.length > 0 && !e.showCourses && (
        <>
          <button
            onClick={() => setOpen((o) => !o)}
            className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-terracotta/40 px-3.5 py-1.5 font-mono text-[12px] text-terracotta transition-colors hover:bg-terracotta hover:text-white"
          >
            {open ? "Hide courses" : "View courses"}
            <span className={"transition-transform " + (open ? "rotate-180" : "")} aria-hidden="true">⌄</span>
          </button>

          {open && <Courses list={e.courses} />}
        </>
      )}
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="border-b border-line py-[74px]">
      <div className="mx-auto max-w-content px-7">
        <div className="reveal mb-[26px] font-mono text-[12.5px] text-terracotta">// education</div>
        <div className="grid gap-[22px] md:grid-cols-2">
          {EDUCATION.map((e, i) => (
            <EduCard key={i} e={e} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
