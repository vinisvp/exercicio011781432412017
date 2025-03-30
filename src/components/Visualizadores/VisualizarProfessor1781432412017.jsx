import { useState } from 'react'
import './Visualizar.css'

function VisualizarProfessor1781432412017(setPage) {

  return (
    <div className='visualizar-container'>
      <h1>Professores Cadastrados</h1>
      <div className='visualizar-grid'>
        <div className='teacher-field-header'>Indentificação</div>
        <div className='teacher-field-header'>Nome</div>
        <div className='teacher-field-header'>E-Mail</div>
        <div className='teacher-field'>Informação</div>
        <div className='teacher-field'>Informação</div>
        <div className='teacher-field'>Informação</div>
      </div>
      <button type='button' className='cadastro-button postive' onClick={() => { setPage('professor', true) }}>Cadastrar Novo</button><br/>
    </div>
  )
}

export default VisualizarProfessor1781432412017;
