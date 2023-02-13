import React from 'react';
import Logo from './components/atoms/logo';
import Button from './components/atoms/button';
import DisplayText from './components/atoms/display-text';
import Input from './components/atoms/input';
import Form from './components/molecules/form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello world
      </header>
      <Logo/>
      <Button type="primary">Exemplo</Button>
      <Button>Exemplo</Button>
      <DisplayText>+21 988841994</DisplayText>
      <Form>
        <Input type="text" placeholder="Digite seu nome" label="Nome"/>
      </Form>
    </div>
  );
}

export default App;
