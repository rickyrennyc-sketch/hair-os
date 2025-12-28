import "./globals.css";

export const metadata = {
  title: "Hair OS™",
  description: "Apple-like Hair OS™",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-HK" style={{ background: "#0b0b0f" }}>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#0b0b0f",
          color: "#f5f7ff",
        }}
      >
        {children}
      </body>
    </html>
  );
}
