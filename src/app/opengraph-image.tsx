import { ImageResponse } from "next/og";
export const alt = "Matthew Sutiono — Computer Science · Intelligent Systems. Software · Data · Applied AI.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#0B0D10", color: "#F5F5F5", display: "flex", flexDirection: "column", padding: "64px 76px", fontFamily: "Geist" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 80, height: 80, border: "1px solid #34373D", borderRadius: 10, fontSize: 34, letterSpacing: -2 }}>MS<span style={{ color: "#A866E6" }}>.</span></div>
        <div style={{ display: "flex", color: "#A1A1AA", fontSize: 22 }}>https://matthewsutiono.vercel.app/</div>
      </div>
      <div style={{ display: "flex", marginTop: 75, fontSize: 80, letterSpacing: -4 }}>Matthew Sutiono</div>
      <div style={{ display: "flex", marginTop: 20, fontSize: 30, color: "#A1A1AA" }}>Computer Science · Intelligent Systems</div>
      <div style={{ display: "flex", marginTop: "auto", paddingTop: 28, borderTop: "1px solid #34373D", fontSize: 24, color: "#A866E6" }}>Software · Data · Applied AI</div>
    </div>, size,
  );
}

