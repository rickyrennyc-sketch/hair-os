"use client";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body style={{ padding: 24 }}>
        <h2>Hair OS™ Error</h2>
        <pre>{error.message}</pre>
      </body>
    </html>
  );
}
