import React from 'react';
import Card from './Components/Card/Card';
import { Container, OutsideButton } from './Style';

function App() {
  return (
    <Container>
      <Card />
      <OutsideButton>
        <h1>Nova Tarefa</h1>
      </OutsideButton>
    </Container>
  );
}

export default App;
