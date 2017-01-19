import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadBulkData } from 'actions/bulkData';
import { setTimerStart, setTimerEnd } from 'actions/timer';
import Spinner from 'components/Spinner';
import { Table } from 'antd';

class RCTable extends Component {

  static propTypes = {
    loadBulkData: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    err: PropTypes.string.isRequired,
    timer: PropTypes.object.isRequired,
    setTimerStart: PropTypes.func.isRequired,
    setTimerEnd: PropTypes.func.isRequired,
    payload: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  componentWillMount() {
    this.props.loadBulkData();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isFetching === false && this.props.isFetching === true) {
      console.log(`payload.length: ${nextProps.payload.length}`);
      console.log('data ready, start rendering and counting time...');
      this.props.setTimerStart();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isFetching === true && this.props.isFetching === false) {
      this.props.setTimerEnd();
    }
  }


  renderTable(songs) {
    const columns = [{
      title: '編號',
      dataIndex: 'id',
      key: 'id',
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
    const { timeStart, timeEnd } = this.props.timer;

    return (
      <div>
        <h1>渲染時間：{(timeEnd - timeStart) / 1000} 秒</h1>
        <Table
          columns={columns}
          pagination={false}
          dataSource={songs}
          scroll={{ y: 700 }}
          rowKey="id"
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
  const { timer } = state;
  return {
    isFetching,
    err,
    payload,
    timer,
  };
};

export default connect(mapStateToProps, {
  loadBulkData,
  setTimerStart,
  setTimerEnd,
})(RCTable);
