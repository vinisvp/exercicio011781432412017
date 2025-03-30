import './App.css'
import Menu1781432412017 from './components/Menu/Menu1781432412017'
import Container1781432412017 from './components/Container1781432412017'
import PageRender1781432412017 from './components/PageRender1781432412017';
import { useState } from 'react';

function App() {  
  const [current, setCurrent] = useState(["professor", false]);

  const changePage = (name, cadastrar) => {
    setCurrent([name, cadastrar]);
    console.log("Page:", name, " ", cadastrar)
  }

  let data = new Map([
    ['professores', new Array()],
    ['disciplinas', new Array()],
    ['cursos', new Array()],
  ]);

  const save = (type, newData) =>{
    data.get(type)?.push(newData);
    console.log(data.get(type))
  }

  return (
    <Container1781432412017>
      <Container1781432412017>
        <Menu1781432412017 pageHandler={changePage} />
      </Container1781432412017>
      <Container1781432412017>
        <PageRender1781432412017 page={current[0]} cadastrar={current[1]} pageHandler={changePage} saveHandler={save}/>
      </Container1781432412017>
    </Container1781432412017>
  )
}

export default App
