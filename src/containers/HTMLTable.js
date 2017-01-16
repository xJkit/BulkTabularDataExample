import React, { Component } from 'react';
import { connect } from 'react-redux';

class HTMLTable extends Component {
  render() {
    return (
      <div className="html-table">
        Original HTML Table
      </div>
    );
  }
}

export default connect()(HTMLTable);
