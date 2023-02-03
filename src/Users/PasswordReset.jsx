import nominom from "../Img/Nominom.jpg";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./PasswordReset.css";
import { withSwal } from "react-sweetalert2";

class ResetPassword extends React.Component {
  MailSended() {
    this.swal.fire({
      showCloseButton: true,
      icon: "success",
      text:
        "Te hemos enviado un correo electronico con las instrucciones para reestablecer tu contraseña",
      width: "400",
      background: "#00d4ff",
      showConfirmButton: true,
      confirmButtonText: "continuar",
      customClass: {
        confirmButton: "custom-button",
        text: "custom-text"
      }
    });
  }
  render() {
    return (
      <body>
        <form class="login">
          <img src={nominom} alt="" />
          <p class="text-instruction">
            Por favor, ingresa tu mail para enviarte un link de recuperacion de
            contraseña
          </p>
          <div class="inputs">
            <div class="input-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="24"
                fill="currentColor"
                class="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              <input type="email" placeholder="userexample@gmail.com" />
            </div>
          </div>
          <button onClick={this.MailSended.bind(this)}>enviar</button>
        </form>
      </body>
    );
  }
}

export default withSwal(ResetPassword);
