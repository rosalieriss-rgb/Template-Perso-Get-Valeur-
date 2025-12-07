// app/layout.jsx

export const metadata = {
  title: "Valeur – Luxury resale intelligence for eBay & Interencheres",
  description:
    "Valeur is a browser extension that helps you see the real market value of luxury handbags on eBay and Interencheres – before you bid or buy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          backgroundColor: "#020617", // slate-950
          color: "#e5e7eb", // slate-200
          fontFamily:
            "-apple-system, BlinkMacSystemFont, system-ui, -system-ui, 'SF Pro Text', sans-serif",
        }}
      >
        <header
          style={{
            borderBottom: "1px solid rgba(148, 163, 184, 0.35)", // slate-400/35
            backdropFilter: "blur(10px)",
            position: "sticky",
            top: 0,
            zIndex: 20,
          }}
        >
          <div
            style={{
              maxWidth: "1040px",
              margin: "0 auto",
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* valeur-logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 999,
                  border: "1px solid rgba(148, 163, 184, 0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                  fontSize: 18,
                  letterSpacing: "0.02em",
                }}
              >
                V
              </div>
              <span
                style={{
                  fontSize: 16,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#e5e7eb",
                }}
              >
                Valeur
              </span>
            </div>

            {/* Simple minimal nav text */}
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "#9ca3af",
              }}
            >
              <span style={{ opacity: 0.9 }}>How it works</span>
              <span style={{ opacity: 0.9 }}>For buyers</span>
              <span style={{ opacity: 0.9 }}>For sellers</span>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
