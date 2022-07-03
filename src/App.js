import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { getYear } from "./datas/datas";


const dataYear =  getYear()

export default function App() {
  const [page, setPage] = useState('home');
  const [year, setYear] = useState(dataYear)

  // useEffect(() => {
  //   setYear(getYear())
  // }, [])

  const menuHandler = menu => {
    setPage(menu)
    console.log(`menu : ${menu}`);
  }

  return (
    <div className="main">
      <Header page={page} menuClick={menu => menuHandler(menu)} />
      <Content />
      <Footer page={page} menuClick={menu => menuHandler(menu)}/>
    </div>
  );
}
