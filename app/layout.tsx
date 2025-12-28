export const metadata = {
  title: "Hair OS™",
  description: "Apple-like Hair OS™ home for HairVision™, HairFormula™, SalonPro™",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-HK">
      <body>{children}</body>
    </html>
  );
}
