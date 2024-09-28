import { useState } from 'react';
import { evaluate } from 'mathjs';
import Button from './components/button';
import Input from './components/input';

function App() {
  const [x0, setX0] = useState('');
  const [x1, setX1] = useState('');
  const [x2, setX2] = useState('');

  return (
    <>
      <Input 
        label="Input nilai f(x): " 
        value={x0} 
        onChange={setX0} 
      />
      <Input 
        label="Input nilai x1: " 
        value={x1} 
        onChange={setX1} 
      />
      <Input 
        label="Input nilai x2: " 
        value={x2} 
        onChange={setX2} 
      />
    </>
  );
}

export default App;
