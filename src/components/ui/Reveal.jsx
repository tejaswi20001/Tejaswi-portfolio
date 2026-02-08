import { useEffect, useRef, useState } from "react";

export default function Reveal({ children }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.12 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transform: show ? "translateY(0px)" : "translateY(14px)",
        opacity: show ? 1 : 0,
        transition: "transform 500ms ease, opacity 500ms ease",
      }}
    >
      {children}
    </div>
  );
}
