import React, { useState, useEffect } from 'react';
import './App.css';
import horarioAtual from './utils/tempo';
import { dataAtual } from './utils/tempo';

const App: React.FC = () => { 
  const [hora, setHora] = useState<string>(() => horarioAtual());
  const [data, setData] = useState<string>(() => dataAtual());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(horarioAtual());
    }, 1000);//1000 milissegundos (1 segundo)
    setData(dataAtual());

    return () => clearInterval(intervalo);
  }, []);


  return (
    <div className="App">
      <h1>Relógio</h1>
      <h2>Hora atual: {hora}</h2>
      <h2>Data atual: {data}</h2>
    </div>
  );
};

export default App;
