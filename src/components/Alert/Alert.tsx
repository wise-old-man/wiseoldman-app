import React from 'react';
import { toVariant } from 'styles/utils';
import { AlertContainer } from './Alert.styles';

type AlertVariant = 'info' | 'warning' | 'error' | 'success';

interface AlertProps {
  children: React.ReactNode;
  variant: AlertVariant;
  icon?: string;
}

export const Alert: React.FC<AlertProps> = ({ children, variant, icon }) => {
  return (
    <AlertContainer className={toVariant(variant)}>
      {icon && <img src={icon} alt="" />}
      <span>{children}</span>
    </AlertContainer>
  );
};
