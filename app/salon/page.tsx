export const dynamic = "force-static";

export default function SalonPage() {
  return (
    <main className="container">
      <div className="glass" style={{padding:"22px"}}>
        <h1 style={{margin:"0 0 8px",fontSize:28,fontWeight:950}}>SalonPro™</h1>
        <p style={{margin:0,opacity:.78,lineHeight:1.6}}>
          客人檔案 / SOP / 評分 / 付款流程（下一步再接資料庫）。
        </p>

        <div style={{marginTop:16, display:"grid", gap:12}} className="grid">
          <div className="glass" style={{padding:"14px", borderRadius:16, background:"rgba(255,255,255,.03)"}}>
            <div style={{fontWeight:900}}>Clients</div>
            <div style={{opacity:.78}}>profile cards（placeholder）</div>
          </div>
          <div className="glass" style={{padding:"14px", borderRadius:16, background:"rgba(255,255,255,.03)"}}>
            <div style={{fontWeight:900}}>SOP</div>
            <div style={{opacity:.78}}>checklist（placeholder）</div>
          </div>
          <div className="glass" style={{padding:"14px", borderRadius:16, background:"rgba(255,255,255,.03)"}}>
            <div style={{fontWeight:900}}>Payments</div>
            <div style={{opacity:.78}}>Stripe link（placeholder）</div>
          </div>
        </div>

        <div style={{marginTop:16, display:"flex", gap:10, flexWrap:"wrap"}}>
          <a className="btn ghost" href="/">← Back Home</a>
          <a className="btn primary" href="/vision">Go to Vision →</a>
        </div>
      </div>
    </main>
  );
}