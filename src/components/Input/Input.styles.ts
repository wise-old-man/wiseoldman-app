import styled from 'styled-components';

export const InputContainerElement = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputLabelElement = styled.label`
  width: 100%;
  font-size: var(--font-2);
  padding-top: var(--space-3);

  &.--error {
    color: var(--red-9);
  }

  &.--success {
    color: var(--green-9);
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  background: var(--gray-2);
  border-radius: var(--radius-2);
  overflow: hidden;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 var(--space-4);

  &.-focused {
    background: var(--gray-1);
  }

  &.--error {
    box-shadow: 0 0 0 1px var(--red-9);
  }

  &.--success {
    box-shadow: 0 0 0 1px var(--green-9);
  }
`;

export const InputCounter = styled.span`
  color: var(--gray-11);
  font-size: var(--font-2);
  padding-left: var(--space-3);
  width: auto;
`;

export const InputSlot = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;

  &.--left {
    margin-right: var(--space-3);
  }

  &.--right {
    margin-left: var(--space-3);
  }
`;

export const InputElement = styled.input`
  color: white;
  background: transparent;
  padding: var(--space-4) 0;
  flex-grow: 1;

  ::placeholder {
    color: var(--gray-10);
  }

  :active,
  :focus {
    outline: none;
  }
`;
