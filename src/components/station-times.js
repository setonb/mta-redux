import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTimes } from '../actions/index';
import { bindActionCreators } from 'redux';


class StationTimes extends Component {
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
    this.props.timeAction();
    return this.props.times;
  }

  renderTimes() {
    if (this.props.times) {
      return <div className="content" dangerouslySetInnerHTML={{__html: this.props.times.data}} ></div>;
    } else {
      return <div>Loading...</div>;
    }
  }

  render() {
    return (
      <div>
        <div className="downtown">{this.renderTimes()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    times: state.times
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ timeAction: getTimes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StationTimes);
