import { useState } from 'react'
import './Cadastro.css'

function CadastroProfessor1781432412017() {



  return (
    <form className='cadastro-container'>
      <h1>Cadastrar um professor</h1>
      <div className='input-field'>
        <label>Indentificação</label><br/>
        <input type='number'/>
      </div>
      <div className='input-field'>
        <label>Nome</label><br/>
        <input type='text'/>
      </div>
      <div className='input-field'>
        <label>E-mail</label><br/>
        <input type='email'/>
      </div>
      <button className='cadastro-button postive'>Inserir</button><br/>
      <button className='cadastro-button neutral'>Cancelar</button>
    </form>
  )
}

export default CadastroProfessor1781432412017;
