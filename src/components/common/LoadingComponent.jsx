// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function LoadingComponent(props) {
  const { message } = props;

  return <div>{message}</div>;
}

export default LoadingComponent;

LoadingComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
