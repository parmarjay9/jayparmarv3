import { useEffect, useRef } from "react";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Shared popup behavior: Escape closes, the page behind stops scrolling,
// focus moves into the popup (and Tab stays inside it), and focus returns
// to whatever opened it once it closes.
// Spread the returned props onto the popup's panel element.
export default function useModal(open, onClose, labelId) {
  const ref = useRef(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement;
    const panel = ref.current;

    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const prev = { overflow: document.body.style.overflow, pad: document.body.style.paddingRight };
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = scrollbar + "px"; // avoid layout shift when the scrollbar disappears

    panel?.focus({ preventScroll: true });

    const onKey = (e) => {
      if (e.key === "Escape") return closeRef.current();
      if (e.key !== "Tab" || !panel) return;
      const items = [...panel.querySelectorAll(FOCUSABLE)];
      if (!items.length) return e.preventDefault();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === panel)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev.overflow;
      document.body.style.paddingRight = prev.pad;
      opener?.focus?.({ preventScroll: true });
    };
  }, [open]);

  return {
    ref,
    role: "dialog",
    "aria-modal": true,
    "aria-labelledby": labelId,
    tabIndex: -1,
  };
}
