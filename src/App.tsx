import { Stopwatch } from './components/Stopwatch';

export function App(): JSX.Element {
  return (
    <div className="w-full h-screen flex landscape:items-center">
      <Stopwatch />
    </div>
  );
}
