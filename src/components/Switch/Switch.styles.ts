import * as SwitchPrimitive from '@radix-ui/react-switch';
import styled from 'styled-components';

export const SwitchRoot = styled(SwitchPrimitive.Root)`
  width: 52px;
  height: 25px;
  background: var(--gray-1);
  border-radius: var(--radius-max);
  position: relative;

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--blue-7);
  }
`;

export const SwitchThumb = styled(SwitchPrimitive.Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: var(--gray-11);
  border-radius: var(--radius-max);

  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    background-color: var(--primary);
    transform: translateX(29px);
  }
`;
