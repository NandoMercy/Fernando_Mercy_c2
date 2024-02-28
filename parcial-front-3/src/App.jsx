// App.jsx
import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Form from './Components/Form';

function App() {
  const [infoEnviada, setInfoEnviada] = useState(null);

  const handleFormSubmit = (info) => {
    setInfoEnviada(info);
  }

  return (
    <>
      <div className="App">
        <h1>Tu libro favorito!</h1>
        <Form onSubmit={handleFormSubmit} />
        {infoEnviada && <Card favorito={infoEnviada} />}
      </div>
    </>
  );
}

export default App;

