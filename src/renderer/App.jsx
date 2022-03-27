import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

export default function App() {
  const [page, setPage] = useState('accueil');

  const menuHandler = menu => {
    setPage(menu)
  }

  return (
    <div className="main">
      <Header page={page} menuClick={menu => menuHandler(menu)} />
      <Content />
      <Footer />
    </div>
  );
}
