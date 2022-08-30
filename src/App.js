import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Content from "./components/Content";
import { getYear } from "./datas/datas";
import { NavLink, useNavigate, Routes, Route } from "react-router-dom";
import {
  FaBalanceScale,
  FaCalendar,
  FaHome,
  FaPiggyBank,
} from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import HomePage from "./pages/HomePage";
import BalancePage from "./pages/BalancePage";
import BankPage from "./pages/BankPage";
import CashPage from "./pages/CashPage";
import YearPage from "./pages/YearPage";

const dataYear = getYear();

const Menu = {
  Home: "home",
  Balance: "balance",
  Bank: "bank",
  Cash: "cash",
  Year: "year"
}

export default function App() {
  let navigate = useNavigate();

  const [menu, setMenu] = useState(Menu.Home);
  // const [page, setPage] = useState("home");
  const [year, setYear] = useState(dataYear);

  // useEffect(() => {
  //   setYear(getYear())
  // }, [])


  const changePage = (e) => {
    e.preventDefault();

    const newMenu = e.currentTarget?.dataset?.menu;
    console.log(`newMenu : ${newMenu}`);
    
    if (newMenu) {
      navigate(newMenu);
      setMenu(newMenu);
    }
    // console.log(`menu : ${menu}`);
  };

  return (
    <div className="main">
      <Header>
        <NavLink
          to={"/"}
          className="btn btn-dark btn-menu"
          data-menu={Menu.Home}
          onClick={(e) => changePage(e)}
        >
          <FaHome />
          Accueil
        </NavLink>
        <NavLink
          to={"/balance"}
          className="btn btn-dark btn-menu"
          data-menu={Menu.Balance}
          onClick={(e) => changePage(e)}
        >
          <FaBalanceScale />
          Balance
        </NavLink>
      </Header>
      <main>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/balance" element={<BalancePage />} />
          <Route path="/year" element={<YearPage />} />
          <Route path="/bank" element={<BankPage />} />
          <Route path="/cash" element={<CashPage />} />
        </Routes>
      </main>
      <Footer>
        <NavLink
          to={"/year"}
          className="btn btn-dark btn-menu"
          data-menu={Menu.Year}
          onClick={(e) => changePage(e)}
        >
          <FaCalendar />
          {year ? year.id : "NC"}
        </NavLink>
        <NavLink
          to={"/bank"}
          className="btn btn-dark btn-menu"
          data-menu={Menu.Bank}
          onClick={(e) => changePage(e)}
        >
          <BsBank />
          NC
        </NavLink>

        <NavLink
          to={"/cash"}
          className="btn btn-dark btn-menu"
          data-menu={Menu.Cash}
          onClick={(e) => changePage(e)}
        >
          <FaPiggyBank />
          NC
        </NavLink>
      </Footer>
    </div>
  );
}
