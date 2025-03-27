import CadastroDisciplina1781432412017 from "./Cadastros/CadastroDisciplina1781432412017";
import CadastroProfessor1781432412017 from "./Cadastros/CadastroProfessor1781432412017";
import CadastroCurso1781432412017 from "./Cadastros/CadastroCurso1781432412017";

function PageRender1781432412017({page}) {
  const pagesCadastro = new Map([
    ["professor", CadastroProfessor1781432412017],
    ["disciplina", CadastroDisciplina1781432412017],
    ["curso", CadastroCurso1781432412017],
  ]);

  const showPage = () => {
    let current = pagesCadastro.get(page)();
    return current;
  };

  return (
    <>
        {showPage()}
    </>
  )
}

export default PageRender1781432412017;