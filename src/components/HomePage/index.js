import React, {useState} from 'react';

import './style.css';

export default function HomePage() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);

  function gerarNumero(){
    const novoNumero = Math.floor(Math.random() * (60 -1) +1);
    setNumeroAleatorio(novoNumero);
  }
  
  return (
    <div className="container">
      <h1>Sorteio</h1>

      <h3>Número:</h3>
      <strong>{numeroAleatorio}</strong>

      <div className="button-container">
        <label>Clique para gerar seu número:</label>
        <button onClick={gerarNumero}>Gerar número</button>
      </div>

    </div>
  );
}