import { useState } from 'react'
import './Visualizar.css'

function VisualizarDisciplina1781432412017(getData, setPage) {
  const renderRow = () =>{
    let data = getData("disciplinas");
    let grid = [];
    data.forEach(discipline => {
      grid.push(renderField(discipline.acronym));
      grid.push(renderField(discipline.name));
      grid.push(renderField(discipline.semester));
      grid.push(renderField(discipline.course));
      grid.push(renderField(discipline.teacher));
    });
    console.log(data)
    return grid;
  }

  const renderField = (data) => {
    return <div className='grid-cell'>{data}</div>;
  }

  return (
    <div className='visualizar-container'>
      <h1>Disciplinas Cadastradas</h1>
      <div style={style.grid}>
        <div className='grid-cell-header'>Sigla</div>
        <div className='grid-cell-header'>Nome</div>
        <div className='grid-cell-header'>Semestre</div>
        <div className='grid-cell-header'>Curso</div>
        <div className='grid-cell-header'>Professor</div>
        {renderRow()}
      </div>
      <button type='button' className='cadastro-button postive' onClick={() => { setPage('disciplina', true) }}>Cadastrar Novo</button><br/>
    </div>
  )
}

export default VisualizarDisciplina1781432412017;

const style = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '0.5fr 1.5fr 0.5fr 0.5fr 2fr'
  }
}