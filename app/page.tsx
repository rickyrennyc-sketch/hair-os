export const dynamic = "force-static";

const cards = [
  { title: "HairVision™", desc: "用 AI 模擬你最適合嘅髮型 / 髮色", tag: "Magic Mirror", href: "/vision" },
  { title: "HairFormula™", desc: "色彩配方引擎：目標色 → 可執行配方", tag: "Color Engine", href: "/formula" },
  { title: "SalonPro™", desc: "店內流程 / SOP / 客人檔案一鍵管理", tag: "Operations", href: "/salon" },
];

export default function Page() {
  return (
    <main className="container">
      <header style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{
            width:10,height:10,borderRadius:999,
            background:"rgba(130,255,214,.9)",
            boxShadow:"0 0 40px rgba(130,255,214,.35)"
          }} />
          <div>
            <div style={{fontSize:18,fontWeight:900,letterSpacing:.2}}>Hair OS™</div>
            <div style={{fontSize:13,opacity:.75,marginTop:2}}>Apple-like AI Hair Analysis & Consultation</div>
          </div>
        </div>

        <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
          <a className="btn primary" href="/vision">Start Scan</a>
          <a className="btn ghost" href="/formula">Generate Formula</a>
        </div>
      </header>

      <section style={{marginTop:22}} className="glass">
        <div style={{padding:"26px 22px", position:"relative", overflow:"hidden"}}>
          <div style={{opacity:.85,fontWeight:800,fontSize:13}}>Your best self, instantly.</div>
          <h1 style={{margin:"10px 0 10px",fontSize:38,lineHeight:1.08,fontWeight:950,letterSpacing:-.6}}>
            像魔鏡一樣，幫客人一眼睇到<span style={{textShadow:"0 0 26px rgba(130,255,214,.22)"}}> 最靚嘅自己</span>
          </h1>
          <p style={{margin:0,opacity:.78,fontSize:15,lineHeight:1.6,maxWidth:"70ch"}}>
            Hair OS™ 係你嘅 AI 造型系統：髮型 × 臉型 × 髮色分析，清晰、簡單、可落地。
          </p>

          <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:16}}>
            <a className="pill" href="/vision">📸 HairVision™</a>
            <a className="pill" href="/formula">🎨 HairFormula™</a>
            <a className="pill" href="/salon">🧾 SalonPro™</a>
          </div>
        </div>
      </section>

      <section style={{marginTop:18}} className="grid">
        {cards.map((c) => (
          <a key={c.title} href={c.href} className="glass" style={{
            textDecoration:"none", padding:"16px 16px 14px",
            borderRadius:18, background:"rgba(255,255,255,.03)",
            display:"block"
          }}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10}}>
              <div style={{fontWeight:950,fontSize:16}}>{c.title}</div>
              <div style={{
                fontSize:12,padding:"6px 10px",borderRadius:999,
                background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.10)",
                opacity:.9,whiteSpace:"nowrap"
              }}>{c.tag}</div>
            </div>
            <div style={{marginTop:10,opacity:.78,lineHeight:1.55,fontSize:14}}>{c.desc}</div>
            <div style={{marginTop:12,fontWeight:950,fontSize:13,opacity:.9}}>Open →</div>
          </a>
        ))}
      </section>

      <footer style={{
        marginTop:22, display:"flex", justifyContent:"space-between", gap:10,
        opacity:.65, fontSize:12, borderTop:"1px solid rgba(255,255,255,.10)", paddingTop:14
      }}>
        <div>© {new Date().getFullYear()} Hair OS™</div>
        <div>Built on Vercel</div>
      </footer>
    </main>
  );
}