export function IconGradientDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      <defs>
        <linearGradient id="kkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--kk-orange))" />
          <stop offset="50%" stopColor="hsl(var(--kk-fuchsia))" />
          <stop offset="100%" stopColor="hsl(var(--kk-violet))" />
        </linearGradient>
      </defs>
    </svg>
  );
}