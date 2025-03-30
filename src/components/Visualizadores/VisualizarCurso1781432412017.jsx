import { useState } from 'react'
import './Visualizar.css'

function VisualizarCurso1781432412017(getData, setPage) {
  const renderRow = () =>{
    let data = getData("cursos");
    let grid = [];
    data.forEach(course => {
      grid.push(renderField(course.acronym));
      grid.push(renderField(course.designation));
    });
    console.log(data)
    return grid;
  }

  const renderField = (data) => {
    return <div className='grid-cell'>{data}</div>;
  }

  return (
    <div className='visualizar-container'>
      <h1>Cursos Cadastrados</h1>
      <div style={style.grid}>
        <div className='grid-cell-header'>Sigla</div>
        <div className='grid-cell-header'>Designação</div>
        {renderRow()}
      </div>
      <button type='button' className='cadastro-button postive' onClick={() => { setPage('curso', true) }}>Cadastrar Novo</button><br/>
    </div>
  )
}

export default VisualizarCurso1781432412017;

const style = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '0.5fr 1.5fr'
  }
}