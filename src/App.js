import React from 'react';
import { Header, Form } from './components';

function App() {

  const [category, setCategory] = React.useState('');
  const [artiles, setArticles] = React.useState([]);

  React.useEffect(() => {
    const consultApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=f788063e946a42ed9b5526ac1283f0c6`;
      const res = await fetch(url);
      const not = await res.json();
      setArticles(not.articles);
    }
    consultApi();
  }, [category])

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
