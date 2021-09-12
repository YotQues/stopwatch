import React from 'react';

import {
  LapButton,
  StartButton,
  PauseButton,
  ResetButton,
  StopButton,
} from './index';

// interface ButtonType {
//   styles: ButtonStyles;
//   label: string;
//   icon: JSX.Element;
//   onClick: () => void;
// }
type Handler = () => void;

interface ButtonStackProps {
  state: {
    isRun: boolean;
  };
  onStartClick: Handler;
  onPauseClick: Handler;
  onLapClick: Handler;
  onResetClick: Handler;
  onStopClick: Handler;
}

export function ButtonStack({
  state,
  onStartClick,
  onPauseClick,
  onLapClick,
  onResetClick,
  onStopClick,
}: ButtonStackProps): JSX.Element {
  const renderRunButton = (): JSX.Element => {
    return !state.isRun ? (
      <StartButton onClick={onStartClick} />
    ) : (
      <PauseButton onClick={onPauseClick} />
    );
  };

  return (
    <div className="flex gap-x-0 5">
      {renderRunButton()}
      <LapButton onClick={onLapClick} />
      <ResetButton onClick={onResetClick} />
      <StopButton onClick={onStopClick} />
    </div>
  );
}

// const renderRunButton = (): JSX.Element => {
//   if (state.isRun)
//     return (
//       <Button
//         styles={{
//           bgColor: 'green-400',
//           activeBgColor: 'green-500',
//           textColor: 'gray-200',
//           activeTextColor: 'gray-100',
//         }}
//         onClick={onStartClick}
//         label="Start"
//       >
//         <Play
//           styles={{
//             color: 'gray-200',
//             activeColor: 'gray-100',
//             width: '4/5',
//           }}
//         />
//       </Button>
//     );
//   return (
//     <Button
//       styles={{
//         bgColor: 'yellow-300',
//         activeBgColor: 'yellow-400',
//         textColor: 'gray-900',
//         activeTextColor: 'gray-800',
//       }}
//       onClick={onPauseClick}
//       label="Pause"
//     >
//       <Pause
//         styles={{
//           color: 'gray-900',
//           activeColor: 'gray-800',
//           width: '4/5',
//         }}
//       />
//     </Button>
//   );
// };

// return (
//   <div className="flex gap-x-0.5">
//     {renderRunButton()}
//     <Button
//       label="Lap"
//       styles={{
//         bgColor: 'gray-700',
//         activeBgColor: 'gray-800',
//         textColor: 'gray-200',
//         activeTextColor: 'white',
//       }}
//       onClick={onLapClick}
//     >
//       <PlusCircleIcon
//         styles={{
//           color: 'gray-200',
//           activeColor: 'white',
//           width: '4/5',
//         }}
//       />
//     </Button>
//   </div>
// );
