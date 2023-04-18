import React, { useContext } from "react";
import AppContext from '../AppContext/AppContext';
import FindClient from "../Components/FindClient";
import QRCode from "../Components/QRCode";
import ServiceForm from "../Components/ServiceForm";

function Service() {
  const { pageType } = useContext(AppContext);

  return (
    <main className="main-section">
      <div className="card">
        {(pageType === "") && <FindClient />}
        {(pageType === "QRcode") && <QRCode />}
        {(pageType === "Form") && <ServiceForm />}
      </div>
    </main>
  );
}

export default Service;
