import React from 'react';

type GridProps = {
  width?: number | string;
  height?: number | string;
  display?: 'flex' | 'grid';
  onClick?: React.EventHandler<any>;
  className?: string;
};

const Grid: React.FC<GridProps> = ({
  children,
  className,
  onClick,
  ...styles
}) => (
  <div
    role="none"
    style={styles}
    className={className}
    onClick={onClick}
    onKeyDown={onClick}
  >
    {children}
  </div>
);

export default Grid;
