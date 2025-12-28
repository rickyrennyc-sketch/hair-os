import React, { useState, useEffect } from 'react';

const AftercarePage = () => {
  const [service, setService] = useState('');
  const [hairType, setHairType] = useState('');
  const [goals, setGoals] = useState('');
  const [washFrequency, setWashFrequency] = useState('');
  const [plan, setPlan] = useState('');

  useEffect(() => {
    const savedPlan = localStorage.getItem('hairos_aftercare_plan');
    if (savedPlan) {
      setPlan(savedPlan);
    }
  }, []);

  const generatePlan = () => {
    const generatedPlan = `Service: ${service}\nHair Type: ${hairType}\nGoals: ${goals}\nWash Frequency: ${washFrequency}`;
    setPlan(generatedPlan);
    localStorage.setItem('hairos_aftercare_plan', generatedPlan);
    alert('Plan generated and saved!');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(plan).then(() => alert('Plan copied to clipboard!'));
  };

  const sharePlan = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Aftercare Plan',
          text: plan,
        });
      } catch (err) {
        console.error('Share failed', err);
      }
    } else {
      alert('Sharing not supported on this browser.');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif' }}>
      <h1 style={{ color: '#333', margin: '16px 0' }}>Aftercare Module</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input
          type="text"
          placeholder="Service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <input
          type="text"
          placeholder="Hair Type"
          value={hairType}
          onChange={(e) => setHairType(e.target.value)}
          style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <input
          type="text"
          placeholder="Goals"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <input
          type="text"
          placeholder="Wash Frequency"
          value={washFrequency}
          onChange={(e) => setWashFrequency(e.target.value)}
          style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <button onClick={generatePlan} style={{ padding: '10px', background: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Generate Plan
        </button>
        <button onClick={copyToClipboard} style={{ padding: '10px', background: '#28A745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Copy Plan
        </button>
        <button onClick={sharePlan} style={{ padding: '10px', background: '#17A2B8', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Share Plan
        </button>
      </div>
      {plan && (
        <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
          <h2>Your Aftercare Plan</h2>
          <p>{plan}</p>
        </div>
      )}
    </div>
  );
};

export default AftercarePage;