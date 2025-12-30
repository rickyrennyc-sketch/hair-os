You are fixing a merge conflict in a Next.js App Router project.

GOAL:
- Resolve all conflicts in app/page.tsx
- Keep the MOST RECENT Hair OS UI implementation
- Match the AI Studio Hair OS visual language exactly:
  - Black / white minimal system
  - Soft surfaces, subtle borders
  - Apple-like spacing, calm typography
- Support:
  - Light / Dark mode (token-based)
  - EN / 中文 toggle
- HairVision is FREE, playful, emotional, shareable (UGC-first)
- No marketing clutter, no extra copy

INSTRUCTIONS:
1. Open app/page.tsx conflict markers.
2. DISCARD all older versions.
3. KEEP ONLY the latest version that includes:
   - TOKENS object (light + dark)
   - Theme + Lang state
   - Clean hero section
   - Clear CTA → /vision
4. Ensure there are:
   - No conflict markers (<<< >>> ===)
   - No duplicated imports or components
5. Make sure the file builds without TypeScript errors.

FINAL STEP:
- Output the FULL final resolved app/page.tsx
- Save the file
- Mark conflict as resolved

Do NOT explain.
Do NOT summarize.
Just fix and finalize.
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
    <main
      style={{
        padding: "2rem",
        paddingTop: "4rem",
        maxWidth: "640px",
        margin: "0 auto",
        lineHeight: 1.6,
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 600,
          margin: 0,
          marginBottom: "0.75rem",
        }}
      >
        Welcome to Hair OS™
      </h1>

      <p style={{ fontSize: "0.95rem", margin: 0 }}>
        Apple-like AI Hair Analysis & Consultation System.
      </p>
    </main>
 