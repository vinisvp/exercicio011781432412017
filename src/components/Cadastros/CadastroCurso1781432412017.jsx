import { useState } from 'react'
import './Cadastro.css'

function CadastroCurso1781432412017(save, getData, setPage) {
  const saveCourse = () =>{
    let course = {
      acronym: document.getElementById('acronym').value,
      designation: document.getElementById('designation').value
    }
    clearForm();
    save('cursos', course);
    setPage('curso', false);
  }

  const clearForm = () =>{
    document.getElementById('acronym').value = "";
    document.getElementById('designation').value = "";
  }

  return (
    <form className='cadastro-container'>
      <h1>Cadastrar um Curso</h1>
      <div className='input-field'>
        <label>Sigla</label><br/>
        <input type='text' id='acronym'/>
      </div>
      <div className='input-field'>
        <label>Designação Completa</label><br/>
        <input type='text' id='designation'/>
      </div>
      <button type='button' className='cadastro-button postive' onClick={() => { saveCourse() }}>Inserir</button><br/>
      <button type='button' className='cadastro-button neutral' onClick={() => { setPage('curso', false) }}>Cancelar</button>
    </form>
  )
}

export default CadastroCurso1781432412017;
