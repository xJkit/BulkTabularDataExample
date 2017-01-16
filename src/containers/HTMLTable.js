import React, { Component, PropTypes } from 'react';
import { loadBulkData } from 'actions/bulkData';
import { connect } from 'react-redux';
import Spinner from 'components/Spinner';

class HTMLTable extends Component {

  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    loadBulkData: PropTypes.func.isRequired,
    err: PropTypes.string.isRequired,
    bulkData: PropTypes.arrayOf(PropTypes.object),
  };

  constructor(props) {
    super(props);
    this.state = {
      bulkData: this.props.bulkData,
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
});

export default connect(mapStateToProps, {
  loadBulkData,
})(HTMLTable);
