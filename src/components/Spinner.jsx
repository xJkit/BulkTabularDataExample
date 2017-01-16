import React, { PropTypes } from 'react';
import { Spin } from 'antd';

const Spinner = (props) => (
  <div className="spinner">
    <Spin className="spinner-indicator" tip={props.tip} size="large" />
  </div>
);

Spinner.propTypes = {
  tip: PropTypes.string,
};

Spinner.defaultProps = {
  tip: '讀取中...',
};

export default Spinner;
