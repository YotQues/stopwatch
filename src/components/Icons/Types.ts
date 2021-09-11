// Meant as a helper for determining weather a "heroicons" icon should

import React from 'react';

// be rendered solid or outlined
export interface IconProps extends React.ComponentProps<'svg'> {
  solid?: boolean;
  className: string;
}
