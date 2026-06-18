export function BrandLogo({
  className = "h-10",
  showText = false,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-3">
      <img
        src="https://cervision.com/photo/logo.png"
        alt="Cer Vision"
        className={className}
        loading="eager"
        decoding="async"
      />
      {showText && (
        <span className="text-sm font-semibold tracking-[0.08em] text-foreground md:text-base">
          CER VISION
        </span>
      )}
    </span>
  );
}
