'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <h1>Hair OS™</h1>
      <p>Apple-like AI Hair Analysis & Consultation System.</p>
      <button
        onClick={() => router.push('/vision')}
        style={{
          marginTop: '24px',
          padding: '12px 24px',
          background: '#007aff',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'background 0.2s'
        }}
      >
        Try My Look
      </button>
    </>
  );
}