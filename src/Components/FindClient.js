import React, { useContext } from "react";
import AppContext from "../AppContext/AppContext";
import QRCodeIcon from "../Images/qr-code-icon.svg";
import "../Styles/findClient.css";

function FindClient() {
  const { setPageType } = useContext(AppContext);

  return (
    <div className="qr-login-container">
      <img src={QRCodeIcon} alt="qr-code-icon" className="qr-icon" />
      <h2>Cliente possui QR Code?</h2>
      <button
        type="button"
        onClick={() => setPageType("QRcode")}
        className="button-style unavailable"
      >
        Sim - Ler QR Code
      </button>
      <button
        type="button"
        className="button-style"
        onClick={() => setPageType("Form")}
      >
        Não - Preencher Manualmente
      </button>
    </div>
  );
}

export default FindClient;
