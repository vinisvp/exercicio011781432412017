import { useState } from 'react'

function Menu1781432412017({pageHandler}) {
  return (
    <>
      <h1>Menu!</h1>
      <button onClick={() => {pageHandler("professor")}}>Professor</button>
      <button onClick={() => {pageHandler("disciplina")}}>Disciplina</button>
      <button onClick={() => {pageHandler("curso")}}>Curso</button>
    </>
  )
}

export default Menu1781432412017;
