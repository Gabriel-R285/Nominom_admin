import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import "./Progressbar.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function ProfileChanges(props) {
  const [state, setNewState] = useState(true);
  const isLoggedIn = props.isLoggedIn;

  const HandleLogin = useCallback(() => {
    setNewState((prevstate) => !prevstate);
  }, []);

  return (
    <div class="Container">
      {state ? <Event /> : <eventUpdated />}
      <AiOutlineCloseCircle className="close-icon" onClick={HandleLogin} />
    </div>
  );
}

export { ProfileChanges };
