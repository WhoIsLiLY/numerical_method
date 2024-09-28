import React from 'react';

function ResultsTable({ iterations }) {
  return (
    <div className="table-responsive">
      <h2 className="text-center text-success mb-4">Iterations Results</h2>
      <table className="table table-bordered table-hover shadow-sm">
        <thead className="thead-light">
          <tr>
            <th>Iteration</th>
            <th>x(i-1)</th>
            <th>x(i)</th>
            <th>f(x(i-1))</th>
            <th>f(x(i))</th>
            <th>x(i+1)</th>
            <th>Error</th>
          </tr>
        </thead>
        <tbody>
          {iterations.map((iterationData) => (
            <tr key={iterationData.iteration}>
              <td>{iterationData.iteration}</td>
              <td>{iterationData.xPrev}</td>
              <td>{iterationData.xCurr}</td>
              <td>{iterationData.fxPrev}</td>
              <td>{iterationData.fxCurr}</td>
              <td>{iterationData.xNext}</td>
              <td>{iterationData.error}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultsTable;
