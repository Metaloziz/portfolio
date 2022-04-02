import { FC, ReactElement } from 'react';

import { Link } from 'react-scroll';

type LinkComponentType = {
  idElement: string;
};

export const LinkComponent: FC<LinkComponentType> = ({
  idElement,
  children,
}): ReactElement => (
  <Link
    to={idElement}
    spy
    smooth
    hashSpy
    offset={20}
    duration={1000}
    delay={100}
    isDynamic
  >
    {children}
  </Link>
);
