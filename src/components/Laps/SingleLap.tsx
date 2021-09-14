import { useEffect } from 'react';

import { formatTime } from '../../utils/timerUtils';

type SingleLapProps = {
  time: number;
  id: number;
};

export function SingleLap({ time, id }: SingleLapProps): JSX.Element {
  const { centSeconds, seconds, minutes, hours } = formatTime(time);
  return (
    <div className="flex justify-between items-center w-full border-2 rounded-sm">
      <h5>{id})</h5>
      <h4 className="text-center">{`
    ${hours}:${minutes}:${seconds}.${centSeconds}
    `}</h4>
    </div>
  );
}
