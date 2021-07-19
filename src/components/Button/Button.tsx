import React from 'react';

type ButtonProps = {
  disabled?: boolean;
  onClick?: React.EventHandler<any>;
};

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  onClick,
  children,
}) => (
  <button disabled={disabled} type="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
