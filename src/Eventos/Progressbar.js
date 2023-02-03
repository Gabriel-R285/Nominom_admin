import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import "./Progressbar.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import SweetAlert2 from "react-sweetalert2";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Progressbar(props) {
  const [state, setNewState] = useState(true);

  /* Event Handlers */
  const HandleLogin = useCallback(() => {
    setNewState((prevstate) => !prevstate);
  }, []);
  const HandleLogout = useCallback(() => {
    setNewState((prevstate) => !prevstate);
  }, []);

  const Event = (props) => {
    return (
      <>
        <h1> Nueva carga de archivo...</h1>
        <p class="Message"> Nueva base de datos Jun22xls</p>
        <progress value="10" max="100">
          75%
        </progress>
        <AiOutlineCloseCircle className="close-icon" />
      </>
    );
  };
  const eventUpdated = (props) => {
    return <h1 onClick={HandleLogout}>Archivo Cargado exitosamente</h1>;
  };

  return <div class="Container">{state ? <Event /> : <eventUpdated />}</div>;
}

export { Progressbar };
