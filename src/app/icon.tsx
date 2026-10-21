import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Same mark as the nav badge.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          background: "#f5f5f7",
          color: "#111113",
          fontSize: 28,
          fontWeight: 700,
        }}
      >
        {site.initials}
      </div>
    ),
    size,
  );
}
