import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import IcLogo from "../img/aquaretoma.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import graph_line from "../img/icon/linechart.png";
import graph_board from "../img/icon/board.png";
import graph_datamangement from "../img/icon/data-mangement.png";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img alt="logotipo" className="photoNB" src={IcLogo} />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <img src={graph_board} alt="" />
                &nbsp;
                {"Inicio"}
              </NavLink>
            </li>

            <li className="nav-item">
              {/* <NavLink
                to="./Grafico/Grafico"
                className={(navData) =>
                  navData.isActive ? "active" : "nav-links"
                }
                onClick={handleClick}
              >
                Grafico
              </NavLink> */}

              <NavLink
                exact
                to="./Grafico/Grafico"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <img src={graph_line} alt="" />
                &nbsp;
                {" Grafico"}
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink
                exact
                to="/Configuracion"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Configuracion
              </NavLink>
            </li> */}

            {/* <li className="nav-item">
              <NavLink
                exact
                to="/Registro"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                
              >
                Registro
              </NavLink>
            </li> */}

            <li className="nav-item">
              <NavLink
                exact
                to="/Datos"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <img src={graph_datamangement} alt="" />
                &nbsp;
                {" Datos"}
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} size="1x" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
