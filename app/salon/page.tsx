import React from 'react';
import { useNavigate } from 'react-router-dom';

const SalonPage = () => {
  const navigate = useNavigate();

  return (
    <div className="salon-container">
      <h1>SalonPro™</h1>
      <button className="btn" onClick={() => navigate("/salon/clients")}>View Clients</button>
      <button className="btn" onClick={() => navigate("/salon/formulas")}>View Formulas</button>
      <button className="btn" onClick={() => navigate("/salon/sop")}>View SOP</button>
    </div>
  );
};

export default SalonPage;