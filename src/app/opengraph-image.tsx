import { ImageResponse } from "next/og";
import { hero, site } from "@/content/site";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#1a1b1e",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#f5f5f7",
              color: "#111113",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            {site.initials}
          </div>
          <div style={{ fontSize: 28, fontWeight: 600 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 28, fontWeight: 600, color: "#3d8bff" }}>{site.title}</div>
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 64, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2 }}>
            <span>{hero.headline}</span>
            <span style={{ color: "#8e8e94" }}>{hero.headlineMuted}</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
