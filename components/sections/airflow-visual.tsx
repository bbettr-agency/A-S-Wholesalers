import { cn } from "@/lib/utils";
import type { AirflowKind } from "@/config/products";

/**
 * AirflowVisual – product-specific visualisation of how each Haier SYSTEM TYPE
 * moves air. Pure SVG + CSS (compositor-friendly); animation classes are applied
 * only when the stage is `active`, so inactive stages cost nothing. Decorative.
 *
 * wall – horizontal Coanda flow outward and down
 * solar – energy from the sun into the unit
 * multi – one outdoor node branching to several rooms
 * ducted – concealed air descending from a ceiling line
 * cassette – 360° radial airflow from the ceiling
 */
export function AirflowVisual({ kind, active }: { kind: AirflowKind; active: boolean }) {
  const flow = (base: string) => cn(base, active && "af-flow");
  const flowSlow = (base: string) => cn(base, active && "af-flow-slow");

  const common = "pointer-events-none absolute inset-0 h-full w-full";

  if (kind === "wall") {
    return (
      <svg className={common} viewBox="0 0 480 360" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g className="text-brand-steel" stroke="currentColor" strokeLinecap="round">
          <path className={flowSlow("")} d="M96 150 C 200 138, 320 150, 430 232" strokeWidth="1.5" opacity="0.35" />
          <path className={flow("")} d="M96 168 C 210 158, 330 172, 442 260" strokeWidth="1.5" opacity="0.28" />
          <path className={flowSlow("")} d="M96 186 C 205 182, 320 200, 430 292" strokeWidth="1.5" opacity="0.22" />
        </g>
        <path className={flow("text-brand-accent")} d="M100 159 C 205 148, 330 162, 448 246" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" opacity="0.5" />
      </svg>
    );
  }

  if (kind === "solar") {
    return (
      <svg className={common} viewBox="0 0 480 360" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g className={cn("text-brand-accent", active && "af-glow")} stroke="currentColor" fill="none" opacity="0.5">
          <circle cx="392" cy="70" r="16" strokeWidth="1.75" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            return <line key={i} x1={392 + Math.cos(a) * 24} y1={70 + Math.sin(a) * 24} x2={392 + Math.cos(a) * 32} y2={70 + Math.sin(a) * 32} strokeWidth="1.75" strokeLinecap="round" />;
          })}
        </g>
        <g stroke="currentColor" strokeLinecap="round" className="text-brand-accent">
          <path className={flow("")} d="M376 96 C 300 150, 240 180, 150 210" strokeWidth="1.75" opacity="0.4" />
          <path className={flowSlow("")} d="M392 104 C 320 168, 250 205, 150 232" strokeWidth="1.5" opacity="0.28" />
        </g>
        <g className="text-brand-steel" stroke="currentColor" strokeLinecap="round">
          <path className={flowSlow("")} d="M150 220 C 210 214, 300 224, 400 300" strokeWidth="1.5" opacity="0.22" />
        </g>
      </svg>
    );
  }

  if (kind === "multi") {
    const rooms = [
      { x: 402, y: 96 },
      { x: 430, y: 170 },
      { x: 402, y: 246 },
    ];
    return (
      <svg className={common} viewBox="0 0 480 360" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g className="text-brand-steel" stroke="currentColor" strokeLinecap="round">
          {rooms.map((r, i) => (
            <path key={i} className={flow("")} d={`M150 190 C 260 ${190 + (r.y - 190) * 0.4}, 320 ${r.y}, ${r.x - 16} ${r.y}`} strokeWidth="1.5" opacity="0.3" />
          ))}
        </g>
        <g className="text-brand-primary" fill="currentColor">
          <circle cx="150" cy="190" r="4" opacity="0.5" />
        </g>
        <g className={cn("text-brand-accent", active && "af-glow")} stroke="currentColor" fill="none">
          {rooms.map((r, i) => (
            <rect key={i} x={r.x - 14} y={r.y - 10} width="24" height="20" rx="3" strokeWidth="1.5" opacity="0.55" />
          ))}
        </g>
      </svg>
    );
  }

  if (kind === "ducted") {
    const vents = [150, 220, 290, 360];
    return (
      <svg className={common} viewBox="0 0 480 360" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g className="text-brand-steel" stroke="currentColor" strokeLinecap="round">
          <line x1="110" y1="104" x2="410" y2="104" strokeWidth="1.5" opacity="0.4" />
          {vents.map((x, i) => (
            <line key={i} x1={x} y1="108" x2={x} y2="116" strokeWidth="3" opacity="0.35" />
          ))}
          {vents.map((x, i) => (
            <path key={`d${i}`} className={cn(active && "af-descend")} d={`M${x} 120 C ${x - 10} 190, ${x + 10} 230, ${x} 300`} strokeWidth="1.5" opacity="0.26" />
          ))}
        </g>
        <path className={cn(active && "af-descend", "text-brand-accent")} d="M220 120 C 210 190, 230 232, 220 300" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" opacity="0.45" />
      </svg>
    );
  }

  // cassette – 360° radial
  return (
    <svg className={common} viewBox="0 0 480 360" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g className="text-brand-steel" stroke="currentColor" fill="none">
        {[0, 1, 2].map((i) => (
          <ellipse
            key={i}
            className={cn(active && "af-radiate")}
            style={active ? { animationDelay: `${i * 1.1}s` } : undefined}
            cx="240"
            cy="188"
            rx="150"
            ry="74"
            strokeWidth="1.5"
            opacity="0.3"
          />
        ))}
      </g>
      <g className="text-brand-accent" stroke="currentColor" strokeLinecap="round" opacity="0.5">
        <path className={cn(active && "af-flow")} d="M240 188 C 300 176, 350 178, 402 196" strokeWidth="1.5" />
        <path className={cn(active && "af-flow")} d="M240 188 C 180 176, 130 178, 78 196" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
