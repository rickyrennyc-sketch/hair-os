'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const recommendations = [
  {
    name: '柔光層次 Soft Light Layers',
    description: '打造柔順光澤層次，彰顯臉部線條，百搭又耐看。',
    tags: ['顯面細', '柔光感', '易打理'],
    lookId: 1,
  },
  {
    name: '自然波浪 Natural Waves',
    description: '提升輕盈感，顯出自然隨性嘅美態，適合中至長髮。',
    tags: ['顯氣質', '蓬鬆感', '自然美'],
    lookId: 2,
  },
  {
    name: '俐落直髮 Sleek Straight',
    description: '簡單俐落設計，突出亮澤直髮質感，適合短至中長髮。',
    tags: ['顯成熟', '光華整齊', '易打理'],
    lookId: 3,
  },
];

export default function ResultsPage() {
  const [image, setImage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedImage = localStorage.getItem('uploadedImage');
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  if (!image) {
    return (
      <main className="container">
        <section className="glass" style={{ padding: '22px', textAlign: 'center' }}>
          <p>找唔到上傳照片，請重新掃描。</p>
          <button onClick={() => router.push('/vision')} className="btn primary">
            重新掃描
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="container">
      <section className="glass" style={{ padding: '22px' }}>
        <h1 style={{ fontSize: 24, fontWeight: 'bold' }}>
          AI 為你建議 3 個最適合你嘅造型方向
        </h1>
        <div style={{ marginTop: 20 }}>
          <img
            src={image}
            alt="Uploaded preview"
            style={{ maxWidth: '100%', borderRadius: 12, marginBottom: 20 }}
          />
          <div className="grid">
            {recommendations.map((rec) => (
              <div key={rec.lookId} className="glass" style={{ padding: 20, borderRadius: 12 }}>
                <h2 style={{ fontSize: 18, fontWeight: 'bold' }}>{rec.name}</h2>
                <p style={{ margin: '10px 0', opacity: 0.85 }}>{rec.description}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {rec.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="pill"
                      style={{ fontSize: 12, fontWeight: 'bold' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => router.push(`/vision/preview?look=${rec.lookId}`)}
                  className="btn primary"
                  style={{ marginTop: 15 }}
                >
                  Preview →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}