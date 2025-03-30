import { useState } from 'react'
import './Cadastro.css'

function CadastroProfessor1781432412017(save, setPage) {
  const saveTeacher = () =>{
    let teacher = {
      id: parseInt(document.getElementById('id').value),
      name: document.getElementById('name').value,
      email: document.getElementById('email').value
    }
    clearForm();
    save('professores', teacher);
  }

  const clearForm = () =>{
    document.getElementById('id').value = "";
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
  }

  return (
    <form className='cadastro-container'>
      <h1>Cadastrar um Professor</h1>
      <div className='input-field'>
        <label>Indentificação</label><br/>
        <input type='number' id='id'/>
      </div>
      <div className='input-field'>
        <label>Nome</label><br/>
        <input type='text' id='name'/>
      </div>
      <div className='input-field'>
        <label>E-mail</label><br/>
        <input type='email' id='email'/>
      </div>
      <button type='button' className='cadastro-button postive' onClick={() => { saveTeacher() }}>Inserir</button><br/>
      <button type='button' className='cadastro-button neutral' onClick={() => { setPage('professor', false) }}>Cancelar</button>
    </form>
  )
}

export default CadastroProfessor1781432412017;
