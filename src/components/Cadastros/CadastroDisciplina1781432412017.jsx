import { useState } from 'react'
import './Cadastro.css'

function CadastroDisciplina1781432412017(save, getData, setPage) {
  const saveDiscipline = () =>{
    var selectCourse = document.getElementById('course');
    var selectTeacher = document.getElementById('teacher');

    let discipline = {
      acronym: document.getElementById('acronym').value,
      name: document.getElementById('name').value,
      semester: parseInt(document.getElementById('semester').value),
      course: selectCourse.options[selectCourse.selectedIndex].text,
      teacher: selectTeacher.options[selectTeacher.selectedIndex].text
    }
    clearForm();
    save('disciplinas', discipline);
    setPage('disciplina', false);
  }

  const clearForm = () =>{
    document.getElementById('acronym').value = "",
    document.getElementById('name').value = "",
    document.getElementById('semester').value = "",
    document.getElementById('course').value = "",
    document.getElementById('teacher').value = ""
  }

  const loadCourses = () => {
    let courses = getData('cursos');
    let options = [];
    courses.forEach(course => {
      options.push(<option value={course.acronym}>{course.acronym}</option>);
    });
    return options;
  }
  
  const loadTeachers = () => {
    let teachers = getData('professores');
    let options = [];
    teachers.forEach(teacher => {
      options.push(<option value={teacher.name}>{teacher.name}</option>);
    });
    return options;
  }

  return (
    <form className='cadastro-container'>
      <h1>Cadastrar uma Disciplina</h1>
      <div className='input-field'>
        <label>Sigla</label><br/>
        <input type='text' id='acronym'/>
      </div>
      <div className='input-field'>
        <label>Nome</label><br/>
        <input type='text' id='name'/>
      </div>
      <div className='input-field'>
        <label>Semestre</label><br/>
        <input type='number' id='semester'/>
      </div>
      <div className='input-field'>
        <label>Curso</label><br/>
        <select id='course'>
          {loadCourses()}
        </select>
      </div>
      <div className='input-field'>
        <label>Professor</label><br/>
        <select id='teacher'>
          {loadTeachers()}
        </select>
      </div>
      <button type='button' className='cadastro-button postive' onClick={() => { saveDiscipline() }}>Inserir</button><br/>
      <button type='button' className='cadastro-button neutral' onClick={() => { setPage('disciplina', false) }}>Cancelar</button>
    </form>
  )
}

export default CadastroDisciplina1781432412017;
