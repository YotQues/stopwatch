import { AnyAction } from 'redux';
import { LapActions } from '../actions';

export type SingleLapState = { time: number; id: number };

export type LapsState = SingleLapState[] | [];

const initState =
  localStorage.getItem('laps') !== null ? [...JSON.parse('laps')] : [];

export function lapsReducer(
  state: LapsState = initState,
  action: AnyAction
): LapsState {
  const { ADD_LAP, DELETE_LAPS } = LapActions;
  switch (action.type) {
    case ADD_LAP:
      let laps = [...state, action.payload];
      localStorage.setItem('laps', JSON.stringify(laps));
      return laps;
    case DELETE_LAPS:
      localStorage.removeItem('laps');
      return [];
    default:
      return state;
  }
}
