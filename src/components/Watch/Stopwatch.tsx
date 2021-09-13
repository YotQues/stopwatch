import React from 'react';
import { connect } from 'react-redux';
import { StopwatchState } from '../../state/reducers/watchReducer';

interface WatchStateSetters {
  StartRun: (intervalId: number) => void;
  PauseRun: () => void;
  RestartRun: () => void;
  StopRun: () => void;
}

class PlainStopwatch extends React.Component {
  constructor(props) {
    super(props)
  }

}



const mapStateToProps = ({
  isRun,
  elapsedTime,
  intervalId,
}: StopwatchState) => {
  return {
    isRun,
    elapsedTime,
    intervalId,
  };
};

export const App = connect(mapStateToProps, {
  StartRun,
  PauseRun,
  RestartRun,
  StopRun,
});
