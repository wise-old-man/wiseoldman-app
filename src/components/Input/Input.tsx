import React, { useState } from 'react';
import { cn, toVariant } from 'styles/utils';
import {
  InputContainerElement,
  InputCounter,
  InputElement,
  InputLabelElement,
  InputSlot,
  InputWrapper
} from './Input.styles';

type InputVariant = 'default' | 'error' | 'success';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  variant?: InputVariant;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

interface InputLabelProps extends React.ComponentPropsWithoutRef<'label'> {
  variant?: InputVariant;
}

export const InputContainer = InputContainerElement;

export const InputLabel: React.FC<InputLabelProps> = ({ children, variant = 'default', ...props }) => {
  return (
    <InputLabelElement className={toVariant(variant)} {...props}>
      {children}
    </InputLabelElement>
  );
};

export const Input: React.FC<InputProps> = ({ variant = 'default', leftSlot, rightSlot, ...props }) => {
  const [focused, setFocused] = useState(false);

  return (
    <InputWrapper className={cn(toVariant(variant), { '-focused': focused })}>
      {leftSlot && <InputSlot className="--left">{leftSlot}</InputSlot>}
      <InputElement
        {...props}
        onFocus={e => {
          setFocused(true);
          if (props.onFocus) props.onFocus(e);
        }}
        onBlur={e => {
          setFocused(false);
          if (props.onBlur) props.onBlur(e);
        }}
      />
      {props.maxLength && props.maxLength > 0 && (
        <InputCounter>
          {`${props.value ? props.value.toString().length : 0} / ${props.maxLength}`}
        </InputCounter>
      )}
      {rightSlot && <InputSlot className="--right">{rightSlot}</InputSlot>}
    </InputWrapper>
  );
};
