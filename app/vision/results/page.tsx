import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css'; // Assuming a CSS module file for specific styles

const HairVisionResults = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold text-center mb-4">HairVision Results</h1>
      <p className="text-center text-lg text-gray-400 mb-8">Reimagine Your Look, Unleash Confidence.</p>

      <section className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Before / After Comparison</h2>
        <div className="flex justify-center items-center space-x-4">
          <div className="w-1/2 md:w-1/3 rounded-lg shadow-lg overflow-hidden">
            <Image src="/images/before.jpg" alt="Before" width={300} height={300} className="object-cover rounded-lg" />
          </div>
          <div className="w-1/2 md:w-1/3 rounded-lg shadow-lg overflow-hidden">
            <Image src="/images/after.jpg" alt="After" width={300} height={300} className="object-cover rounded-lg" />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-center mb-6">AI Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-5 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Hairstyle</h3>
            <p>Suggestions: Sleek Bob, Layered Pixie.</p>
          </div>
          <div className="bg-white bg-opacity-5 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Hair Color</h3>
            <p>Tone: Cool, Level: 7 (Dark Blonde).</p>
          </div>
          <div className="bg-white bg-opacity-5 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Vibe</h3>
            <p>Trendy: Casual Chic, Mood: Confident.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <Link href="/formula">
          <a className="inline-block bg-blue-500 text-white rounded-full px-6 py-3 text-lg font-bold shadow-md hover:bg-blue-600 transition mb-4 md:mb-0 md:mr-4">Explore HairFormula™</a>
        </Link>
        <Link href="/salon">
          <a className="inline-block bg-green-500 text-white rounded-full px-6 py-3 text-lg font-bold shadow-md hover:bg-green-600 transition">Visit SalonPro™</a>
        </Link>
      </section>
    </div>
  );
};

export default HairVisionResults;