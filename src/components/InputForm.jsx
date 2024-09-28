import React from 'react';

function InputForm({ equation, setEquation, x0, setX0, x1, setX1 }) {
  return (
    <div>
      <div className="form-group mb-3">
        <label htmlFor="equation" className="form-label">Formula (e.g., 4 + x^2 - 2*x^4):</label>
        <input
          id="equation"
          type="text"
          className="form-control shadow-sm"
          placeholder="Enter your function formula"
          value={equation}
          onChange={(e) => setEquation(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="x0" className="form-label">x₀ (Initial Value 1):</label>
        <input
          id="x0"
          type="number"
          className="form-control shadow-sm"
          placeholder="Enter initial guess x₀"
          value={x0}
          onChange={(e) => setX0(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="x1" className="form-label">x₁ (Initial Value 2):</label>
        <input
          id="x1"
          type="number"
          className="form-control shadow-sm"
          placeholder="Enter initial guess x₁"
          value={x1}
          onChange={(e) => setX1(e.target.value)}
        />
      </div>
    </div>
  );
}

export default InputForm;
