'use client';

import { useState } from 'react';

export default function VisionResultsPage() {
  const [coinEarned, setCoinEarned] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Hair Look',
          text: 'Check out my new hair look!',
          url: window.location.href,
        });
        setCoinEarned(true);
      } catch (err) {
        // User cancelled share or share failed
        if ((err as Error).name !== 'AbortError') {
          alert('Look shared.');
          setCoinEarned(true);
        }
      }
    } else {
      alert('Look shared.');
      setCoinEarned(true);
    }
  };

  return (
    <>
      <h1>Your Look Result.</h1>
      <p style={{ marginTop: '8px', fontSize: '18px' }}>Share this with your stylist.</p>
      
      <div style={{ marginTop: '32px' }}>
        <button
          onClick={handleShare}
          style={{
            padding: '12px 24px',
            background: '#007aff',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            marginRight: '12px',
            marginBottom: '12px'
          }}
        >
          Share This Look
        </button>
        
        <button
          style={{
            padding: '12px 24px',
            background: 'rgba(255,255,255,0.1)',
            color: '#f5f5f7',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            marginBottom: '12px'
          }}
        >
          Find Stylist Nearby
        </button>

        {coinEarned && (
          <p style={{ marginTop: '16px', color: '#34c759', fontWeight: '600' }}>
            +1 OS Coin earned.
          </p>
        )}
      </div>
    </>
  );
}