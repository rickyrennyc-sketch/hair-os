'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function VisionPage() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleGenerateLook = async () => {
    if (!selectedFile) {
      alert('Please select an image first');
      return;
    }

    setIsLoading(true);
    setLoadingStep(1);

    // Step 1: Analyzing your look... (1.5 seconds)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoadingStep(2);
    
    // Step 2: Finding your best style... (1.5 seconds)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Redirect to results
    router.push('/vision/results');
  };

  if (isLoading) {
    return (
      <div className="vision-upload">
        <h1>HairVision™</h1>
        <div className="loading-container">
          {loadingStep === 1 && (
            <p className="loading-message">Analyzing your look...</p>
          )}
          {loadingStep === 2 && (
            <p className="loading-message">Finding your best style...</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="vision-upload">
      <h1>HairVision™</h1>
      <p>AI visual simulation for hairstyle, color, and vibe.</p>
      
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="file-input"
      />
      
      {selectedFile && (
        <p style={{ opacity: 0.7, marginTop: '8px' }}>
          Selected: {selectedFile.name}
        </p>
      )}

      <button
        onClick={handleGenerateLook}
        className="btn btn-primary"
        style={{ marginTop: '20px' }}
      >
        Generate My Look
      </button>
    </div>
  );
}