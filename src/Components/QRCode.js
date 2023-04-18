import React, { useContext } from "react";
import AppContext from "../AppContext/AppContext";
import { useNavigate } from "react-router-dom";

function QRCode() {
  const { setPageType } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div className="card">
      <h1>Não Implementado</h1>
      <button
        type="button"
        className="button-style"
        onClick={() => {
          setPageType("");
          navigate("/service");
        }}
      >
        Voltar
      </button>
    </div>
  );
}

export default QRCode;
