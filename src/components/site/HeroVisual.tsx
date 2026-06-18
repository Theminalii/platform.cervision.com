import { motion } from "framer-motion";

/**
 * 3D-style floating glass cubes animation — inspired by loopai.az visuals.
 * Pure CSS/SVG + framer-motion, no external assets.
 */
export function HeroVisual() {
  const cubes = [
    { size: 180, x: "10%", y: "20%", delay: 0, rot: 18, dur: 8 },
    { size: 110, x: "70%", y: "8%", delay: 0.6, rot: -22, dur: 9 },
    { size: 90, x: "82%", y: "55%", delay: 1.2, rot: 14, dur: 7 },
    { size: 70, x: "4%", y: "70%", delay: 0.4, rot: -10, dur: 10 },
    { size: 55, x: "55%", y: "78%", delay: 1.6, rot: 26, dur: 8.5 },
    { size: 42, x: "40%", y: "12%", delay: 2.1, rot: -16, dur: 11 },
  ];

  return (
    <div className="relative h-full w-full select-none">
      {/* Soft radial backdrop */}
      <div className="absolute inset-0 [background:radial-gradient(60%_60%_at_50%_40%,oklch(0.55_0.22_255/0.22),transparent_70%)]" />

      {/* Glowing orb (like the blue sphere in reference) */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, oklch(0.95 0.05 255) 0%, oklch(0.62 0.24 255) 35%, oklch(0.32 0.22 268) 75%, oklch(0.18 0.15 270) 100%)",
          boxShadow:
            "0 0 80px 10px oklch(0.55 0.22 255 / 0.5), inset -10px -20px 40px oklch(0.18 0.15 270 / 0.6)",
        }}
        animate={{ y: [-8, 8, -8], scale: [1, 1.04, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbit ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[oklch(0.55_0.20_255/0.35)]"
        style={{
          borderTopColor: "oklch(0.72 0.17 165 / 0.7)",
          borderRightColor: "oklch(0.72 0.17 165 / 0.7)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[oklch(0.55_0.20_255/0.15)]"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      {/* Glass cubes */}
      {cubes.map((c, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: c.x, top: c.y, width: c.size, height: c.size, perspective: 600 }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -18, 0],
            rotate: [c.rot - 4, c.rot + 4, c.rot - 4],
          }}
          transition={{
            opacity: { duration: 0.8, delay: c.delay },
            scale: { duration: 0.8, delay: c.delay },
            y: { duration: c.dur, repeat: Infinity, ease: "easeInOut", delay: c.delay },
            rotate: { duration: c.dur * 1.3, repeat: Infinity, ease: "easeInOut", delay: c.delay },
          }}
        >
          <GlassCube />
        </motion.div>
      ))}
    </div>
  );
}

export function MiniOrbitVisual({
  className = "",
  variant = "orbit",
}: {
  className?: string;
  variant?: "orbit" | "prism" | "mesh";
}) {
  const cubes =
    variant === "prism"
      ? [
          { size: 96, x: "12%", y: "20%", delay: 0, rot: -12, dur: 8.2 },
          { size: 44, x: "70%", y: "12%", delay: 0.5, rot: 28, dur: 9.5 },
          { size: 58, x: "58%", y: "72%", delay: 1, rot: -22, dur: 7.8 },
        ]
      : variant === "mesh"
        ? [
            { size: 70, x: "16%", y: "16%", delay: 0, rot: 8, dur: 10 },
            { size: 70, x: "68%", y: "18%", delay: 0.6, rot: -12, dur: 9 },
            { size: 70, x: "42%", y: "70%", delay: 1.1, rot: 18, dur: 8.5 },
          ]
        : [
            { size: 88, x: "8%", y: "26%", delay: 0, rot: 14, dur: 8 },
            { size: 54, x: "68%", y: "14%", delay: 0.6, rot: -18, dur: 9 },
            { size: 48, x: "62%", y: "68%", delay: 1.2, rot: 12, dur: 7.5 },
          ];

  return (
    <div className={`relative h-full w-full select-none ${className}`}>
      <div
        className={`absolute inset-0 ${
          variant === "prism"
            ? "[background:radial-gradient(60%_60%_at_40%_40%,oklch(0.72_0.17_165/0.24),transparent_72%)]"
            : variant === "mesh"
              ? "[background:radial-gradient(58%_58%_at_50%_42%,oklch(0.52_0.20_250/0.18),transparent_70%)]"
              : "[background:radial-gradient(60%_60%_at_50%_45%,oklch(0.55_0.22_255/0.22),transparent_72%)]"
        }`}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            variant === "prism"
              ? "radial-gradient(circle at 35% 30%, oklch(0.96 0.04 165) 0%, oklch(0.74 0.18 175) 34%, oklch(0.38 0.18 220) 74%, oklch(0.18 0.10 245) 100%)"
              : "radial-gradient(circle at 35% 30%, oklch(0.95 0.05 255) 0%, oklch(0.62 0.24 255) 35%, oklch(0.32 0.22 268) 75%, oklch(0.18 0.15 270) 100%)",
          boxShadow:
            variant === "prism"
              ? "0 0 60px 8px oklch(0.72 0.17 165 / 0.35), inset -10px -20px 30px oklch(0.18 0.12 240 / 0.35)"
              : "0 0 60px 8px oklch(0.55 0.22 255 / 0.4), inset -10px -20px 30px oklch(0.18 0.15 270 / 0.45)",
        }}
        animate={{ y: [-6, 6, -6], scale: [1, 1.04, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      {variant === "mesh" ? (
        <motion.div
          className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[28%] border border-[oklch(0.55_0.20_255/0.22)]"
          style={{
            boxShadow: "inset 0 0 0 1px oklch(1 0 0 / 0.12)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      ) : (
        <motion.div
          className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[oklch(0.55_0.20_255/0.3)]"
          style={{
            borderTopColor:
              variant === "prism" ? "oklch(0.75 0.17 170 / 0.7)" : "oklch(0.72 0.17 165 / 0.65)",
            borderRightColor:
              variant === "prism" ? "oklch(0.62 0.20 220 / 0.55)" : "oklch(0.72 0.17 165 / 0.65)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />
      )}
      {cubes.map((c, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: c.x, top: c.y, width: c.size, height: c.size, perspective: 500 }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
            rotate: [c.rot - 4, c.rot + 4, c.rot - 4],
          }}
          transition={{
            opacity: { duration: 0.7, delay: c.delay },
            scale: { duration: 0.7, delay: c.delay },
            y: { duration: c.dur, repeat: Infinity, ease: "easeInOut", delay: c.delay },
            rotate: { duration: c.dur * 1.25, repeat: Infinity, ease: "easeInOut", delay: c.delay },
          }}
        >
          <GlassCube variant={variant} />
        </motion.div>
      ))}
    </div>
  );
}

function GlassCube({ variant = "orbit" }: { variant?: "orbit" | "prism" | "mesh" }) {
  return (
    <div
      className="relative h-full w-full rounded-[14%]"
      style={{
        background:
          variant === "prism"
            ? "linear-gradient(135deg, oklch(0.93 0.04 170 / 0.9) 0%, oklch(0.66 0.18 200 / 0.55) 44%, oklch(0.30 0.17 245 / 0.82) 100%)"
            : variant === "mesh"
              ? "linear-gradient(135deg, oklch(0.94 0.03 250 / 0.78) 0%, oklch(0.72 0.12 230 / 0.45) 50%, oklch(0.40 0.18 255 / 0.78) 100%)"
              : "linear-gradient(135deg, oklch(0.92 0.05 255 / 0.85) 0%, oklch(0.62 0.22 255 / 0.55) 45%, oklch(0.35 0.20 265 / 0.85) 100%)",
        boxShadow:
          variant === "prism"
            ? "0 30px 60px -20px oklch(0.26 0.12 230 / 0.48), inset 6px 6px 18px oklch(1 0 0 / 0.45), inset -8px -10px 24px oklch(0.20 0.12 240 / 0.45)"
            : "0 30px 60px -20px oklch(0.30 0.18 265 / 0.55), inset 6px 6px 18px oklch(1 0 0 / 0.45), inset -8px -10px 24px oklch(0.25 0.18 265 / 0.55)",
        backdropFilter: "blur(2px)",
        border: "1px solid oklch(1 0 0 / 0.35)",
        transform:
          variant === "mesh" ? "rotateX(12deg) rotateY(-10deg)" : "rotateX(18deg) rotateY(-22deg)",
      }}
    >
      {/* Highlight */}
      <div
        className="absolute left-[10%] top-[8%] h-[26%] w-[40%] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, oklch(1 0 0 / 0.85) 0%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />
      {/* Edge gleam */}
      <div
        className="absolute inset-0 rounded-[14%]"
        style={{
          background:
            "linear-gradient(225deg, transparent 60%, oklch(1 0 0 / 0.45) 78%, transparent 86%)",
        }}
      />
    </div>
  );
}
