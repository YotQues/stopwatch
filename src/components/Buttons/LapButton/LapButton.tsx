import React from 'react';

import { Button, ButtonProps } from '../Button';

interface LapButtonProps extends React.ComponentProps<'button'> {
  onClick(): void;
}

export function LapButton({}: LapButtonProps): JSX.Element {
  return <Button>LapButton</Button>;
}
