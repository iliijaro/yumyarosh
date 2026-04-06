import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at center, rgba(77, 217, 192, 0.10) 0%, rgba(17, 20, 20, 1) 42%), linear-gradient(180deg, #0f1313 0%, #111414 100%)",
          color: "#f0f0ec",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "760px",
            height: "760px",
            borderRadius: "9999px",
            border: "1px solid rgba(77, 217, 192, 0.10)",
            opacity: 0.45,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "1040px",
            height: "1040px",
            borderRadius: "9999px",
            border: "1px solid rgba(77, 217, 192, 0.08)",
            opacity: 0.25,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#4dd9c0",
              display: "flex",
            }}
          >
            КЕЙТЭРЫНГ І ГАСТРАБОКСЫ
          </div>

          <div
            style={{
              width: 360,
              height: 360,
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "radial-gradient(circle, rgba(77, 217, 192, 0.20) 0%, rgba(77, 217, 192, 0.08) 38%, transparent 72%)",
              boxShadow: "0 0 80px rgba(77, 217, 192, 0.18)",
            }}
          >
            <img
              src="https://yumyarosh.by/logochef.png"
              alt="YumYarosh"
              width="320"
              height="320"
              style={{
                objectFit: "contain",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              marginTop: 4,
            }}
          >
            <div
              style={{
                fontSize: 72,
                lineHeight: 1,
                color: "#f0f0ec",
                display: "flex",
              }}
            >
              YumYarosh
            </div>

            <div
              style={{
                fontSize: 30,
                lineHeight: 1.2,
                color: "#4dd9c0",
                display: "flex",
              }}
            >
              Кейтэрынг у Мінску
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}