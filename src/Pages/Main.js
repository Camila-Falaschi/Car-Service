import React from "react";
import UCLogo from "../Images/logoNova.png";
import { useNavigate } from 'react-router-dom';
import "../Styles/main.css";

function Main() {
  const navigate = useNavigate();

  return (
    <main className="main-section">
      <section className="card">
        <div className="header">
          <img src={UCLogo} alt="Ultracar Logo" className="logo" />
          <h1>Seja Bem-Vindo(a)!</h1>
        </div>
        <div className="navigation">
          <button type="button" onClick={() => navigate('/register-service')}>Criar novo serviço</button>
          <button type="button" onClick={() => navigate('/login')}>Fazer login</button>
        </div>
      </section>
    </main>
  );
}

export default Main;
