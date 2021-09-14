import { useState, useEffect } from 'react';
import { isPropertySignature } from 'typescript';

import { formatTime } from '../../utils/timerUtils';

export type TimerProps = {
  time: number;
};

export function Timer({ time = 0 }: TimerProps): JSX.Element {
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

  const RoundBox = (props: React.ComponentProps<'div'>) => (
    <div
      className={`${boxDimensions} ${text} ${flex} rounded-full border-2 border-gray-200 shadow-lg`}
    >
      {props.children}
    </div>
  );

  const Cell = (props: React.ComponentProps<'div'>) => (
    <div className={`${cellWidth} ${cellHeight} ${textTransform} `}>
      {props.children}
    </div>
  );
  const Divider = (props: React.ComponentProps<'div'>) => (
    <div className={`w-2 ${cellHeight} ${textTransform}`}>
      {props.children ? props.children : ':'}
    </div>
  );

  const boxDimensions = 'w-80 h-80 landscape:h-72 landscape:w-72';
  const cellWidth = 'w-20';
  const cellHeight = 'h-20';

  const text =
    'text-5xl xs-landscape:text-5xl xs:text-6xl text-center text-gray-200 leading-loose';

  const textTransform = 'transform portrait:-translate-y-1.5';

  const flex = `flex justify-around items-center`;

  return (
    <RoundBox>
      <Cell>{hrs}</Cell>
      <Divider />
      <Cell>{min}</Cell>
      <Divider />
      <Cell>{sec}</Cell>
      {parseInt(hrs) < 99 && (
        <>
          <Divider>.</Divider>
          <Cell>{centSec}</Cell>
        </>
      )}
    </RoundBox>
  );
}
