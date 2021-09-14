import { formatTime } from '../../utils/timerUtils';

type SingleLapProps = {
  time: number;
  index: number;
};

const text =
  'text-5xl xs-landscape:text-5xl xs:text-6xl text-center text-gray-200 leading-loose';

const textTransform = 'transform portrait:-translate-y-1.5';

const flex = `flex justify-around items-center`;

export function SingleLap({ time, index }: SingleLapProps): JSX.Element {
  const { centSeconds, seconds, minutes, hours } = formatTime(time);

  const boxDimensions = 'w-80 h-80 landscape:h-72 landscape:w-72';
  const cellWidth = 'w-20';
  const cellHeight = 'h-full';

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

  return (
    <div className={`${flex} ${text} w-full border-2 rounded my-1`}>
      <Cell>{index + 1})</Cell>
      <Cell>{hours}</Cell>
      <Divider />
      <Cell>{minutes}</Cell>
      <Divider />
      <Cell>{seconds}</Cell>
      {parseInt(hours) < 99 && (
        <>
          <Divider>.</Divider>
          <Cell>{centSeconds}</Cell>
        </>
      )}
    </div>
  );
}
