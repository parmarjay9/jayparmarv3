import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(document.documentElement.scrollTop > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={
        (show ? "pointer-events-auto translate-y-0 opacity-100 " : "pointer-events-none translate-y-3 opacity-0 ") +
        "group fixed bottom-6 right-6 z-[60] flex h-[46px] items-center justify-end overflow-hidden rounded-full border border-line bg-paper px-[14px] text-ink shadow-[0_8px_20px_-10px_rgba(74,59,42,0.4)] transition hover:border-terracotta hover:text-terracotta"
      }
    >
      {/* The arrow sits in a fixed 16px slot pinned to the right edge, so only the
          label grows and shrinks; the arrow never moves. */}
      <span className="max-w-0 overflow-hidden whitespace-nowrap font-mono text-[12px] opacity-0 transition-[max-width,opacity] duration-300 ease-out group-hover:max-w-[110px] group-hover:opacity-100 group-focus-visible:max-w-[110px] group-focus-visible:opacity-100">
        <span className="pr-2">Back to top</span>
      </span>
      <span className="w-4 flex-none text-center text-lg leading-none">↑</span>
    </button>
  );
}
