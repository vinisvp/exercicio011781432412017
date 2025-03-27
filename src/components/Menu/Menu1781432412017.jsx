import "./Menu.css";
import { useState } from "react";

function Menu1781432412017({ pageHandler }) {
  return (
    <div className="container">
      <h1>SIGA</h1>
      <h4>Cadastrar:</h4>
      <div
        className="page"
        onClick={() => {
          pageHandler("professor");
        }}
      >
        <p>Professor</p>
      </div>
      <div
        className="page"
        onClick={() => {
          pageHandler("disciplina");
        }}
      >
        <p>Disciplina</p>
      </div>
      <div
        className="page"
        onClick={() => {
          pageHandler("curso");
        }}
      >
        <p>Curso</p>
      </div>
    </div>
  );
}

export default Menu1781432412017;
