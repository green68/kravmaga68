import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { datas } from "./datas/datas";
import { NavLink, useNavigate, Routes, Route, Navigate } from "react-router-dom";
import {
  FaBalanceScale,
  FaCalendar,
  FaHome,
  FaPiggyBank,
  FaTools,
} from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import HomePage from "./pages/HomePage";
import BalancePage from "./pages/BalancePage";
import BankPage from "./pages/BankPage";
import CashPage from "./pages/CashPage";
import YearPage from "./pages/YearPage";
import { pathTo } from "./utilities/functions";
import { jsonDatas } from "./datas/datas.json";
import UserInit from "./components/UserInit";
import { User } from "./classes/user";
import ToolsPage from "./pages/ToolsPage";

const Menu = {
  Home: "home",
  Balance: "balance",
  Bank: "bank",
  Cash: "cash",
  Year: "year",
  Tools: "tools"
};


console.clear()

// TEST: 
// datas.setUserFromJSON(jsonDatas)

// TODO: a associer à un bouton pour sauvegarde
// datas.saveToFile('kravmaga.json')

// TODO: if already save no rewrite, just saved initially ???
if (datas.isLocale()) {
  datas.getUserFromLocale()
} else {
  datas.saveToLocale()
}

export default function App() {

  let navigate = useNavigate();

  // eslint-disable-next-line
  const [user, setUser] = useState(datas.getUser())
  // eslint-disable-next-line
  const [menu, setMenu] = useState(Menu.Home);
  // eslint-disable-next-line
  const [year, setYear] = useState(user.name ? user.years?.getLast() : null );

  const changePage = (e) => {
    e.preventDefault();

    const newMenu = e.currentTarget?.dataset?.menu;
    console.log(`newMenu : ${newMenu}`);

    if (newMenu) {
      setMenu(newMenu);
      navigate(pathTo(newMenu));
    }
  };


  const userUpdate = (userDatas) => {
    setUser(new User(userDatas))
  }

  // for resize page 
  useEffect(() => {
    function handleResize() {
      const main = document.querySelector('.main')
      const winHeight = `${window.innerHeight}px`
      const mainHeight = window.getComputedStyle(main).getPropertyValue("height")
      if (winHeight !== mainHeight) {
        main.style.height = winHeight
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)

    }
  })

  // update year and saveToLocale after user change
  useEffect(() => {
    setYear(user.name ? user.years?.getLast() : null)
    datas.saveToLocale(user)
  }, [user])

  return (
    <div className="main">
      <Header>
        <NavLink
          to={pathTo(Menu.Home)}
          className="btn btn-dark btn-menu"
          data-menu={Menu.Home}
          onClick={(e) => changePage(e)}
        >
          <FaHome />
          Accueil
        </NavLink>
        <NavLink
          to={pathTo(Menu.Balance)}
          className="btn btn-dark btn-menu"
          data-menu={Menu.Balance}
          onClick={(e) => changePage(e)}
        >
          <FaBalanceScale />
          Balance
        </NavLink>
        <NavLink
          to={pathTo(Menu.Tools)}
          className="btn btn-dark btn-menu"
          data-menu={Menu.Tools}
          onClick={(e) => changePage(e)}
        >
          <FaTools />
          Outils
        </NavLink>
      </Header>
      <main>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path={pathTo(Menu.Home)} element={<HomePage />} />
          <Route path={pathTo(Menu.Balance)} element={<BalancePage />} />
          <Route path={pathTo(Menu.Year)} element={<YearPage />} />
          <Route path={pathTo(Menu.Bank)} element={<BankPage />} />
          <Route path={pathTo(Menu.Cash)} element={<CashPage />} />
          <Route path={pathTo(Menu.Tools)} element={<ToolsPage handleUpdate={userUpdate}/>} />
          <Route path="*" element={<Navigate to={pathTo(Menu.Home)} />} />
        </Routes>
      </main>
      <Footer>
        <NavLink
          to={pathTo(Menu.Year)}
          className="btn btn-dark btn-menu"
          data-menu={Menu.Year}
          onClick={(e) => changePage(e)}
        >
          <FaCalendar />
          {year ? year.id : "NC"}
        </NavLink>

        <NavLink
          to={pathTo(Menu.Bank)}
          className="btn btn-dark btn-menu"
          data-menu={Menu.Bank}
          onClick={(e) => changePage(e)}
        >
          <BsBank />
          {year ? year.getBank() : "NC"}
        </NavLink>

        <NavLink
          to={pathTo(Menu.Cash)}
          className="btn btn-dark btn-menu"
          data-menu={Menu.Cash}
          onClick={(e) => changePage(e)}
        >
          <FaPiggyBank />
          {year ? year.getCash() : "NC"}
        </NavLink>
      </Footer>

      { <UserInit show={!user.name} handleInit={userUpdate}/> }

    </div>

  );
}

