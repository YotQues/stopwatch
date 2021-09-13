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

  useEffect(() => {
    makeTimeForm(time);
  }, [time]);

  const boxDimensions = 'w-80 h-80 lg:w-128 lg:h-128';
  const cellWidth = 'w-20 lg:w-36 xl:w-48';
  const cellHeight = 'h-20 lg:h-36 xl:h-48';

  const fontSize = 'text-6xl md:text-8xl lg:text-9xl xl:text-2xl';

  const boxClassName = `${boxDimensions} ${fontSize} flex justify-around items-center text-center text-gray-200 rounded-full`;

  return (
    <div className={boxClassName + ' border-2 border-gray-200 shadow-lg'}>
      <div className={` ${cellWidth} ${cellHeight} `}>{hrs}</div>
      <div className={`w-2 ${cellHeight}`}>:</div>
      <div className={`${cellWidth} ${cellHeight} `}>{min}</div>
      <div className={`w-2 ${cellHeight}`}>:</div>
      <div className={`${cellWidth} ${cellHeight} `}>{sec}</div>
      <div className={`w-2 ${cellHeight}`}>:</div>
      <div className={`${cellWidth} ${cellHeight} `}>{centSec}</div>
    </div>
  );
}

{
  /* <div
  className={`w-1 h-1/2  relative -inset-x-1/2 -inset-y-1/4 origin-bottom transform rotate-${degrees} transition-transform ease-linear`}
>
  <div className="w-full h-1/2 bg-black"></div>
  <div className="w-full h-1/2"></div>
</div> */
}
