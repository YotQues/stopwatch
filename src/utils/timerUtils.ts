import { formatNumber } from './numbersToStrings';

type Setter<T, R> = (arg?: T) => R;

type IntervalSetter = Setter<number | undefined, void>;

type TimeSetter = (arg: number) => void;

type FormattedTime = {
  centSeconds: string;
  seconds: string;
  minutes: string;
  hours: string;
};

export function onStart(
  timeState: number,
  intervalState: number | undefined,
  intervalSetter: IntervalSetter,
  timeSetter: TimeSetter
): void {
  clearInterval(intervalState);
  const startTime = Date.now();
  let elapsedTime: number;

  let intervalId: number = window.setInterval(() => {
    if (timeState === 0) {
      elapsedTime = Date.now() - startTime;
    } else {
      elapsedTime += Date.now() - startTime;
    }
    timeSetter(elapsedTime);
  }, 10);
  intervalSetter(intervalId);
}

export function onPause(
  intervalState: number | undefined
  // intervalSetter: IntervalSetter
  // pauseRun: () => void
): void {
  window.clearInterval(intervalState);
  // pauseRun();
}

export function onStop(
  intervalState: number,
  isRunState: boolean,
  // intervalSetter: IntervalSetter,
  // timeSetter: TimeSetter
  stopRun: () => void
): void {
  if (intervalState || isRunState) {
    clearInterval(intervalState);
    // intervalSetter(undefined);
  }
  // timeSetter(0);
  stopRun();
}

export function FormatTime(elapsedTimeState: number): FormattedTime {
  let centSeconds: string | number;

  if (elapsedTimeState % 1000 !== 0) {
    centSeconds = formatNumber((elapsedTimeState % 1000) / 10);
  } else centSeconds = '00';

  let tempSeconds = (elapsedTimeState % 600000) / 1000;

  if (tempSeconds >= 60) {
    tempSeconds = tempSeconds % 60;
  }
  let seconds = formatNumber(tempSeconds);

  let tempMinutes = (elapsedTimeState % 3600000) / 60000;

  if (elapsedTimeState % 60000 === 0) {
    tempMinutes = tempMinutes % 60;
  }
  let minutes = formatNumber(tempMinutes);

  let hours = formatNumber(elapsedTimeState - (elapsedTimeState % 3600000));

  return {
    centSeconds,
    seconds,
    minutes,
    hours,
  };
}
