import "./Menu.css";

function Menu1781432412017({ pageHandler }) {
  return (
    <div className="container">
      <h1>SIGA</h1>
      <h4>Cadastrar:</h4>
      <div
        className="page"
        onClick={() => {
          pageHandler("professor", true);
        }}
      >
        <p>Professor</p>
      </div>
      <div
        className="page"
        onClick={() => {
          pageHandler("disciplina", true);
        }}
      >
        <p>Disciplina</p>
      </div>
      <div
        className="page"
        onClick={() => {
          pageHandler("curso", true);
        }}
      >
        <p>Curso</p>
      </div>
      <h4>Visualizar:</h4>
      <div
        className="page"
        onClick={() => {
          pageHandler("professor", false);
        }}
      >
        <p>Professor</p>
      </div>
      <div
        className="page"
        onClick={() => {
          pageHandler("disciplina", false);
        }}
      >
        <p>Disciplina</p>
      </div>
      <div
        className="page"
        onClick={() => {
          pageHandler("curso", false);
        }}
      >
        <p>Curso</p>
      </div>
    </div>
  );
}

export default Menu1781432412017;
