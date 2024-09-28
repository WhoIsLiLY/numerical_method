import React from 'react';

const Input = ({ label, value, onChange }) => {
  return (
    <div className="input-group">
    {label && <label className="labelField">{label}</label>}
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
  );
};

export default Input;