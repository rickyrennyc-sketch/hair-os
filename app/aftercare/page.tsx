import React, { useState, useEffect } from "react";

const AftercarePage = () => {
  const [formData, setFormData] = useState({
    serviceType: "Balayage / Highlights",
    hairType: "Fine",
    lifestyle: "Gym",
    washFrequency: "Daily",
    toneGoal: "Cool",
  });

  const [generatedCare, setGeneratedCare] = useState<string | null>(null);

  useEffect(() => {
    const lastPlan = localStorage.getItem("lastAftercarePlan");
    if (lastPlan) {
      setGeneratedCare(lastPlan);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateAftercare = () => {
    const aftercare = `🧴 Washing Guide\n- Use sulfate-free shampoo and conditioner suitable for ${formData.hairType} hair.\n\n🎨 Color Care\n- Keep your ${formData.serviceType} vibrant by avoiding chlorine and harsh sunlight. Optional: ${formData.lifestyle} adjustments.\n\n🔥 Heat Rules\n- Always use a heat protectant when styling. Minimize heat usage to maintain your tone goal of ${formData.toneGoal}.\n\n📅 Maintenance Timeline\n- Refresh your color every 4–6 weeks.`;
    setGeneratedCare(aftercare);
    localStorage.setItem("lastAftercarePlan", aftercare);
  };

  const copyToClipboard = () => {
    if (generatedCare) navigator.clipboard.writeText(generatedCare);
  };

  const sharePlan = () => {
    if (generatedCare && navigator.share) {
      navigator.share({
        title: "My Aftercare Plan",
        text: generatedCare,
      });
    }
  };

  const saveToNotes = () => {
    if (generatedCare) {
      const notes = JSON.parse(localStorage.getItem("notes") || "[]");
      notes.push(generatedCare);
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  };

  return (
    <div style={{ padding: 20, color: "white", background: "#121212", fontFamily: "Arial", minHeight: "100vh" }}>
      <a href="/" style={{ color: "#00adef", textDecoration: "none", fontSize: 14 }}>
        ← Back to Hair OS
      </a>
      <h1 style={{ fontSize: 32, textAlign: "center", margin: "20px 0" }}>Aftercare™</h1>
      <h3 style={{ fontSize: 16, textAlign: "center", marginBottom: 40 }}>「為你今次造型度身訂造嘅護理建議，保持最好狀態更耐」</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 400, margin: "0 auto" }}>
        
        {/* Form Selectors */}
        <label>Service Type:
          <select name="serviceType" value={formData.serviceType} onChange={handleInputChange}>
            <option>Balayage / Highlights</option>
            <option>Full Color</option>
            <option>Bleach + Tone</option>
            <option>Treatment Only</option>
          </select>
        </label>

        <label>Hair Type:
          <select name="hairType" value={formData.hairType} onChange={handleInputChange}>
            <option>Fine</option>
            <option>Medium</option>
            <option>Thick</option>
          </select>
        </label>

        <label>Lifestyle:
          <select name="lifestyle" value={formData.lifestyle} onChange={handleInputChange}>
            <option>Gym</option>
            <option>Swim</option>
            <option>Office</option>
            <option>Outdoor</option>
          </select>
        </label>

        <label>Wash Frequency:
          <select name="washFrequency" value={formData.washFrequency} onChange={handleInputChange}>
            <option>Daily</option>
            <option>Every 2–3 days</option>
            <option>Weekly</option>
          </select>
        </label>

        <label>Tone Goal:
          <select name="toneGoal" value={formData.toneGoal} onChange={handleInputChange}>
            <option>Cool</option>
            <option>Neutral</option>
            <option>Warm</option>
          </select>
        </label>

        <button
          onClick={generateAftercare}
          style={{ padding: 10, background: "#00adef", color: "white", border: "none", borderRadius: 5 }}
        >
          Generate My Aftercare
        </button>
      </div>

      {generatedCare && (
        <div style={{ marginTop: 40, padding: 20, background: "#1e1e1e", borderRadius: 8 }}>
          <pre style={{ whiteSpace: "pre-wrap", color: "#ddd" }}>{generatedCare}</pre>

          <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
            <button
              onClick={copyToClipboard}
              style={{ padding: 10, background: "#555", color: "white", border: "none", borderRadius: 5 }}
            >
              Copy Aftercare
            </button>
            <button
              onClick={sharePlan}
              style={{ padding: 10, background: "#555", color: "white", border: "none", borderRadius: 5 }}
            >
              Share to WhatsApp / iMessage
            </button>
            <button
              onClick={saveToNotes}
              style={{ padding: 10, background: "#555", color: "white", border: "none", borderRadius: 5 }}
            >
              Save to Notes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AftercarePage;