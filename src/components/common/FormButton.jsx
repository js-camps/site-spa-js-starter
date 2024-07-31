// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const FormButton = (props) => {
    return (
        <button
            disabled={props.isDisabled}
            className={props.classType || "primary"}
            type={props.type || "button"}
            onClick={props.handleButtonClick} // Add this line to ensure the click handler is called
        >
            {props.buttonText}
        </button>
    );
};

export default FormButton;

FormButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    type: PropTypes.string,
    handleButtonClick: PropTypes.func,
    isDisabled: PropTypes.bool,
    classType: PropTypes.string,
};

