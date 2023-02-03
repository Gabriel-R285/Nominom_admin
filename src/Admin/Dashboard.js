import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { GoDashboard } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaFileUpload } from "react-icons/fa";
import { BsDoorClosed } from "react-icons/bs";
import { AiOutlineCloudUpload } from "react-icons/ai";
import jpg from "../Img/nominom_letras.png";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ConfirmButton: true };
  }

  handleclick() {}

  render() {
    return (
      <div class="Container">
        <div class="aside">
          <ul class="items">
            <img src={jpg} alt="" />
            <div class="child">
              <GoDashboard class="emoticon" />
              <Link class="text" to="/dashboard">
                Dashboard
              </Link>
            </div>
            <div class="child">
              <FaUsers class="emoticon" />
              <Link class="text" to="/users">
                Usuarios
              </Link>
            </div>
            <div class="child">
              <CgProfile class="emoticon" />
              <Link class="text" to="/profile">
                Perfil
              </Link>
            </div>
            <div class="child">
              <FaFileUpload class="emoticon" />
              <Link class="text" to="/users">
                Usuarios
              </Link>
            </div>
            <div class="child">
              <BsDoorClosed class="emoticon" />
              <Link class="text" to="/">
                Cerrar Sesion
              </Link>
            </div>
            <button class="button">Cargar base de datos</button>
          </ul>
        </div>
        <div class="Main">
          <div class="Main-childs">
            <div class="Title">
              <h1>Nueva carga de archivo </h1>
            </div>
            <div class="Seleccionar">
              <form action="">
                <label for="empresa">Empresa:</label>
                <select className="empresas">
                  <option value="1">Bimbo de Mexico</option>
                </select>
              </form>
            </div>
            <div class="load-file">
              <div class="side">
                <AiOutlineCloudUpload color="#00bad2" font-size="150" />
              </div>
              <div class="side">
                <h1>
                  Arrastra tu arhivo aqui, o <span class="search">buscalo</span>
                </h1>
              </div>
              <div class="side">
                <p>Recuerda que debe ser en formato .xls </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
