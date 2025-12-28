import React, { useState, useEffect } from 'react';

const SopPage = () => {
  const [sops, setSops] = useState(() => JSON.parse(localStorage.getItem('salonSOPs')) || []);

  useEffect(() => {
    localStorage.setItem('salonSOPs', JSON.stringify(sops));
  }, [sops]);

  const addSop = () => {
    const sop = prompt('Enter SOP Details:');
    if (sop) {
      setSops([...sops, sop]);
    }
  };

  return (
    <div>
      <h2>Standard Operating Procedures (SOPs)</h2>
      <button onClick={addSop}>Add SOP</button>
      <ul>
        {sops.map((sop, index) => (
          <li key={index}>{sop}</li>
        ))}
      </ul>
    </div>
  );
};

export default SopPage;