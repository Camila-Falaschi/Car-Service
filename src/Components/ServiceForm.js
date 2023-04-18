import React, { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext/AppContext";
import { useNavigate } from "react-router-dom";
import Clients from "../DabaseMocks/clients.json";
import Mechanics from "../DabaseMocks/mechanics.json";
import Warehouse from "../DabaseMocks/warehouse.json";
import "../Styles/serviceForm.css";

function ServiceForm() {
  const { setPageType } = useContext(AppContext);

  const [client, setClient] = useState({});
  const [email, setEmail] = useState("");
  const [isUserValid, setIsUserValid] = useState(false);
  const [clientNotFound, setClientNotFound] = useState(false);

  const [mechanicId, setMechanicId] = useState("");
  const [responsibles, setResponsibles] = useState("");
  const [isResponsibleSelected, setIsResponsibleSelected] = useState(false);

  const [partsInWarehouse, setPartsInWarehouse] = useState("");
  const [selectedPart, setSelectedPart] = useState({});
  const [isPart, setIsPart] = useState(false);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    setResponsibles(Mechanics);
    setPartsInWarehouse(Warehouse);
  }, []);

  const searchClient = () => {
    const client = Clients.find((item) => item.email === email);
    if (client) {
      setClient(client);
      setIsUserValid(true);
    } else {
      setClient({});
      setClientNotFound(true);
      setIsUserValid(false);
    }
  };

  const handleOnChangePart = (value) => {
    if (value === "nao") {
      setIsPart(false);
    } else {
      const part = partsInWarehouse.find((item) => item.id === Number(value));
      setSelectedPart(part);
      setIsPart(true);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    const newService = {
      client: client,
      peças: selectedPart,
    };
    const mechanic = Mechanics.find((item) => item.id === Number(mechanicId));
    mechanic.services.push(newService);
    setPageType("");
    navigate("/");
  };

  return (
    <main className="main-section main-form">
      <section className="find-client-section">
        <label htmlFor="email-input">
          Email do Cliente
          <input
            type="email"
            id="email-input"
            placeholder="email@example.com.br"
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
              setClientNotFound(false);
            }}
            required
          />
        </label>
        <button
          type="button"
          className="button-style"
          onClick={() => searchClient()}
        >
          Buscar
        </button>
        <p hidden={!clientNotFound}>
          *Cliente não encontrado, por favor verifique o email inserido.
        </p>
      </section>
      <section className="form-section" hidden={!isUserValid}>
        <div>
          <h2>Pessoa Responsável</h2>
          <select
            type="text"
            id="select-seller"
            onChange={({ target }) => {
              setMechanicId(target.value);
              setIsResponsibleSelected(true);
              setButtonDisabled(false)
            }}
            required
          >
            <option value="" disabled={isResponsibleSelected}>
              Selecione a Pessoa Responsável
            </option>
            {responsibles.length > 0 &&
              responsibles.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div>
          <h2>Será necessário uma peça?</h2>
          <select
            type="text"
            id="select-part"
            onChange={({ target }) => {
              handleOnChangePart(target.value);
            }}
            required
          >
            <option value="nao">Não</option>
            {partsInWarehouse.length > 0 &&
              partsInWarehouse.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <h3 hidden={!isPart}>Valor da peça: R$ {selectedPart.price}</h3>
        <button
          type="button"
          className="button-style form-button"
          disabled={buttonDisabled}
          onClick={() => handleSubmit()}
        >
          Finalizar
        </button>
      </section>
    </main>
  );
}

export default ServiceForm;
