import React from "react";
import "../stylesheets/Home.css";
import Surfer from "../img/Surfer-pana.svg";

function Home() {
  return (
    <section className="home">
      <div className="detalles">
        <h1 className="titulo">
          <span className="text-primero">
            OVETHCOIN <br />
          </span>
          <span className="text-segundo">EL FUTURO EN TUS MANOS</span>
        </h1>
        <p className="parrafo">
          OvethCoin tiene como objetivo liderar la lucha por la sostenibilidad
          marina y la preservación de nuestros océanos al crear un sistema
          financiero sostenible y descentralizado que permite a los usuarios
          comprar OvethCoin directamente para apoyar proyectos sostenibles.
          Únete ahora para surfear la ola del futuro sostenible.
        </p>
        <div className="botones-home">
          <button className="whitepaper">WHITEPAPER</button>
          <button className="auditoria">AUDITORIA</button>
        </div>
        <div className="img-home">
          <img src={Surfer} alt="Surfer" />
        </div>
      </div>
      <div className="buy">{/* CREAR SISTEMA DE COMPRA */}</div>
    </section>
  );
}

export default Home;
