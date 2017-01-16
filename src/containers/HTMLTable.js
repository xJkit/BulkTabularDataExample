import React, { Component, PropTypes } from 'react';
import { loadBulkData } from 'actions/bulkData';
import { connect } from 'react-redux';

class HTMLTable extends Component {

  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    loadBulkData: PropTypes.func.isRequired,
    err: PropTypes.string.isRequired,
    bulkData: PropTypes.arrayOf(PropTypes.object),
  };

  componentWillMount() {
    this.props.loadBulkData();
  }

  render() {
    return (
      <div className="html-table">
        <section className="title">Title</section>
        <section className="content">Content</section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bulkData: state.bulkData.payload,
  isFetching: state.bulkData.isFetching,
  err: state.bulkData.err,
});

export default connect(mapStateToProps, {
  loadBulkData,
})(HTMLTable);
