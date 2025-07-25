
import './App.css'
import horarioAtual from './utils/tempo'
function App() {
  

  return (
    <>
     <h1> Relógio</h1>
      <h2>Hora atual: {horarioAtual()}</h2>
    </>
  )
}

export default App
