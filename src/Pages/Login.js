import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <main>
      <div className="card">
        <h1>Não Implementado</h1>
        <button
          type="button"
          className="button-style"
          onClick={() => {
            navigate("/");
          }}
        >
          Voltar
        </button>
      </div>
    </main>
  );
}

export default Login;
