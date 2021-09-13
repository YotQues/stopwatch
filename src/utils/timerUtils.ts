import { formatNumber } from './numbersToStrings';

type Setter<R, T, K> = (arg1?: T, arg2?: K) => R;

type IntervalSetter = Setter<void, number | undefined, void>;

type IsRunSetter = Setter<void, boolean, void>;

type TimeSetter = Setter<void, number, void>;

type FormattedTime = {
  centSeconds: string;
  seconds: string;
  minutes: string;
  hours: string;
};

export function onStart(
  timeState: number,
  intervalSetter: IntervalSetter,
  timeSetter: TimeSetter
): void {
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
  intervalState: number,
  isRunSetter: IsRunSetter,
  intervalSetter: IntervalSetter
): void {
  window.clearInterval(intervalState);
  isRunSetter(false);
  intervalSetter(undefined);
}

export function onStop(
  intervalState: number,
  isRunState: boolean,
  intervalSetter: IntervalSetter,
  timeSetter: TimeSetter
): void {
  if (intervalState || isRunState) {
    clearInterval(intervalState);
    intervalSetter(undefined);
  }
  timeSetter(0);
}

export function onRestart(timeSetter: TimeSetter): void {
  timeSetter(0);
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
