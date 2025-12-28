export const dynamic = "force-static";

export default function Page() {
  return (
    <main className="shell">
      <header className="top">
        <div className="brand">
          <div className="dot" aria-hidden="true" />
          <div>
            <div className="kicker">Hair OS™</div>
            <h1 className="title">Your Mirror, Your Glow.</h1>
            <p className="subtitle">
              Apple-like clarity for hair, face, and color decisions — in one calm dashboard.
            </p>
          </div>
        </div>

        <div className="ctaRow">
          <a className="btn primary" href="#modules">Start</a>
          <a className="btn ghost" href="#preview">Preview</a>
        </div>
      </header>

      <section id="preview" className="heroCard">
        <div className="heroLeft">
          <div className="pill">Mirror Mode</div>
          <h2 className="h2">See the best version of you — instantly.</h2>
          <p className="p">
            Calm UI. Clear recommendations. Luxury-level confidence.
          </p>

          <div className="miniGrid">
            <div className="mini">
              <div className="miniLabel">Face Harmony</div>
              <div className="miniValue">Balanced</div>
            </div>
            <div className="mini">
              <div className="miniLabel">Tone Direction</div>
              <div className="miniValue">Soft Warm</div>
            </div>
            <div className="mini">
              <div className="miniLabel">Maintenance</div>
              <div className="miniValue">Low</div>
            </div>
          </div>
        </div>

        <div className="heroRight" aria-hidden="true">
          <div className="glassFrame">
            <div className="glassGlow" />
            <div className="glassContent">
              <div className="mirrorTitle">Hair OS™</div>
              <div className="mirrorSub">Confidence Preview</div>
              <div className="barRow">
                <div className="barLabel">Soft Light</div>
                <div className="bar"><span style={{ width: "82%" }} /></div>
              </div>
              <div className="barRow">
                <div className="barLabel">Hair Health</div>
                <div className="bar"><span style={{ width: "76%" }} /></div>
              </div>
              <div className="barRow">
                <div className="barLabel">Face Frame</div>
                <div className="bar"><span style={{ width: "88%" }} /></div>
              </div>
              <div className="mirrorNote">Next: choose a module ↓</div>
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="section">
        <div className="sectionHead">
          <h3 className="h3">Modules</h3>
          <p className="muted">Pick one. Keep it simple. Get clarity.</p>
        </div>

        <div className="grid">
          <a className="card" href="#" onClick={(e)=>e.preventDefault()}>
            <div className="icon">✨</div>
            <div className="cardBody">
              <div className="cardTitle">HairVision™</div>
              <div className="cardText">Preview hairstyles & face framing like a magic mirror.</div>
              <div className="tagRow">
                <span className="tag">Visual</span>
                <span className="tag">Emotional value</span>
              </div>
            </div>
          </a>

          <a className="card" href="#" onClick={(e)=>e.preventDefault()}>
            <div className="icon">🎨</div>
            <div className="cardBody">
              <div className="cardTitle">HairFormula™</div>
              <div className="cardText">Tone mapping + formula notes for consistent results.</div>
              <div className="tagRow">
                <span className="tag">Color</span>
                <span className="tag">Precision</span>
              </div>
            </div>
          </a>

          <a className="card" href="#" onClick={(e)=>e.preventDefault()}>
            <div className="icon">🏷️</div>
            <div className="cardBody">
              <div className="cardTitle">SalonPro™</div>
              <div className="cardText">Client flow, notes, and upgrades — built for trust.</div>
              <div className="tagRow">
                <span className="tag">Ops</span>
                <span className="tag">Luxury workflow</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footerLine" />
        <div className="footerRow">
          <div className="muted">Hair OS™ • Built for clarity & confidence</div>
          <div className="muted">v0.1 (Static)</div>
        </div>
      </footer>
    </main>
  );
}
