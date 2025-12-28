import React, { useState, useEffect } from 'react';

const FormulasPage = () => {
  const [formulas, setFormulas] = useState(() => JSON.parse(localStorage.getItem('salonFormulas')) || []);

  useEffect(() => {
    localStorage.setItem('salonFormulas', JSON.stringify(formulas));
  }, [formulas]);

  const addFormula = () => {
    const formula = prompt('Enter Formula Name:');
    if (formula) {
      setFormulas([...formulas, formula]);
    }
  };

  return (
    <div>
      <h2>Formulas</h2>
      <button onClick={addFormula}>Add Formula</button>
      <ul>
        {formulas.map((formula, index) => (
          <li key={index}>{formula}</li>
        ))}
      </ul>
    </div>
  );
};

export default FormulasPage;