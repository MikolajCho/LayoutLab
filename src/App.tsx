import React from 'react';
import Header from './components/Header';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <h1>Witaj w mojej aplikacji!</h1>
    </div>
  );
}

export default App;
