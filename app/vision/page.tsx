import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function VisionPage() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        localStorage.setItem('uploadedImage', imageDataUrl);
        router.push('/vision/results');
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    }
  };

  return (
    <main className="container">
      <section className="glass" style={{ padding: '22px' }}>
        <h1 style={{ fontSize: 28, fontWeight: 'bold' }}>HairVision™</h1>
        <p style={{ opacity: 0.8, fontSize: 16 }}>「像魔鏡一樣，幫你一眼睇到最靚嘅自己」</p>

        <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            id="photo-upload"
            onChange={handleFileChange}
          />
          <button
            className="btn primary"
            onClick={() => document.getElementById('photo-upload')?.click()}
          >
            上傳照片 Upload Photo
          </button>
          <button
            className="btn ghost"
            onClick={() => alert('Camera feature is under development.')}
          >
            使用相機 Use Camera
          </button>
        </div>
      </section>
    </main>
  );
}