import { useState } from 'react'
import './Visualizar.css'

function VisualizarProfessor1781432412017(getData, setPage) {

  const renderRow = () =>{
    let data = getData("professores");
    let grid = [];
    data.forEach(teacher => {
      grid.push(renderField(teacher.id));
      grid.push(renderField(teacher.name));
      grid.push(renderField(teacher.email));
    });
    console.log(data)
    return grid;
  }

  const renderField = (data) => {
    return <div className='grid-cell'>{data}</div>;
  }

  return (
    <div className='visualizar-container'>
      <h1>Professores Cadastrados</h1>
      <div style={style.grid}>
        <div className='grid-cell-header'>Id</div>
        <div className='grid-cell-header'>Nome</div>
        <div className='grid-cell-header'>E-Mail</div>
        {renderRow()}
      </div>
      <button type='button' className='cadastro-button postive' onClick={() => { setPage('professor', true) }}>Cadastrar Novo</button><br/>
    </div>
  )
}

export default VisualizarProfessor1781432412017;

const style = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '0.5fr 1.5fr 1fr'
  }
}
