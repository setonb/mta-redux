import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStation } from '../actions/index';
import { getTimes } from '../actions/index';
import { bindActionCreators } from 'redux';


class StationList extends Component {
  constructor(props) {
    super(props);

    this.printTimes = this.printTimes.bind(this);
    this.renderTimes = this.renderTimes.bind(this);
  }

  componentDidMount() {
    this.printTimes();
    // setInterval(() => this.printTimes(), 30 * 1000);
  }

  printTimes() {
    this.props.getTimes();
    return this.props.times;
  }

  renderTimes() {
    if (this.props.times) {
      return <div className="content" dangerouslySetInnerHTML={{__html: this.props.times.data}} ></div>;
    } else {
      return <div>Loading...</div>;
    }
  }

  renderList() {
    return this.props.stations.map( (station) => {
      return (
        <li
          key={station.name}
          id={station.stationId}
          onClick={() => this.props.getTimes(station.stationId, station.direction) }>
          {station.name}
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderList()}
        </ul>
        <div className="downtown">{this.renderTimes()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stations: state.stations,
    times: state.times
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getStation, getTimes },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StationList);
