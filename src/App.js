import React from 'react';
import { Header, Form } from './components';

function App() {
  return (
    <React.Fragment>
      <Header title="Buscador de Noticias" />
      <div className="container white">
        <Form />
      </div>
    </React.Fragment>
  );
}

export default App;
