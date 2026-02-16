import * as React from "react";

export default function ProfilePicture({
  src,
  alt,
  className = "",
  size = "clamp(72px, 12vw, 128px)",
  ring = true,
  fallback,
}: {
  src?: string;
  alt: string;
  className?: string;

  size?: string;

  ring?: boolean;
  fallback?: string; 
}) {
  const [failed, setFailed] = React.useState(false);
  const showImage = !!src && !failed;

  return (
    <div
      className={`relative inline-flex ${className}`}
      style={{ ["--pp-size" as any]: size }}
    >
      <div
        className={[
          "overflow-hidden rounded-full bg-gray-100",
          "flex items-center justify-center",
          "w-[var(--pp-size)] h-[var(--pp-size)]",
          ring ? "ring-2 ring-white outline outline-1 outline-gray-200" : "",
        ].join(" ")}
        aria-label={alt}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="select-none font-semibold text-gray-600 text-[clamp(12px,2.2vw,16px)]">
            {fallback ?? alt.trim().slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
    </div>
  );
}
