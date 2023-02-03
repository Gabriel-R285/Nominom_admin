import "./Profile.css";
import React from "react";
import { GoDashboard } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaFileUpload } from "react-icons/fa";
import { BsDoorClosed } from "react-icons/bs";
import { TbFilePencil } from "react-icons/tb";
import jpg from "../Img/nominom_letras.png";

const Profile = () => {
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
            <Link class="text" to="/">
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
        <div class="profile">
          <h1 class="title">Perfil</h1>
        </div>
        <div class="form">
          <TbFilePencil class="pencil" color="white" font-size="35" />
          <h2 class="items">Nombre ejemplo</h2>
          <p class="items"> KIA Capital human group </p>
          <p class="items">mail@Kiagroup.com.mx</p>
          <p class="items">Administrador</p>
        </div>
      </div>
    </div>
  );
};

export default { Profile };
