import React from "react";
import "./Users.css";
import { Link } from "react-router-dom";
import { GoDashboard } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaFileUpload } from "react-icons/fa";
import { BsDoorClosed } from "react-icons/bs";
import { TbFilePencil } from "react-icons/tb";
import { RiFileExcel2Line } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import nominom from "../Img/nominom_letras.png";

const Users = () => {
  return (
    <div class="Container">
      <div class="aside">
        <ul class="aside_childs">
          <img src={nominom} alt="" />
          <div class="child">
            <GoDashboard class="emoticon" />
            <a href class="text" to="/Dashboard">
              Dashboard
            </a>
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
              Historial de carga
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
        <div class="main_header">
          <div class="items">
            <h1>Usuarios</h1>
          </div>
          <div class="items">
            <form action="">
              <label for="empresa">Empresa:</label>
              <select name="empresa">
                <option value="1">Todos</option>
              </select>
            </form>
          </div>
          <div class="items">
            <form action="">
              <label for="empresa">Mes:</label>
              <select name="empresa">
                <option value="1">Todos</option>
              </select>
            </form>
          </div>
          <div class="items">
            <input type="buscar" placeholder="Buscar" />
          </div>
          <div class="items">
            <RiFileExcel2Line className="excel" />
          </div>
        </div>
        <table class="tablas">
          <thead>
            <tr>
              <th>Nombre </th>
              <th>Empresa</th>
              <th>ID empleado</th>
              <th>Mail</th>
              <th>Cuenta bancaria</th>
              <th>Banco</th>
              <th>Sueldo mensual neto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Andres Hernandez Ramirez</td>
              <td>Trebolbit</td>
              <td>T271984-12</td>
              <td>andres@trebolbitx</td>
              <td>1234567891</td>
              <td>Bancomer</td>
              <td>10.000,00</td>
            </tr>
            <tr>
              <td>Marisol Gutierrez Moralez</td>
              <td>Bimbo</td>
              <td>B635363</td>
              <td>marisol@bimbo-ventas.mx</td>
              <td>123456781</td>
              <td>Bancomer</td>
              <td>10.000,00</td>
            </tr>
            <tr>
              <td>Jose Raul Valdez</td>
              <td>Empresa 02</td>
              <td>94587783</td>
              <td>andres@trebolbit.mx</td>
              <td>1234567891</td>
              <td>BBVA</td>
              <td>$11,000.00</td>
            </tr>
            <tr>
              <td>Ana Cortez Carrillo</td>
              <td>Empresa 02</td>
              <td>94587783</td>
              <td>acortez@ejemplo.mx</td>
              <td>1234567891</td>
              <td>Santander</td>
              <td>$20.000,00</td>
            </tr>
            <tr>
              <td>Raul Hernandez Garduño</td>
              <td>Empresa 03</td>
              <td>876768937</td>
              <td>andres@trebolbit.mx</td>
              <td>1234567891</td>
              <td>BBVA</td>
              <td>$8.000,00</td>
            </tr>
            <tr>
              <td>David Olvera Romo</td>
              <td>Empresa 04</td>
              <td>437793452</td>
              <td>davidol_r@ejemplos.mex</td>
              <td>1234567891</td>
              <td>BBVA</td>
              <td>$8.000,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { Users };
