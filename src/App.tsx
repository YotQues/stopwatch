import React from 'react';
import { Button } from './components/Buttons/Button';

function App(): JSX.Element {
  return (
    <div className="p-8">
      <Button onClick={()=>console.log('clicked')} className="px-4 py-2 leading-4 bg-blue-500 text-white rounded hover:bg-blue-600">Button</Button>
    </div>
  );
}

export default App;
