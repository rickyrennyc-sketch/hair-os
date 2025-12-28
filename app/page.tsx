const Icon = ({ name }: { name: "spark" | "eye" | "flask" | "briefcase" | "menu" }) => {
  // 超輕量 inline icons（唔洗裝任何 library）
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" as const, stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "menu") return (
    <svg {...common}><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>
  );
  if (name === "spark") return (
    <svg {...common}><path d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2z"/></svg>
  );
  if (name === "eye") return (
    <svg {...common}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>
  );
  if (name === "flask") return (
    <svg {...common}><path d="M10 2v6l-5 9a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-9V2"/><path d="M8 8h8"/></svg>
  );
  return (
    <svg {...common}><path d="M3 7h18"/><path d="M7 7v14h10V7"/><path d="M9 21v-8h6v8"/></svg>
  );
};

const Card = ({
  title,
  desc,
  badge,
  rightIcon,
}: {
  title: string;
  desc: string;
  badge: string;
  rightIcon: "eye" | "flask" | "briefcase";
}) => {
  return (
    <a className="card glass" href="#" onClick={(e) => e.preventDefault()}>
      <div className="cardTop">
        <span className="badge">{badge}</span>
        <span className="arrow" aria-hidden>
          <Icon name={rightIcon} />
        </span>
      </div>
      <h3 className="cardTitle">{title}</h3>
      <p className="cardDesc">{desc}</p>
      <div className="cardFooter">
        <span>Tap to open</span>
        <span>→</span>
      </div>
    </a>
  );
};

export default function Page() {
  return (
    <>
      {/* Top Nav */}
      <div className="nav">
        <div className="container">
          <div className="navInner glass">
            <div className="brand">
              <div className="logo" />
              <div className="brandText">
                <div className="brandTitle">Hair OS™</div>
                <div className="brandSub">Soft-light intelligence</div>
              </div>
            </div>

            <div className="navActions">
              <button className="iconBtn" aria-label="Menu">
                <Icon name="menu" />
              </button>
              <a className="primaryBtn" href="#" onClick={(e) => e.preventDefault()}>
                Start Session
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="hero">
        <div className="container">
          <div className="heroGrid">
            <div className="heroCard glass">
              <span className="pill">
                <Icon name="spark" /> Apple-style UI · Uber-simple flow
              </span>

              <h1 className="h1">See your best self.</h1>
              <p className="lead">
                Hair OS™ 將髮型、臉型、髮色分析變成「魔鏡」體驗：清晰、簡單、可行動。
                三個模組，一按即入。
              </p>

              <div className="ctaRow">
                <a className="ctaBig" href="#" onClick={(e) => e.preventDefault()}>
                  Open HairVision™
                </a>
                <a className="ctaGhost" href="#" onClick={(e) => e.preventDefault()}>
                  Open HairFormula™
                </a>
              </div>
            </div>

            <div className="sideCard glass">
              <div className="sectionTitle" style={{ marginTop: 0 }}>
                <h2>Today</h2>
                <span>Quiet-luxury dashboard</span>
              </div>

              <div className="kpi">
                <div className="kpiItem">
                  <div>
                    <div className="kpiLabel">Mode</div>
                    <div className="kpiValue">Pro</div>
                  </div>
                  <div className="kpiValue">●</div>
                </div>

                <div className="kpiItem">
                  <div>
                    <div className="kpiLabel">Modules</div>
                    <div className="kpiValue">3 Ready</div>
                  </div>
                  <div className="kpiValue">✓</div>
                </div>

                <div className="kpiItem">
                  <div>
                    <div className="kpiLabel">Session</div>
                    <div className="kpiValue">New</div>
                  </div>
                  <div className="kpiValue">＋</div>
                </div>
              </div>

              <div style={{ height: 12 }} />
              <span className="pill">Next step：接 AI API → 變真產品</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Core Cards */}
      <div className="section">
        <div className="container">
          <div className="sectionTitle">
            <h2>Core Modules</h2>
            <span>One-tap entry · zero confusion</span>
          </div>

          <div className="cards">
            <Card
              badge="Visual"
              title="HairVision™"
              desc="髮型 + 面型 + 髮色視覺模擬。讓客人一眼見到最靚自己。"
              rightIcon="eye"
            />
            <Card
              badge="Formula"
              title="HairFormula™"
              desc="專業配方建議：色階、底色、目標色、tone route，清晰可落地。"
              rightIcon="flask"
            />
            <Card
              badge="Business"
              title="SalonPro™"
              desc="比「管理工具」更高級：把你嘅審美、流程、信任感系統化。"
              rightIcon="briefcase"
            />
          </div>
        </div>
      </div>

      <div className="footer">
        Hair OS™ · Minimal Apple black-glass UI · Ready for API + FlutterFlow
      </div>
    </>
  );
}
