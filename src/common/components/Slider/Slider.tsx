import { FC, ReactElement } from 'react';

import { Slide } from 'react-awesome-reveal';

export const Slider: FC = ({ children }): ReactElement => (
  <Slide direction="up" triggerOnce>
    {children}
  </Slide>
);
