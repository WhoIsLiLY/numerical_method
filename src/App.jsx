import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import InputForm from './components/InputForm';
import ResultsTable from './components/ResultTable';
import Button from './components/Button';
import './App.css'; // For custom styles

function App() {
  const [equation, setEquation] = useState('');
  const [x0, setX0] = useState('');
  const [x1, setX1] = useState('');
  const [iterations, setIterations] = useState([]);
  const [error, setError] = useState(null);

  const secantMethod = (fStr, x0, x1, tolerance = 0.0001, maxIterations = 100) => {
    let xPrev = parseFloat(x0); // xi-1
    let xCurr = parseFloat(x1); // xi
    let iteration = 0; // initial iteration
    const iterationData = [];
  
    while (Math.abs(evaluate(fStr, { x: xCurr })) > tolerance && iteration < maxIterations) {
      let fxCurr = evaluate(fStr, { x: xCurr }); // f(xi)
      let fxPrev = evaluate(fStr, { x: xPrev }); // f(xi-1)
      let xNext = xCurr - (fxCurr * (xCurr - xPrev)) / (fxCurr - fxPrev); // xi+1 = xi - (f(xi)*(xi - xi-1)) / (fxi - fxi-1)
  
      iterationData.push({
        iteration: iteration + 1,
        xPrev: xPrev.toFixed(6),
        xCurr: xCurr.toFixed(6),
        fxPrev: fxPrev.toFixed(6),
        fxCurr: fxCurr.toFixed(6),
        xNext: xNext.toFixed(6),
        error: Math.abs((xCurr - xPrev)/xCurr).toFixed(6),
      });
  
      xPrev = xCurr;
      xCurr = xNext;
      iteration++;
    }
  
    return iterationData;
  };

  const handleCalculate = () => {
    try {
      const resultIterations = secantMethod(equation, x0, x1);
      setIterations(resultIterations);
      setError(null);
    } catch (err) {
      setError('Invalid equation or input. Please check your formula.');
      setIterations([]);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h1 className="text-center text-primary mb-4">Secant Method Calculator</h1>
        <InputForm
          equation={equation}
          setEquation={setEquation}
          x0={x0}
          setX0={setX0}
          x1={x1}
          setX1={setX1}
        />
        <Button label="Calculate" onClick={handleCalculate} />
        {error && <p className="text-danger mt-3">{error}</p>}
      </div>
      {iterations.length > 0 && (
        <div className="card shadow-lg mt-5 p-4">
          <ResultsTable iterations={iterations} />
        </div>
      )}
    </div>
  );
}

export default App;
