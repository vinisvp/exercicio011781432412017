import CadastroDisciplina1781432412017 from "./Cadastros/CadastroDisciplina1781432412017";
import CadastroProfessor1781432412017 from "./Cadastros/CadastroProfessor1781432412017";
import CadastroCurso1781432412017 from "./Cadastros/CadastroCurso1781432412017";

import VisualizarDisciplina1781432412017 from "./Visualizadores/VisualizarDisciplina1781432412017";
import VisualizarProfessor1781432412017 from "./Visualizadores/VisualizarProfessor1781432412017";
import VisualizarCurso1781432412017 from "./Visualizadores/VisualizarCurso1781432412017";

function PageRender1781432412017({page, cadastrar, saveHandler, getHandler, pageHandler}) {
  const pagesCadastro = new Map([
    ["professor", CadastroProfessor1781432412017],
    ["disciplina", CadastroDisciplina1781432412017],
    ["curso", CadastroCurso1781432412017],
  ]);

  const pagesVisualizar = new Map([
    ["professor", VisualizarProfessor1781432412017],
    ["disciplina", VisualizarDisciplina1781432412017],
    ["curso", VisualizarCurso1781432412017],
  ]);

  const showPage = () => {
    let current;
    cadastrar ? current = pagesCadastro.get(page)(saveHandler, getHandler, pageHandler) : current = pagesVisualizar.get(page)(getHandler, pageHandler);
    return current;
  };

  return (
    <>
        {showPage()}
    </>
  )
}

export default PageRender1781432412017;