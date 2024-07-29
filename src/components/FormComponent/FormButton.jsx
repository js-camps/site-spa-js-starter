// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
      <button
          onClick={props.handleButtonClick}
          className={props.classType || "primary"}
      >
        {props.buttonText}
      </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  classType: PropTypes.string, // Added classType to propTypes
  handleButtonClick: PropTypes.func,
};

export default Button;
