import React from 'react';
import { Header, Form, NewsList } from './components';

function App() {

  const [category, setCategory] = React.useState('');
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    const consultApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=f788063e946a42ed9b5526ac1283f0c6`;
      const res = await fetch(url);
      const info = await res.json();
      setNews(info.articles);
    }
    consultApi();
  }, [category])

  return (
    <React.Fragment>
      <Header title="Buscador de Noticias" />
      <div className="container white">
        <Form setCategory={setCategory} />
        <NewsList news={news} />
      </div>
    </React.Fragment>
  );
}

export default App;
