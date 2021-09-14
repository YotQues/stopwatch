import { Stopwatch } from './components/Stopwatch';
import { LapList } from './components/Laps/LapList';

export function App(): JSX.Element {
  return (
    <div className="w-full h-screen flex flex-col landscape:items-center">
      <Stopwatch />
      <LapList />
    </div>
  );
}
