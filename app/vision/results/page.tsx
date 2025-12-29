'use client';

import { useState, useEffect } from 'react';

export default function VisionResultsPage() {
  const [coins, setCoins] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    let shareSucceeded = false;
    
    // Try native share API
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Hair Look',
          text: 'Check out my new hair look from Hair OS!',
          url: window.location.href,
        });
        shareSucceeded = true;
      } catch (err) {
        // User cancelled or error occurred
        if ((err as Error).name !== 'AbortError') {
          alert('Look shared');
          shareSucceeded = true;
        }
        // If AbortError, user cancelled, don't award coin
      }
    } else {
      // Fallback for browsers that don't support share API
      alert('Look shared');
      shareSucceeded = true;
    }

    // Only award coin if sharing succeeded
    if (shareSucceeded) {
      setCoins(prev => prev + 1);
      setShowToast(true);
    }
  };

  // Clean up toast timeout
  useEffect(() => {
    if (showToast) {
      const timeoutId = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      
      return () => clearTimeout(timeoutId);
    }
  }, [showToast]);

  const handleFindStylist = () => {
    // Placeholder - no functional implementation needed
    console.log('Find Stylist Nearby clicked');
  };

  return (
    <div className="vision-results">
      <h1>Your Look Result</h1>
      <p className="subtitle">Save or share this with your stylist.</p>
      
      <div style={{ opacity: 0.8, marginBottom: '24px' }}>
        <p>Before / After preview and AI styling insight.</p>
        {coins > 0 && (
          <p style={{ marginTop: '16px', color: '#0071e3' }}>
            OS Coins: {coins}
          </p>
        )}
      </div>

      <div className="button-group">
        <button onClick={handleShare} className="btn btn-primary">
          Share This Look
        </button>
        <button onClick={handleFindStylist} className="btn btn-secondary">
          Find Stylist Nearby
        </button>
      </div>

      {showToast && (
        <div className="toast">
          +1 OS Coin earned
        </div>
      )}
    </div>
  );
}