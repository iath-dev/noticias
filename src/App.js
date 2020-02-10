import React from 'react';
import { Header, Form } from './components';

function App() {

  const [category, setCategory] = React.useState('');

  return (
    <React.Fragment>
      <Header title="Buscador de Noticias" />
      <div className="container white">
        <Form setCategory={setCategory} />
      </div>
    </React.Fragment>
  );
}

export default App;
