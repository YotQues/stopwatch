import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { LapActions } from '../../state/actions';
import { LapsState, SingleLapState } from '../../state/reducers/lapsReducer';

import { toClassString } from '../../utils/toClassString';

import { SingleLap } from './SingleLap';
import { Refresh } from '../Icons';
import { State } from '../../state/reducers';

export interface LapListProps {
  state?: {
    laps: LapsState;
  };
}

export function LapList() {
  const dispatch = useDispatch();

  const state = {
    laps: useSelector((state: State) => state.laps),
  };

  const wrapStyles = {
    flex: 'flex flex-col',
    width: 'w-full',
  };
  const rowStyles = {
    flex: 'flex justify-end self-start flex-nowrap items-center',
    height: 'h-10',
    width: 'w-full',
  };
  const buttonStyles = {
    bgColor: 'bg-yellow-400',
    border: 'rounded',
    padding: 'px-2 py-1',
    width: 'w-12',
  };

  const onDeleteClick = () => {
    dispatch({ type: LapActions.DELETE_LAPS });
  };

  const TopRow = () => (
    <div className={`${toClassString(rowStyles)}`}>
      <button
        className={`${toClassString(buttonStyles)}`}
        onClick={onDeleteClick}
      >
        <Refresh styles={{ color: 'white', activeColor: 'white' }} />
      </button>
    </div>
  );
  return (
    <div className={`${toClassString(wrapStyles)}`}>
      <TopRow />
      {state.laps[0] &&
        state.laps.map(({ time, id }: SingleLapState, index: number) => (
          <SingleLap key={index} time={time} index={index} />
        ))}
    </div>
  );
}
