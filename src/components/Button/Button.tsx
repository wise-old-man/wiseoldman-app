/* eslint-disable react/display-name */
import React from 'react';
import { toVariant } from 'styles/utils';
import { ButtonElement, ButtonSlot } from './Button.styles';

type ButtonVariant = 'primary' | 'secondary' | 'link' | 'icon';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', leftSlot, rightSlot, ...props }, forwardedRef) => {
    return (
      <ButtonElement className={toVariant(variant)} ref={forwardedRef} {...props}>
        {leftSlot && <ButtonSlot className="--left">{leftSlot}</ButtonSlot>}
        {children}
        {rightSlot && <ButtonSlot className="--right">{rightSlot}</ButtonSlot>}
      </ButtonElement>
    );
  }
);
