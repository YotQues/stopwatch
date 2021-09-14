import { LapActions } from '.';

export const LapsActionCreator = {
  addLap(time: number) {
    const lap = { time, id: Date.now() };
    return { type: LapActions.ADD_LAP, payload: lap };
  },
  deleteLaps() {
    return { type: LapActions.DELETE_LAPS };
  },
};
