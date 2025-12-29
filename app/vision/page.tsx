'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function VisionPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateLook = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/vision/results');
    }, 2000);
  };

  return (
    <>
      <h1>Try Your Look.</h1>
      <div style={{ marginTop: '24px' }}>
        <input
          type="file"
          accept="image/*"
          style={{
            display: 'block',
            marginBottom: '20px',
            padding: '8px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '6px',
            color: '#f5f5f7',
            cursor: 'pointer'
          }}
        />
        <button
          onClick={handleGenerateLook}
          disabled={isLoading}
          style={{
            padding: '12px 24px',
            background: isLoading ? 'rgba(0,122,255,0.5)' : '#007aff',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            transition: 'background 0.2s'
          }}
        >
          {isLoading ? 'Analyzing your look...' : 'Generate My Look'}
        </button>
      </div>
    </>
  );
}