import React, { useContext, useState } from "react";
import AppContext from "../AppContext/AppContext";

function ServiceForm() {
  const { setClient } = useContext(AppContext);

  const [isUserValid, setIsUserValid] = useState(false);
  const [email, setEmail] = useState("");
  const [responsible, setresponsible] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <main>
      <section>
        <label htmlFor="email-input">
          Email do Cliente
          <input
            type="email"
            id="email-input"
            placeholder="email@example.com.br"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </label>
        <button type="button" onClick={() => setFindClientType("email")}>
          Buscar
        </button>
      </section>
      <section hidden={!isUserValid}>
        <label htmlFor="email-input">
          Pessoa Responsável
          <input
            type="email"
            id="email-input"
            placeholder="João Antônio"
            value={responsible}
            onChange={({ target }) => setresponsible(target.value)}
            required
          />
        </label>
      </section>
    </main>
  );
}

export default ServiceForm;
