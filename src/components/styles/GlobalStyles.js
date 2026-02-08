import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg: #070B16;
    --panel: rgba(255,255,255,0.06);
    --panel2: rgba(255,255,255,0.08);
    --border: rgba(255,255,255,0.10);

    --text: rgba(255,255,255,0.92);
    --muted: rgba(255,255,255,0.72);

    --blue: #3B82F6;
    --cyan: #22D3EE;
    --violet: #A78BFA;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    color: var(--text);
    background: var(--bg);
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
    line-height: 1.5;
    overflow-x: hidden; /* allow vertical scrolling always */
  }
    section[id] {
  scroll-margin-top: 90px;
}

html {
  scroll-padding-top: 90px;
}


  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button, input, textarea {
    font-family: inherit;
  }

  /* selection highlight */
  ::selection {
    background: rgba(59,130,246,0.35);
  }

  /* ---------- Animated glow background (pure CSS) ---------- */
  body::before {
    content: "";
    position: fixed;
    inset: -200px;
    z-index: -3;

    background:
      radial-gradient(600px 520px at 18% 18%, rgba(34,211,238,0.16), transparent 60%),
      radial-gradient(780px 650px at 82% 30%, rgba(59,130,246,0.18), transparent 60%),
      radial-gradient(680px 620px at 55% 86%, rgba(167,139,250,0.14), transparent 60%);

    filter: blur(10px);
    transform: translateZ(0);
    animation: bgFloat 14s ease-in-out infinite;
    pointer-events: none;
  }

  /* subtle grid overlay */
  body::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -2;

    background-image:
      linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);

    background-size: 90px 90px;
    opacity: 0.06;

    /* fade grid near edges */
    mask-image: radial-gradient(circle at 50% 20%, black 42%, transparent 72%);
    pointer-events: none;
  }

  @keyframes bgFloat {
    0%   { transform: translate3d(0,0,0) scale(1); }
    50%  { transform: translate3d(-18px, 14px, 0) scale(1.03); }
    100% { transform: translate3d(0,0,0) scale(1); }
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    body::before { animation: none; }
  }
`;
