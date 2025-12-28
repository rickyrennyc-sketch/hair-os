import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <a href="/" className="logo">Hair OS™</a>
          <nav className="nav">
            <a href="/vision">Vision</a>
            <a href="/formula">Formula</a>
            <a href="/salon">Salon</a>
            <a href="/aftercare">Aftercare</a>
          </nav>
        </header>

        <main className="container">{children}</main>

        <footer className="footer">
          © {new Date().getFullYear()} Hair OS™
        </footer>
      </body>
    </html>
  );
}