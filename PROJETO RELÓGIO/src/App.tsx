import React, { useState, useEffect } from 'react';
import './App.css';
import horarioAtual from './utils/tempo';

const App: React.FC = () => {
  const [hora, setHora] = useState<string>(() => horarioAtual());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(horarioAtual());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="App">
      <h1>Relógio</h1>
      <h2>Hora atual: {hora}</h2>
    </div>
  );
};

export default App;
