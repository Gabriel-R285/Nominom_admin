import nominom from "../Img/Nominom.jpg";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./NewPassword.css";
import jpg from "../Img/Nominom.jpg";
import { withSwal } from "react-sweetalert2";

class NewPassword extends React.Component {
  PasswordSuccessReset() {
    this.swal.fire({
      showCloseButton: true,
      html:
        '<p class="custom-container">¡Contraseña preestablecida con exito! </p>',
      icon: "success",
      iconColor: "white",
      width: "420",
      background: "#1a9ddf",
      showConfirmButton: true,
      confirmButtonText: "Continuar",
      customClass: {
        confirmButton: "custom-button",
        text: "swal-text",
        icon: "success"
      }
    });
  }
  render() {
    return (
      <body>
        <form class="login">
          <img src={jpg} alt="" />
          <p class="reset_password-instruction">Ingresa nueva contraseña</p>
          <div class="inputs">
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
            </div>
          </div>
          <button onClick={this.PasswordSuccessReset.bind(this)}>
            Continuar
          </button>
        </form>
      </body>
    );
  }
}

export default withSwal(NewPassword);
