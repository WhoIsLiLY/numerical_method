import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
