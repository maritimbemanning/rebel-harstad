import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: "#1E1E1E",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20px",
        }}
      >
        <span
          style={{
            color: "#B8A67A",
            fontWeight: "bold",
            fontFamily: "Georgia, serif",
          }}
        >
          R
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
