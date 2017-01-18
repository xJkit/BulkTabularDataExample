import React, { Component, PropTypes } from 'react';
import { loadBulkData } from 'actions/bulkData';
import { setTimerStart, setTimerEnd } from 'actions/timer';
import { connect } from 'react-redux';
import Spinner from 'components/Spinner';

class HTMLTable extends Component {

  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    loadBulkData: PropTypes.func.isRequired,
    setTimerStart: PropTypes.func.isRequired,
    setTimerEnd: PropTypes.func.isRequired,
    err: PropTypes.string.isRequired,
    timer: PropTypes.object.isRequired,
    bulkData: PropTypes.arrayOf(PropTypes.object),
  };

  componentWillMount() {
    this.props.loadBulkData();
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.bulkData.length !== this.props.bulkData.length) {
      console.log(`bulkData.length: ${nextProps.bulkData.length}`);
      console.log('data ready, start rendering and counting time...');
      this.props.setTimerStart();
    }
  }
  //
  componentDidUpdate({ isFetching }) {
    if (isFetching !== this.props.isFetching) {
      this.props.setTimerEnd();
    }
  }

  componentWillUnmount() {
    this.setState({
      timeStart: 0,
      timeEnd: 0,
    });
  }

  renderTable(songs) {
    const { timeStart, timeEnd } = this.props.timer;
    return (
      <div>
        <h1>渲染時間：{timeEnd - timeStart} 毫秒</h1>
        <table>
          <thead>
            <tr>
              <th>編號</th>
              <th>歌手</th>
              <th className="song-name">歌名</th>
              <th>類型</th>
              <th>曲風</th>
              <th className="file-name">檔案名稱</th>
            </tr>
          </thead>
          <tbody>
            {songs.map(song => (
              <tr key={song.id}>
                <td className="number">{song.id}</td>
                <td>{song.singer}</td>
                <td className="song-name">{song.songName}</td>
                <td>{song.singerType}</td>
                <td>{song.genre}</td>
                <td className="file-name">{song.fileName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const { bulkData, isFetching } = this.props;
    return (
      <div className="html-table">
      {isFetching
        ? <Spinner />
        : this.renderTable(bulkData)
      }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bulkData: state.bulkData.payload,
  isFetching: state.bulkData.isFetching,
  err: state.bulkData.err,
  timer: state.timer,
});

export default connect(mapStateToProps, {
  loadBulkData,
  setTimerStart,
  setTimerEnd,
})(HTMLTable);
