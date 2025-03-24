import { useState, useEffect } from 'react'
import './App.css'
import Menu1781432412017 from './components/Menu1781432412017'
import CadastroDisciplina1781432412017 from './components/Cadastros/CadastroDisciplina1781432412017'
import CadastroProfessor1781432412017 from './components/Cadastros/CadastroProfessor1781432412017'
import CadastroCurso1781432412017 from './components/Cadastros/CadastroCurso1781432412017'
import Container1781432412017 from './components/Container1781432412017'

function App() {
  
  const pagesCadastro = new Map([
    ["professor", CadastroProfessor1781432412017],
    ["disciplina", CadastroDisciplina1781432412017],
    ["curso", CadastroCurso1781432412017],
  ]);

  let current = CadastroProfessor1781432412017;

  const showPage = (pageName) => {
    current = pagesCadastro.get(pageName);
    this.setState();
  }

  return (
    <Container1781432412017>
      <Container1781432412017>
        <Menu1781432412017 pageHandler={showPage} />
      </Container1781432412017>
      <Container1781432412017>
        { current() }
      </Container1781432412017>
    </Container1781432412017>
  )
}

export default App
