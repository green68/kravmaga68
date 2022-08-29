import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { getYear } from "./datas/datas";
import { NavLink } from "react-router-dom";
import { FaBalanceScale, FaCalendar, FaHome, FaPiggyBank } from "react-icons/fa";
import { BsBank } from "react-icons/bs";

const dataYear = getYear();

export default function App() {
  const [page, setPage] = useState("home");
  const [year, setYear] = useState(dataYear);

  // useEffect(() => {
  //   setYear(getYear())
  // }, [])

  const menuHandler = (menu) => {
    setPage(menu);
    console.log(`menu : ${menu}`);
  };

  return (
    <div className="main">
      <Header page={page} menuClick={(menu) => menuHandler(menu)}>
        <NavLink 
          to={'/'} 
          className="btn btn-dark btn-menu"
          // data-menu={Menu.Home}
          // onClick={(e) => changePage(e)}
          >
          <FaHome />
          Accueil
        </NavLink>
        <NavLink
          to={'/balance'}
          className="btn btn-dark btn-menu"
          // data-menu={Menu.Balance}
          // onClick={(e) => changePage(e)}
        >
          <FaBalanceScale />
          Balance
        </NavLink>
      </Header>
      <Content />
      <Footer page={page} menuClick={(menu) => menuHandler(menu)} >
      <NavLink
          to={'/year'}
          className="btn btn-dark btn-menu"
          // data-menu={Menu.Year}
          // onClick={(e) => changePage(e)}
        >
          <FaCalendar />
          NC
          {/* {year ? year.id : "NC"} */}
        </NavLink>
        <NavLink
          to={"/bank"}
          className="btn btn-dark btn-menu"
          // data-menu={Menu.Bank}
          // onClick={(e) => changePage(e)}
        >
          <BsBank />
          NC
        </NavLink>

        <NavLink
          to={"/cash"}
          className="btn btn-dark btn-menu"
          // data-menu={Menu.Cash}
          // onClick={(e) => changePage(e)}
        >
          <FaPiggyBank />
          NC
        </NavLink>
      </Footer>
    </div>
  );
}
