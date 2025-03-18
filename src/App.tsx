import React from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
function App() {
  return (
    <div className="App">
      <Formulario />
      <div>
        <h2>Minha lista de estudos</h2>
        <Lista />
      </div>
    </div>
  );
}

export default App;
