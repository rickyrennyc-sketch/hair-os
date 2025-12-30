// app/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";
type Lang = "en" | "zh";

const TOKENS = {
  light: {
    bg: "#FAFAF8",
    surface: "rgba(17,17,17,0.04)",
    surface2: "rgba(17,17,17,0.03)",
    border: "rgba(17,17,17,0.10)",
    text: "#111111",
    textSecondary: "rgba(17,17,17,0.70)",
    muted: "rgba(17,17,17,0.50)",
  },
  dark: {
    bg: "#0E0E0F",
    surface: "rgba(255,255,255,0.06)",
    surface2: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.12)",
    text: "#FFFFFF",
    textSecondary: "rgba(255,255,255,0.75)",
    muted: "rgba(255,255,255,0.55)",
  },
};

const THEME_KEY = "hair_os_theme";
const LANG_KEY = "hair_os_lang";

const COPY = {
  en: {
    eyebrow: "Hair OS™",
    title: "See your best self — before the cut.",
    subtitle:
      "Hair OS is a quiet, confidence-first layer between you and your stylist. It makes your haircut and color direction emotionally clear before anything changes.",
    body:
      "Less confusion, fewer screenshots, more alignment. HairVision™ lets you try looks in a calm, private space—then walk into the salon with a shared language instead of guesswork.",
    primaryCta: "Try HairVision →",
    secondaryCta: "How it works",
    modulesTitle: "Core modules",
    hvTitle: "HairVision™ (Free)",
    hvDesc:
      "Upload one photo → get a clean, confidence-first preview in seconds. Built for IG / TikTok UGC and quiet bragging rights.",
    hvCta: "Start preview",
    hfTitle: "HairFormula™ (Paid)",
    hfDesc:
      "For colorists: formula logic, tonal direction, and guardrails so great hair becomes repeatable, not accidental.",
    hfCta: "View details",
    spTitle: "SalonPro™ (Paid)",
    spDesc:
      "For salons: from first DM to long-term follow-up, a calmer, more predictable client journey.",
    spCta: "View plans",
    smallLine:
      "Built for a quiet-luxury client experience: simple, clear, no clutter.",
    footerMicro: "Hair, Decoded.",
    langEn: "EN",
    langZh: "中文",
  },
  zh: {
    eyebrow: "Hair OS™",
    title: "在剪之前，看見你最自信的自己。",
    subtitle:
      "Hair OS 是你和髮型師之間的一層安靜介面，在任何改變發生之前，先把「情緒上的確定感」放到第一位。",
    body:
      "更少猶豫、更少截圖溝通、更多共識。HairVision™ 讓你在私密空間裡先看見不同樣子，再帶著清楚的方向走進 Salon，而不是靠運氣。",
    primaryCta: "Try HairVision →",
    secondaryCta: "How it works",
    modulesTitle: "核心模組",
    hvTitle: "HairVision™（免費）",
    hvDesc:
      "上傳一張相 → 幾秒內得到乾淨、信心優先的視覺預覽。為 IG / TikTok UGC 而生，也為你自己而生。",
    hvCta: "開始預覽",
    hfTitle: "HairFormula™（收費）",
    hfDesc:
      "給髮型師 / 染髮師：配方邏輯、色彩方向、避雷提醒，讓好效果變得可複製。",
    hfCta: "了解細節",
    spTitle: "SalonPro™（收費）",
    spDesc:
      "給 Salon 團隊：從第一次私訊到回訪與轉介紹，把每一次服務變得更穩定、可預期。",
    spCta: "查看方案",
    smallLine:
      "為安靜奢華的體驗而設計：簡單、清楚、不打擾。",
    footerMicro: "Hair, Decoded.",
    langEn: "EN",
    langZh: "中文",
  },
};

export default function HomePage() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const storedTheme = window.localStorage.getItem(THEME_KEY) as Theme | null;
      const storedLang = window.localStorage.getItem(LANG_KEY) as Lang | null;
      if (storedTheme === "light" || storedTheme === "dark") {
        setTheme(storedTheme);
      }
      if (storedLang === "en" || storedLang === "zh") {
        setLang(storedLang);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const t = TOKENS[theme];
  const c = COPY[lang];

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: t.bg,
        backgroundImage:
          theme === "dark"
            ? "radial-gradient(circle at top, rgba(255,255,255,0.08) 0, transparent 55%)"
            : "radial-gradient(circle at top, rgba(0,0,0,0.03) 0, transparent 55%)",
        color: t.text,
        display: "flex",
        justifyContent: "center",
        padding: "1.75rem 1.25rem 2.5rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1040px",
          display: "flex",
          flexDirection: "column",
          gap: "1.75rem",
        }}
      >
        <TopBar
          theme={theme}
          setTheme={setTheme}
          lang={lang}
          setLang={setLang}
          tokens={t}
        />

        <section
          style={{
            borderRadius: 22,
            border: `1px solid ${t.border}`,
            backgroundColor: t.surface,
            padding: "1.6rem 1.4rem 1.9rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.6rem",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.9rem",
              maxWidth: "720px",
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: t.muted,
              }}
            >
              {c.eyebrow}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: "2.4rem",
                  lineHeight: 1.18,
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                }}
              >
                {c.title}
              </h1>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.96rem",
                  lineHeight: 1.7,
                  color: t.textSecondary,
                }}
              >
                {c.subtitle}
              </p>
            </div>
          </div>

          <p
            style={{
              margin: 0,
              marginTop: "0.4rem",
              fontSize: "0.9rem",
              lineHeight: 1.8,
              color: t.textSecondary,
              maxWidth: "720px",
            }}
          >
            {c.body}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.8rem",
              alignItems: "center",
              marginTop: "0.4rem",
            }}
          >
            <Link
              href="/vision"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.9rem 1.9rem",
                borderRadius: 999,
                backgroundColor: t.text,
                color: theme === "dark" ? "#0E0E0F" : "#FAFAF8",
                fontSize: "0.92rem",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              {c.primaryCta}
            </Link>
            <button
              type="button"
              style={{
                padding: "0.82rem 1.3rem",
                borderRadius: 999,
                border: `1px solid ${t.border}`,
                backgroundColor: t.surface2,
                color: t.textSecondary,
                fontSize: "0.86rem",
                fontWeight: 400,
                cursor: "default",
              }}
            >
              {c.secondaryCta}
            </button>
          </div>
        </section>

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.1rem",
          }}
        >
          <div
            style={{
              fontSize: "0.96rem",
              fontWeight: 500,
              color: t.text,
            }}
          >
            {c.modulesTitle}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            <ModuleCard
              title={c.hvTitle}
              desc={c.hvDesc}
              cta={c.hvCta}
              tokens={t}
              highlight
            />
            <ModuleCard
              title={c.hfTitle}
              desc={c.hfDesc}
              cta={c.hfCta}
              tokens={t}
            />
            <ModuleCard
              title={c.spTitle}
              desc={c.spDesc}
              cta={c.spCta}
              tokens={t}
            />
          </div>
        </section>

        <footer
          style={{
            marginTop: "0.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.35rem",
            fontSize: "0.78rem",
            color: t.muted,
          }}
        >
          <span>{c.smallLine}</span>
          <span>{c.footerMicro}</span>
        </footer>

        <style jsx global>{`
          body {
            margin: 0;
            font-family: system-ui, -apple-system, BlinkMacSystemFont,
              "SF Pro Text", "SF Pro Display", sans-serif;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
          }

          @media (max-width: 879px) {
            main > div > section:nth-of-type(2) > div:nth-of-type(2) {
              grid-template-columns: minmax(0, 1fr);
            }
          }
        `}</style>
      </div>
    </main>
  );
}

function TopBar(props: {
  theme: Theme;
  setTheme: (t: Theme) => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  tokens: (typeof TOKENS)["light"];
}) {
  const { theme, setTheme, lang, setLang, tokens } = props;

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 999,
        border: `1px solid ${tokens.border}`,
        backgroundColor: tokens.surface2,
        padding: "0.5rem 0.75rem",
      }}
    >
      <div
        style={{
          fontSize: "0.88rem",
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: tokens.textSecondary,
        }}
      >
        Hair OS™
      </div>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            borderRadius: 999,
            padding: "0.16rem",
            border: `1px solid ${tokens.border}`,
            backgroundColor: tokens.surface,
          }}
        >
          <LangPill
            label={COPY.en.langEn}
            active={lang === "en"}
            onClick={() => setLang("en")}
            tokens={tokens}
          />
          <LangPill
            label={COPY.zh.langZh}
            active={lang === "zh"}
            onClick={() => setLang("zh")}
            tokens={tokens}
          />
        </div>

        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          style={{
            borderRadius: 999,
            border: `1px solid ${tokens.border}`,
            backgroundColor: tokens.surface,
            padding: "0.25rem 0.5rem",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}

function LangPill(props: {
  label: string;
  active: boolean;
  onClick: () => void;
  tokens: (typeof TOKENS)["light"];
}) {
  const { label, active, onClick, tokens } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: "none",
        borderRadius: 999,
        padding: "0.2rem 0.8rem",
        fontSize: "0.8rem",
        fontWeight: 500,
        cursor: "pointer",
        backgroundColor: active ? tokens.text : "transparent",
        color: active ? tokens.bg : tokens.textSecondary,
      }}
    >
      {label}
    </button>
  );
}

function ModuleCard(props: {
  title: string;
  desc: string;
  cta: string;
  tokens: (typeof TOKENS)["light"];
  highlight?: boolean;
}) {
  const { title, desc, cta, tokens, highlight } = props;
  return (
    <div
      style={{
        borderRadius: 20,
        border: `1px solid ${tokens.border}`,
        backgroundColor: highlight ? tokens.surface : tokens.surface2,
        padding: "1.3rem 1.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.7rem",
      }}
    >
      <div
        style={{
          fontSize: "0.95rem",
          fontWeight: 500,
          color: tokens.text,
        }}
      >
        {title}
      </div>
      <p
        style={{
          margin: 0,
          fontSize: "0.86rem",
          lineHeight: 1.7,
          color: tokens.textSecondary,
        }}
      >
        {desc}
      </p>
      <div
        style={{
          marginTop: "0.3rem",
          fontSize: "0.82rem",
          fontWeight: 500,
          color: tokens.muted,
        }}
      >
        {cta}
      </div>
    </div>
  );
}