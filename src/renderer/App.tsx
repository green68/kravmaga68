import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import icon from '../../assets/icon.png';

export default function App() {
  const [page, setPage] = useState('accueil');

  return (
    <div className="main">
      <Header page={page} />
      <Content />
      <Footer />
    </div>
  );
}
