export default function Home() {
  return (
    <main style={{
      background: "#111414",
      color: "#f0f0ec",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        YumYarosh
      </h1>
      <p style={{ color: "#8a9090" }}>
        Catering & Gastroboxes
      </p>
    </main>
  );
}