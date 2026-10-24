import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#14211A",
          padding: "72px",
          color: "#FBF7F0",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4A46A" }}>
          New York City
        </div>
        <div style={{ fontSize: 84, fontFamily: "Georgia, serif", lineHeight: 1.05, marginTop: 16 }}>
          Lena Washington Therapy
        </div>
        <div style={{ fontSize: 28, marginTop: 24, maxWidth: 760, color: "#E7DCC8" }}>
          A quiet place to begin again.
        </div>
      </div>
    ),
    size,
  );
}
