import React, { Component } from 'react';
import { connect } from 'react-redux';

class HTMLTable extends Component {
  render() {
    return (
      <div className="html-table">
        <section className="title">Title</section>
        <section className="content">Content</section>
      </div>
    );
  }
}

export default connect()(HTMLTable);
