import React, { PropTypes } from 'react';
import Loading from 'react-loading';

const Spinner = (props) => (
  <div className="spinner">
    <Loading className="spinner-indicator" type="bars" color="#108ee9" />
    <span className="spinner-tip">{props.tip}</span>
  </div>
);

Spinner.propTypes = {
  tip: PropTypes.string,
};

Spinner.defaultProps = {
  tip: '讀取中...',
};

export default Spinner;
