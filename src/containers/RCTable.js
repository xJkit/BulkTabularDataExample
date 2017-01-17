import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadBulkData } from 'actions/bulkData';
import Spinner from 'components/Spinner';
import { Table } from 'antd';

class RCTable extends Component {

  static propTypes = {
    loadBulkData: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    err: PropTypes.string.isRequired,
    payload: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      timeStart: 0,
      timeEnd: 0,
    };
  }

  componentWillMount() {
    this.setState({
      timeStart: new Date().getTime(),
    });
    this.props.loadBulkData();
  }

  componentDidUpdate({ isFetching }) {
    if (isFetching !== this.props.isFetching) {
      this.setState({
        timeEnd: new Date().getTime(),
      });
    }
  }

  renderTable(songs) {
    const { timeStart, timeEnd } = this.state;
    const columns = [{
      title: '編號',
      dataIndex: 'id',
      key: 'number',
      width: 100,
    }, {
      title: '歌手',
      dataIndex: 'singer',
      key: 'singer',
      width: 100,
    }, {
      title: '歌名',
      dataIndex: 'songName',
      key: 'songName',
      width: 150,
    }, {
      title: '類型',
      dataIndex: 'genre',
      key: 'genre',
      width: 100,
    }, {
      title: '類型',
      dataIndex: 'singerType',
      key: 'singerType',
      width: 100,
    }, {
      title: '檔案名稱',
      dataIndex: 'fileName',
      key: 'fileName',
    }];

    return (
      <div>
        <h1>渲染時間：{timeEnd - timeStart} 毫秒</h1>
        <Table
          columns={columns}
          pagination={false}
          dataSource={songs}
          scroll={{ y: 650 }}
        />
      </div>
    );
  }

  render() {
    const { payload, isFetching } = this.props;
    return (
      <div className="rc-table">
      {isFetching
        ? <Spinner />
        : this.renderTable(payload)
      }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isFetching, payload, err } = state.bulkData;
  return {
    isFetching,
    err,
    payload,
  };
};

export default connect(mapStateToProps, {
  loadBulkData,
})(RCTable);
