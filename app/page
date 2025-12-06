// app/page.jsx

"use client";

import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    // Later: send to real waitlist backend or form tool
  };

  return (
    <main
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1040px",
          width: "100%",
          padding: "56px 20px 72px",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.15fr) minmax(0, 1fr)",
          gap: 40,
        }}
      >
        {/* LEFT – text & waitlist */}
        <section>
          <p
            style={{
              fontSize: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#9ca3af",
              marginBottom: 12,
            }}
          >
            Browser extension · Private beta
          </p>

          <h1
            style={{
              fontSize: 40,
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 18,
              fontWeight: 500,
            }}
          >
            See the{" "}
            <span style={{ color: "#38bdf8" /* sky-400 */ }}>true value</span> of
            every luxury bag on eBay & Interencheres.
          </h1>

          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "#9ca3af",
              maxWidth: 540,
              marginBottom: 24,
            }}
          >
            Valeur analyses live listings against historical sales to show you if
            a bag is{" "}
            <span style={{ color: "#e5e7eb" }}>underpriced, fair, or overpriced</span>{" "}
            – including shipping, buyer fees and the realistic resale value.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginBottom: 22,
              fontSize: 14,
              color: "#e5e7eb",
            }}
          >
            <div>• Focused on luxury handbags (Chanel, Hermès, Louis Vuitton…)</div>
            <div>• Works first on eBay and Interencheres, more platforms later</div>
            <div>• Designed for both collectors and resellers</div>
          </div>

          {/* Waitlist card */}
          <div
            style={{
              marginTop: 18,
              padding: 18,
              borderRadius: 16,
              border: "1px solid rgba(148, 163, 184, 0.35)",
              background:
                "radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 60%) #020617",
              maxWidth: 460,
            }}
          >
            {!submitted ? (
              <>
                <p
                  style={{
                    fontSize: 14,
                    marginBottom: 10,
                    color: "#e5e7eb",
                  }}
                >
                  Join the early access list and be the first to try the extension when
                  Valeur launches.
                </p>
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    style={{
                      flex: 1,
                      minWidth: 0,
                      borderRadius: 999,
                      border: "1px solid rgba(148, 163, 184, 0.7)",
                      padding: "9px 12px",
                      fontSize: 14,
                      backgroundColor: "rgba(15,23,42,0.9)",
                      color: "#e5e7eb",
                      outline: "none",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      borderRadius: 999,
                      border: "none",
                      padding: "9px 18px",
                      fontSize: 13,
                      fontWeight: 500,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      background:
                        "linear-gradient(135deg, #38bdf8, #22c55e)", // sky-400 to green-500
                      color: "#020617",
                      cursor: "pointer",
                    }}
                  >
                    Join waitlist
                  </button>
                </form>
                <p
                  style={{
                    marginTop: 8,
                    fontSize: 11,
                    color: "#94a3b8",
                  }}
                >
                  No spam, no newsletter. Just a few emails when Valeur is ready and new
                  features launch.
                </p>
              </>
            ) : (
              <p
                style={{
                  fontSize: 14,
                  color: "#e5e7eb",
                }}
              >
                Merci 💌 Your email is noted. You’ll receive an invitation as soon as the
                Valeur beta for luxury bags goes live.
              </p>
            )}
          </div>

          <p
            style={{
              marginTop: 20,
              fontSize: 11,
              color: "#6b7280",
            }}
          >
            Built in Milan. Not affiliated with eBay, Interencheres or any luxury
            brands.
          </p>
        </section>

        {/* RIGHT – “mocked” extension preview */}
        <section
          style={{
            alignSelf: "stretch",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 420,
              borderRadius: 22,
              border: "1px solid rgba(148, 163, 184, 0.45)",
              background:
                "radial-gradient(circle at top, rgba(15,23,42,1), rgba(15,23,42,0.96))",
              padding: 18,
              boxShadow:
                "0 18px 40px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)",
            }}
          >
            {/* Mini header like an eBay product page with Valeur badge */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#9ca3af",
                    marginBottom: 4,
                  }}
                >
                  Listing insight
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#e5e7eb",
                    margin: 0,
                  }}
                >
                  Chanel Classic Flap – Medium, Lambskin
                </p>
              </div>
              <div
                style={{
                  fontSize: 11,
                  padding: "4px 10px",
                  borderRadius: 999,
                  border: "1px solid rgba(148, 163, 184, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 999,
                    border: "1px solid rgba(148, 163, 184, 0.7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                  }}
                >
                  V
                </span>
                <span>Valeur insight</span>
              </div>
            </div>

            <div
              style={{
                borderRadius: 16,
                border: "1px solid rgba(148, 163, 184, 0.45)",
                padding: 14,
                marginBottom: 12,
                background:
                  "radial-gradient(circle at top left, rgba(56,189,248,0.12), rgba(15,23,42,1))",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "#94a3b8",
                    }}
                  >
                    Current price (incl. fees)
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    5 200 €
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "#94a3b8",
                    }}
                  >
                    Valeur estimate
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 20,
                      fontWeight: 500,
                      color: "#4ade80",
                    }}
                  >
                    5 700 €
                  </p>
                </div>
              </div>

              <div
                style={{
                  marginTop: 8,
                  fontSize: 12,
                  color: "#e5e7eb",
                }}
              >
                <div style={{ marginBottom: 4 }}>Deal quality: <strong>Fair</strong></div>
                <div style={{ fontSize: 11, color: "#9ca3af" }}>
                  Based on 127 similar sales in the last 12 months (EU), same size and
                  condition. Estimated resale value:{" "}
                  <span style={{ color: "#e5e7eb" }}>4 900–5 200 €</span>.
                </div>
              </div>
            </div>

            {/* Three-pill summary */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0,1fr))",
                gap: 8,
                fontSize: 11,
              }}
            >
              <div
                style={{
                  borderRadius: 999,
                  padding: "7px 10px",
                  border: "1px solid rgba(148, 163, 184, 0.5)",
                  backgroundColor: "rgba(15,23,42,0.9)",
                }}
              >
                <div style={{ color: "#9ca3af", marginBottom: 2 }}>Shipping</div>
                <div style={{ color: "#e5e7eb" }}>+35 € · included</div>
              </div>
              <div
                style={{
                  borderRadius: 999,
                  padding: "7px 10px",
                  border: "1px solid rgba(148, 163, 184, 0.5)",
                  backgroundColor: "rgba(15,23,42,0.9)",
                }}
              >
                <div style={{ color: "#9ca3af", marginBottom: 2 }}>Buyer fees</div>
                <div style={{ color: "#e5e7eb" }}>+7 % · included</div>
              </div>
              <div
                style={{
                  borderRadius: 999,
                  padding: "7px 10px",
                  border: "1px solid rgba(148, 163, 184, 0.5)",
                  backgroundColor: "rgba(15,23,42,0.9)",
                }}
              >
                <div style={{ color: "#9ca3af", marginBottom: 2 }}>Risk level</div>
                <div style={{ color: "#facc15" }}>Medium</div>
              </div>
            </div>

            <p
              style={{
                marginTop: 14,
                fontSize: 11,
                color: "#9ca3af",
              }}
            >
              Valeur focuses first on luxury handbags on eBay and Interencheres, then extends
              to more categories and platforms.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
