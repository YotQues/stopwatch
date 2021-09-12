import React from 'react';

import { formatNumber } from '../../utils/numbersToStrings';

import { StopwatchState } from '../../state/actions/watchActions';

interface StopwatchProps {
  time?: number;
}

export class Stopwatch extends React.Component<StopwatchProps, StopwatchState> {
  constructor(props: StopwatchProps) {
    super(props);
    this.state = {
      isRun: false,
      elapsedTime: 0,
      intervalId: undefined,
    };
  }

  onStart(): void {
    this.setState({ isRun: true });
    let startTime: number = Date.now();
    let intervalId: number = window.setInterval(() => {
      let elapsedTime = Date.now() - startTime;
      this.setState({
        elapsedTime: elapsedTime,
      });
    }, 10);
    return this.setState({
      intervalId,
    });
  }

  onPause(): void {
    window.clearInterval(this.state.intervalId);
    this.setState({ isRun: false, intervalId: undefined });
  }

  onStop(): void {
    if (this.state.intervalId || this.state.isRun) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: undefined });
    }
    this.setState({ elapsedTime: 0 });
  }

  onRestart(): void {
    this.setState({ elapsedTime: 0 });
  }

  logTime() {
    let interval = setInterval(() => console.log(this.state.elapsedTime), 10);
    setTimeout(() => {
      window.clearInterval(interval);
    }, 64000);
  }

  formatTime() {
    let { elapsedTime } = this.state;

    let centSeconds: string | number;
    if (elapsedTime % 1000 !== 0) {
      centSeconds = formatNumber((elapsedTime % 1000) / 10);
    } else centSeconds = '00';

    let tempSeconds = (elapsedTime % 600000) / 1000;
    if (tempSeconds >= 60) {
      tempSeconds = tempSeconds % 60;
    }
    let seconds = formatNumber(tempSeconds);

    let tempMinutes = (elapsedTime % 3600000) / 60000;
    if (elapsedTime % 60000 === 0) {
      tempMinutes = tempMinutes % 60;
    }
    let minutes = formatNumber(tempMinutes);

    let hours = formatNumber(elapsedTime - (elapsedTime % 3600000));
    return {
      centSeconds,
      seconds,
      minutes,
      hours,
    };
  }

  render() {
    return (
      <div>
        <div>{this.formatTime().centSeconds}</div>
        <div>{this.formatTime().seconds}</div>
        <div>{this.formatTime().minutes}</div>
        <div>{this.formatTime().hours}</div>
      </div>
    );
  }
}
