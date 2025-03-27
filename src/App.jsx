import './App.css'
import Menu1781432412017 from './components/Menu/Menu1781432412017'
import Container1781432412017 from './components/Container1781432412017'
import PageRender1781432412017 from './components/PageRender1781432412017';
import { useState } from 'react';

function App() {
  
  const [current, setCurrent] = useState("professor");

  const changePage = (name) => {
    setCurrent(name);
  }

  return (
    <Container1781432412017>
      <Container1781432412017>
        <Menu1781432412017 pageHandler={changePage} />
      </Container1781432412017>
      <Container1781432412017>
        <PageRender1781432412017 page={current} />
      </Container1781432412017>
    </Container1781432412017>
  )
}

export default App
