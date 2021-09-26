import { Listbox } from '@headlessui/react';
import styled from 'styled-components';

export const SelectorWrapper = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;
`;

export const OptionIcon = styled.img`
  margin-right: var(--space-3);
  user-select: none;
`;

export const OptionLabel = styled.span`
  text-align: left;
  flex-grow: 1;
`;

export const SelectorButtonArrow = styled.img`
  transform: rotate(0deg);

  &.-open {
    transform: rotate(180deg);
  }
`;

export const SelectorButton = styled(Listbox.Button)`
  appearance: none;
  cursor: pointer;
  line-height: 1;
  min-height: 45px;
  text-decoration: none;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: var(--font-3);
  border-radius: var(--radius-2);
  padding: 0 var(--space-4);
  color: var(--foreground);
  background-color: var(--gray-7);

  :hover {
    background-color: var(--gray-8);
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px var(--gray-9);
  }

  :disabled {
    cursor: default;
    color: var(--gray-9);
    background-color: var(--gray-6);

    ${SelectorButtonArrow}, ${OptionIcon} {
      opacity: 0.4;
    }
  }
`;

export const OptionsContainer = styled(Listbox.Options)`
  position: absolute;
  width: 100%;
  overflow: hidden;
  background: var(--panel);
  border-radius: var(--radius-2);
  margin-top: var(--space-2);
  max-height: var(--space-11);
  overflow-y: auto;
  outline: none;

  ::-webkit-scrollbar {
    width: var(--space-2);
  }

  ::-webkit-scrollbar-track {
    background: var(--gray-2);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gray-8);
    border-radius: var(--radius-1);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--gray-9);
  }
`;

export const OptionWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 var(--space-4);
  min-height: var(--space-8);
  font-size: var(--font-3);

  :hover {
    background: var(--gray-7);
  }

  &.-active {
    background: var(--gray-7);
  }

  &.-selected {
    color: var(--blue-11);
  }
`;

export const InputWrapper = styled.div`
  margin: 10px;

  input {
    width: 100%;
  }
`;
