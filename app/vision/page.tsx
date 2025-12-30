// app/vision/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Theme = "light" | "dark";
type Lang = "en" | "zh";
type Phase = "idle" | "loading" | "result";

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
    eyebrow: "HairVision™",
    title: "Try your look in a calm space.",
    subtitle:
      "Free, fun, and built to be shared. One preview can turn into ten conversations.",
    uploadLabel: "Upload a photo",
    uploadHint: "Front or slight angle works best.",
    loading1: "Balancing shape…",
    loading2: "Refining tone…",
    loading3: "Finding your calm look…",
    warmCoolLabel: "Warm / Cool",
    softContrastLabel: "Soft / Contrast",
    share: "Share",
    save: "Save",
    again: "Try again",
    emotionalEn: "This isn’t about trends. It’s about alignment.",
    emotionalZh: "「這不是追潮流，而是找到最適合你的版本。」",
  },
  zh: {
    eyebrow: "HairVision™",
    title: "先在安靜的空間裡玩一次。",
    subtitle:
      "免費、好玩、容易分享，一張預覽就能換來很多次真實的對話。",
    uploadLabel: "上傳照片",
    uploadHint: "正面或微側面會效果最好。",
    loading1: "平衡臉型比例中…",
    loading2: "微調明暗與色調中…",
    loading3: "為你找到最冷靜、最像你的版本…",
    warmCoolLabel: "冷 / 暖",
    softContrastLabel: "柔和 / 對比",
    share: "分享",
    save: "儲存",
    again: "再玩一次",
    emotionalEn: "This isn’t about trends. It’s about alignment.",
    emotionalZh: "「這不是追潮流，而是找到最適合你的版本。」",
  },
};

export default function VisionPage() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLang] = useState<Lang>("en");
  const [phase, setPhase] = useState<Phase>("idle");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [warmCool, setWarmCool] = useState(50);
  const [softContrast, setSoftContrast] = useState(50);

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

  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  const t = TOKENS[theme];
  const c = COPY[lang];

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    setPhase("loading");
    setTimeout(() => {
      setPhase("result");
    }, 1400);
  }

  async function handleShare() {
    if (!imageUrl) return;
    const url = window.location.href;
    const text =
      "This helped me see things more clearly before committing.\nThought you might like it too.";
    const title = "HairVision™ by Hair OS";

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
        return;
      } catch {
        // fallthrough
      }
    }

    try {
      await navigator.clipboard.writeText(`${text}\n\n${url}`);
      alert("Link copied. You can paste it anywhere to share.");
    } catch {
      alert("Unable to copy automatically. You can share this page URL.");
    }
  }

  function handleSave() {
    if (!imageUrl) return;
    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = "hairvision-preview.jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function handleAgain() {
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }
    setImageUrl(null);
    setWarmCool(50);
    setSoftContrast(50);
    setPhase("idle");
  }

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
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              borderRadius: 22,
              border: `1px solid ${t.border}`,
              backgroundColor: t.surface,
              padding: "1.6rem 1.4rem 1.9rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.4rem",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
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
                gap: "0.5rem",
                maxWidth: "520px",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: "2rem",
                  lineHeight: 1.22,
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                }}
              >
                {c.title}
              </h1>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.94rem",
                  lineHeight: 1.8,
                  color: t.textSecondary,
                }}
              >
                {c.subtitle}
              </p>
            </div>

            <div
              style={{
                borderRadius: 18,
                border: `1px dashed ${t.border}`,
                backgroundColor: t.surface2,
                padding: "1.2rem 1.1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.7rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: t.text,
                }}
              >
                {c.uploadLabel}
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.84rem",
                  color: t.textSecondary,
                }}
              >
                {c.uploadHint}
              </p>
              <label
                style={{
                  marginTop: "0.35rem",
                  alignSelf: "flex-start",
                  padding: "0.8rem 1.5rem",
                  borderRadius: 999,
                  backgroundColor: t.text,
                  color: theme === "dark" ? "#0E0E0F" : "#FAFAF8",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                {c.uploadLabel}
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </label>
            </div>

            <div
              style={{
                marginTop: "0.3rem",
                fontSize: "0.8rem",
                color: t.muted,
              }}
            >
              HairVision™ is free, fun, and made to be shared—like an IG Story you actually want to keep.
            </div>
          </div>

          <div
            style={{
              borderRadius: 22,
              border: `1px solid ${t.border}`,
              backgroundColor: t.surface2,
              padding: "1.4rem 1.3rem 1.7rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.1rem",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {phase === "idle" && <IdlePreview tokens={t} />}
            {phase === "loading" && <LoadingPreview tokens={t} />}
            {phase === "result" && (
              <ResultPreview
                tokens={t}
                copy={c}
                imageUrl={imageUrl}
                warmCool={warmCool}
                setWarmCool={setWarmCool}
                softContrast={softContrast}
                setSoftContrast={setSoftContrast}
                onShare={handleShare}
                onSave={handleSave}
                onAgain={handleAgain}
              />
            )}
          </div>
        </section>

        <section
          style={{
            marginTop: "0.5rem",
            borderRadius: 20,
            border: `1px solid ${t.border}`,
            backgroundColor: t.surface,
            padding: "1.2rem 1.1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
          }}
        >
          <div
            style={{
              fontSize: "0.9rem",
              color: t.textSecondary,
            }}
          >
            {c.emotionalEn}
          </div>
          <div
            style={{
              fontSize: "0.86rem",
              color: t.muted,
            }}
          >
            {c.emotionalZh}
          </div>
        </section>

        <footer
          style={{
            marginTop: "0.75rem",
            display: "flex",
            justifyContent: "space-between",
            gap: "0.75rem",
            flexWrap: "wrap",
            fontSize: "0.78rem",
            color: t.muted,
          }}
        >
          <span>Hair OS™ · HairVision is free, fun, and slightly addictive on purpose.</span>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: t.textSecondary,
            }}
          >
            ← Back to Home
          </Link>
        </footer>

        <style jsx global>{`
          body {
            margin: 0;
            font-family: system-ui, -apple-system, BlinkMacSystemFont,
              "SF Pro Text", "SF Pro Display", sans-serif;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
          }

          @keyframes hv-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @media (max-width: 879px) {
            main > div > section:nth-of-type(1) {
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
            label="EN"
            active={lang === "en"}
            onClick={() => setLang("en")}
            tokens={tokens}
          />
          <LangPill
            label="中文"
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

function IdlePreview(props: { tokens: (typeof TOKENS)["light"] }) {
  const { tokens } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.8rem",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "4 / 5",
          borderRadius: 18,
          border: `1px dashed ${tokens.border}`,
          backgroundColor: tokens.surface,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: tokens.textSecondary,
          fontSize: "0.9rem",
          textAlign: "center",
          padding: "0 1.5rem",
        }}
      >
        Upload a photo to see a calm, private HairVision preview here.
      </div>
    </div>
  );
}

function LoadingPreview(props: { tokens: (typeof TOKENS)["light"] }) {
  const { tokens } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.9rem",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "4 / 5",
          borderRadius: 18,
          border: `1px solid ${tokens.border}`,
          backgroundColor: tokens.surface,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "3px solid rgba(255,255,255,0.25)",
            borderTopColor: tokens.text,
            animation: "hv-spin 1s linear infinite",
          }}
        />
      </div>
      <div
        style={{
          fontSize: "0.9rem",
          lineHeight: 1.7,
          color: tokens.textSecondary,
        }}
      >
        <div>Balancing shape…</div>
        <div>Refining tone…</div>
        <div>Finding your calm look…</div>
      </div>
    </div>
  );
}

function ResultPreview(props: {
  tokens: (typeof TOKENS)["light"];
  copy: (typeof COPY)["en"] | (typeof COPY)["zh"];
  imageUrl: string | null;
  warmCool: number;
  setWarmCool: (v: number) => void;
  softContrast: number;
  setSoftContrast: (v: number) => void;
  onShare: () => void;
  onSave: () => void;
  onAgain: () => void;
}) {
  const {
    tokens,
    copy,
    imageUrl,
    warmCool,
    setWarmCool,
    softContrast,
    setSoftContrast,
    onShare,
    onSave,
    onAgain,
  } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.9rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "0.6rem",
        }}
      >
        <div
          style={{
            borderRadius: 16,
            border: `1px solid ${tokens.border}`,
            backgroundColor: tokens.surface,
            width: "100%",
            aspectRatio: "4 / 5",
            overflow: "hidden",
          }}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Original look"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : null}
        </div>
        <div
          style={{
            borderRadius: 16,
            border: `1px solid ${tokens.border}`,
            backgroundColor: tokens.surface,
            width: "100%",
            aspectRatio: "4 / 5",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Preview look"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "contrast(1.02)",
              }}
            />
          ) : null}
          <div
            style={{
              position: "absolute",
              left: "0.7rem",
              bottom: "0.7rem",
              padding: "0.25rem 0.7rem",
              borderRadius: 999,
              backgroundColor: "rgba(0,0,0,0.55)",
              color: "#FFFFFF",
              fontSize: "0.7rem",
            }}
          >
            HairVision™
          </div>
        </div>
      </div>

      <div
        style={{
          borderRadius: 14,
          border: `1px solid ${tokens.border}`,
          backgroundColor: tokens.surface,
          padding: "0.9rem 0.85rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.55rem",
        }}
      >
        <SliderRow
          label={copy.warmCoolLabel}
          value={warmCool}
          onChange={setWarmCool}
          tokens={tokens}
        />
        <SliderRow
          label={copy.softContrastLabel}
          value={softContrast}
          onChange={setSoftContrast}
          tokens={tokens}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.55rem",
        }}
      >
        <button
          type="button"
          onClick={onShare}
          style={{
            width: "100%",
            padding: "0.9rem 1.3rem",
            borderRadius: 999,
            border: "none",
            backgroundColor: tokens.text,
            color: tokens.bg,
            fontSize: "0.9rem",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          {copy.share}
        </button>
        <button
          type="button"
          onClick={onSave}
          style={{
            width: "100%",
            padding: "0.9rem 1.3rem",
            borderRadius: 999,
            border: `1px solid ${tokens.border}`,
            backgroundColor: tokens.surface,
            color: tokens.text,
            fontSize: "0.9rem",
            fontWeight: 400,
            cursor: "pointer",
          }}
        >
          {copy.save}
        </button>
        <button
          type="button"
          onClick={onAgain}
          style={{
            alignSelf: "flex-start",
            marginTop: "0.1rem",
            border: "none",
            background: "none",
            padding: 0,
            fontSize: "0.85rem",
            color: tokens.textSecondary,
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          {copy.again}
        </button>
      </div>
    </div>
  );
}

function SliderRow(props: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  tokens: (typeof TOKENS)["light"];
}) {
  const { label, value, onChange, tokens } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.35rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.8rem",
          color: tokens.textSecondary,
        }}
      >
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          width: "100%",
        }}
      />
    </div>
  );
}