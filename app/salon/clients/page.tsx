import React, { useState, useEffect } from 'react';

const ClientsPage = () => {
  const [clients, setClients] = useState(() => JSON.parse(localStorage.getItem('salonClients')) || []);

  useEffect(() => {
    localStorage.setItem('salonClients', JSON.stringify(clients));
  }, [clients]);

  const addClient = () => {
    const clientName = prompt('Enter Client Name:');
    if (clientName) {
      setClients([...clients, clientName]);
    }
  };

  return (
    <div>
      <h2>Clients</h2>
      <button onClick={addClient}>Add Client</button>
      <ul>
        {clients.map((client, index) => (
          <li key={index}>{client}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;