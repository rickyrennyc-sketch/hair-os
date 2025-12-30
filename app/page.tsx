export default function HomePage() {
  const styles: Record<string, React.CSSProperties> = {
    page: {
      padding: "2.25rem 1.25rem 4rem",
      paddingTop: "5.25rem", // leave space under your root layout header
      maxWidth: "980px",
      margin: "0 auto",
      lineHeight: 1.6,
    },
    hero: {
      display: "grid",
      gap: "1.25rem",
      alignItems: "start",
    },
    eyebrow: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "0.9rem",
      letterSpacing: "0.02em",
      opacity: 0.75,
      margin: 0,
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      padding: "0.2rem 0.55rem",
      borderRadius: "999px",
      border: "1px solid rgba(0,0,0,0.12)",
      fontSize: "0.8rem",
      lineHeight: 1,
      opacity: 0.85,
    },
    h1: {
      margin: 0,
      fontSize: "3rem",
      lineHeight: 1.06,
      letterSpacing: "-0.02em",
      fontWeight: 700,
    },
    sub: {
      margin: 0,
      fontSize: "1.05rem",
      opacity: 0.78,
      maxWidth: "60ch",
    },
    ctaRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem",
      marginTop: "0.75rem",
    },
    primaryBtn: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      padding: "0.85rem 1.05rem",
      borderRadius: "12px",
      border: "1px solid rgba(0,0,0,0.12)",
      textDecoration: "none",
      fontSize: "0.95rem",
      fontWeight: 600,
      background: "rgba(0,0,0,0.92)",
      color: "white",
    },
    secondaryBtn: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      padding: "0.85rem 1.05rem",
      borderRadius: "12px",
      border: "1px solid rgba(0,0,0,0.12)",
      textDecoration: "none",
      fontSize: "0.95rem",
      fontWeight: 600,
      background: "rgba(0,0,0,0.04)",
      color: "rgba(0,0,0,0.92)",
    },
    subtle: {
      marginTop: "0.25rem",
      fontSize: "0.9rem",
      opacity: 0.65,
    },
    divider: {
      height: "1px",
      background: "rgba(0,0,0,0.08)",
      margin: "2rem 0",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "0.9rem",
      marginTop: "1.25rem",
    },
    card: {
      border: "1px solid rgba(0,0,0,0.10)",
      borderRadius: "16px",
      padding: "1rem",
      background: "rgba(255,255,255,0.7)",
    },
    cardTitle: {
      margin: 0,
      fontSize: "1rem",
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    cardText: {
      margin: "0.5rem 0 0",
      fontSize: "0.95rem",
      opacity: 0.75,
    },
    sectionTitle: {
      margin: "0 0 0.75rem",
      fontSize: "1.15rem",
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    list: {
      margin: 0,
      paddingLeft: "1.1rem",
      opacity: 0.78,
    },
    footerNote: {
      marginTop: "2rem",
      fontSize: "0.9rem",
      opacity: 0.6,
    },
    anchor: { position: "relative", top: "-84px" }, // helps jump links land below header
  };

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <p style={styles.eyebrow}>
          <span style={styles.badge}>Hair OS™</span>
          <span>Apple-like AI Hair Analysis & Consultation System</span>
        </p>

        <h1 style={styles.h1}>See your best self—before the cut.</h1>

        <p style={styles.sub}>
          Hair OS™ turns a photo + a few answers into a clean, confidence-first
          consultation: face shape, hair color direction, and a plan you can
          actually maintain.
        </p>

        <div style={styles.ctaRow}>
          <a href="#modules" style={styles.primaryBtn} aria-label="Explore modules">
            Explore modules →
          </a>
          <a href="#how-it-works" style={styles.secondaryBtn} aria-label="How it works">
            How it works
          </a>
        </div>

        <div style={styles.subtle}>
          Built for a quiet-luxury client experience: simple, clear, no clutter.
        </div>
      </section>

      <div style={styles.divider} />

      <div id="modules" style={styles.anchor} />
      <section>
        <h2 style={styles.sectionTitle}>Core modules</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>HairVision™</h3>
            <p style={styles.cardText}>
              Preview shape + vibe. A clean visual direction before you commit.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>HairFormula™</h3>
            <p style={styles.cardText}>
              Tone and color direction simplified—soft, wearable, expensive-looking.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>SalonPro™</h3>
            <p style={styles.cardText}>
              A pro workflow: notes, consistency, and a repeatable consultation system.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Confidence Map</h3>
            <p style={styles.cardText}>
              The “why”: what to enhance, what to soften, and how to maintain it.
            </p>
          </div>
        </div>
      </section>

      <div style={styles.divider} />

      <div id="how-it-works" style={styles.anchor} />
      <section>
        <h2 style={styles.sectionTitle}>How it works</h2>
        <ul style={styles.list}>
          <li>Upload a photo (or use a reference).</li>
          <li>Answer a few questions (goal, maintenance, vibe).</li>
          <li>Get a clean recommendation + next steps.</li>
        </ul>

        <p style={styles.footerNote}>
          Next: we can wire these buttons to real pages (e.g. <code>/vision</code>,{" "}
          <code>/formula</code>) once those routes exist.
        </p>
      </section>
    </main>
  );
}