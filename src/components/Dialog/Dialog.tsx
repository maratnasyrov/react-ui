import React from 'react';
import { Grid } from '..';
import { useScreenSize } from '../../hooks';

type DialogProps = {
  open?: boolean;
  className?: string;
};

const Dialog: React.FC<DialogProps> = ({
  open = false,
  className,
  children,
}) => {
  const { width, height } = useScreenSize();

  return open ? (
    <Grid width={width} height={height} className={className}>
      {children}
    </Grid>
  ) : (
    <></>
  );
};

export default Dialog;
