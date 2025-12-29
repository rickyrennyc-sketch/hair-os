import { Metadata } from "next";
import "styles/globals.css";

export const metadata: Metadata = {
  title: "HairOS",
  description: "Modern hair salon management software",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}