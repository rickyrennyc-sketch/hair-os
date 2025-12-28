'use client'; 
import React from 'react'; 

const AftercarePage = () => { 
  const currentTimestamp = new Date().toLocaleString(); 
  return ( 
    <main> 
      <h1>Aftercare™</h1> 
      <p>Aftercare module live.</p> 
      <p>Current timestamp: {currentTimestamp}</p> 
      <a href="/">Back to home</a> 
    </main> 
  ); 
}; 

export default AftercarePage;