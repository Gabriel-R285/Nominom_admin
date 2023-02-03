import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./Login.css";
import React from "react";
import Dashboard from "../Admin/Dashboard";
import Profile from "../Admin/Dashboard";
import ResetPassword from "./PasswordReset";
import NewPassword from "./NewPassword";
import { Users } from "../Admin/Users";
import { Progressbar } from "../Eventos/Progressbar";
import { ProfileChanges } from "../Eventos/ProfileChanges";
import Jpg from "../Img/Nominom.jpg";

function Login() {
  return (
    <body>
      <form class="login">
        <img src={Jpg} className="jpg" alt="" />
        <div class="inputs">
          <div class="input-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
            <input type="email" placeholder="userexample@gmail.com" />
          </div>
          <div class="password-wrapper">
            <div class="input-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-lock"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
              </svg>
              <input type="password" placeholder="....." />
            </div>
            <a href="/reset_password">¿Olvidaste tu contraseña?</a>
          </div>
        </div>
        <Link to="/dashboard">
          <button>Ingresar</button>
        </Link>
      </form>
    </body>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/new_password" element={<NewPassword />} />
        <Route path="/users" element={<Users />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/loading..." element={<Progressbar />} />
        <Route path="/profile_changes..." element={<ProfileChanges />} />
      </Routes>
    </BrowserRouter>
  );
}
