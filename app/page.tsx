export const dynamic = "force-static";

export default function Page() {
  return (
    <main className="wrap">
      <header className="topbar">
        <div className="brand">
          <div className="dot" />
          <span>Hair OS™</span>
        </div>

        <a className="pill" href="#modules" aria-label="Jump to modules">
          Explore
        </a>
      </header>

      <section className="hero">
        <div className="heroLeft">
          <h1 className="title">
            你嘅髮型
            <span className="titleGlow">一眼就明。</span>
          </h1>

          <p className="subtitle">
            Hair OS™ 係一個「像魔鏡」嘅髮型系統：更清晰、更簡單、更有情緒價值。
            你會見到自己最靚嗰個版本。
          </p>

          <div className="ctaRow">
            <a className="btnPrimary" href="#modules">
              開始分析
            </a>
            <a className="btnGhost" href="#how">
              點樣用
            </a>
          </div>

          <div className="metaRow">
            <div className="chip">Apple-like UI</div>
            <div className="chip">Uber-style cards</div>
            <div className="chip">Fast • Clear • Premium</div>
          </div>
        </div>

        <div className="heroRight" aria-hidden="true">
          <div className="glassPhone">
            <div className="glassTop">
              <div className="signal" />
              <div className="signal" />
              <div className="signal" />
            </div>

            <div className="glassBody">
              <div className="miniTitle">Today</div>
              <div className="miniCard">
                <div className="miniIcon" />
                <div className="miniText">
                  <div className="miniLine strong">Face-Light Glow</div>
                  <div className="miniLine">soft light • natural expensive</div>
                </div>
              </div>
              <div className="miniCard">
                <div className="miniIcon mint" />
                <div className="miniText">
                  <div className="miniLine strong">Hair Vision™</div>
                  <div className="miniLine">see your best hairstyle</div>
                </div>
              </div>
              <div className="miniCard">
                <div className="miniIcon gold" />
                <div className="miniText">
                  <div className="miniLine strong">Hair Formula™</div>
                  <div className="miniLine">tone • lift • maintain</div>
                </div>
              </div>
              <div className="miniFooter">Ricky Ren system-ready</div>
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="modules">
        <h2 className="h2">三大模組</h2>
        <p className="p2">一按就明，一用就上癮。每個模組都係為「清晰＋情緒價值」設計。</p>

        <div className="grid">
          <a className="card" href="#" onClick={(e) => e.preventDefault()}>
            <div className="cardTop">
              <div className="icon mint" />
              <div className="cardTitle">Hair Vision™</div>
            </div>
            <div className="cardDesc">
              先睇效果，再決定。用「柔光＋臉型比例」方式，俾你見到最靚自己。
            </div>
            <div className="cardFoot">Preview • Style • Emotion</div>
          </a>

          <a className="card" href="#" onClick={(e) => e.preventDefault()}>
            <div className="cardTop">
              <div className="icon gold" />
              <div className="cardTitle">Hair Formula™</div>
            </div>
            <div className="cardDesc">
              清楚拆解：底色、提淺、色相、修正、護理。配方「可重複、可落地」。
            </div>
            <div className="cardFoot">Tone • Lift • Maintain</div>
          </a>

          <a className="card" href="#" onClick={(e) => e.preventDefault()}>
            <div className="cardTop">
              <div className="icon blue" />
              <div className="cardTitle">Salon Pro™</div>
            </div>
            <div className="cardDesc">
              給店主嘅系統：SOP、客人檔案、建議流程、復購提醒，令出品更穩更快。
            </div>
            <div className="cardFoot">SOP • Team • Growth</div>
          </a>
        </div>
      </section>

      <section id="how" className="how">
        <h2 className="h2">點樣用（30 秒）</h2>
        <ol className="steps">
          <li>
            <span className="stepNum">1</span>
            上傳頭髮/正面相（或選擇你目標風格）
          </li>
          <li>
            <span className="stepNum">2</span>
            Hair Vision™ 先俾你見到「最靚方案」
          </li>
          <li>
            <span className="stepNum">3</span>
            Hair Formula™ 產出「可落地」色彩方向
          </li>
        </ol>

        <div className="bottomCta">
          <a className="btnPrimary" href="#modules">
            立即開始
          </a>
          <div className="fine">
            Built for clarity. Designed for confidence.
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footerLeft">Hair OS™</div>
        <div className="footerRight">© {new Date().getFullYear()} Ricky Ren</div>
      </footer>
    </main>
  );
}