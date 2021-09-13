import { useState, useEffect } from 'react';

import { formatTime } from '../../utils/timerUtils';

type TimerProps = {
  time: number;
};

export function Timer({ time = Date.now() }: TimerProps): JSX.Element {
  const [hrs, setHrs] = useState<string>('00');
  const [min, setMin] = useState<string>('00');
  const [sec, setSec] = useState<string>('00');
  const [centSec, setCentSec] = useState<string>('00');
  
  const makeTimeForm = (time: number): void => {
    const { centSeconds, seconds, minutes, hours } = formatTime(time);
    setCentSec(centSeconds);
    setSec(seconds);
    setMin(minutes);
    setHrs(hours);
  };

  useEffect((): void => {
    makeTimeForm(time);
  }, [time]);

  return (
    <div className="flex">
      <h3 className="text-8xl">{hrs}</h3>
      <h3 className="text-8xl">:{min}</h3>
      <h3 className="text-8xl">:{sec}</h3>
      <h3 className="text-8xl">.{centSec}</h3>
    </div>
  );
}
{
  /* <span className="time">{hrs < 10 ? `0${hrs}` : hrs}</span>
      <span className="unit">:</span>
      <span className="time right">{min < 10 ? `0${min}` : min}</span>
      <span className="unit">:</span>
      <span className="time right">
        {sec < 10 ? `0${sec}` : sec}.{centSec < 10 ? `0${centSec}` : centSec}
      </span> */
}
