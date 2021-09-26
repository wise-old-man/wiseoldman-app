import { Tab as HeadlessTab } from '@headlessui/react';
import styled from 'styled-components';

export const TabElement = styled.button`
  border: none;
  background: transparent;
  flex-grow: 1;
  border-bottom: 3px solid transparent;

  font-size: var(--font-3);
  font-weight: var(--bold);
  color: var(--foreground-low);
  padding: calc(var(--space-4) + 3px) 0 var(--space-4) 0;

  :focus {
    outline: none;
    border-color: var(--blue-7);
  }

  &.--selected {
    color: white;
    border-bottom: 3px solid var(--primary);
  }
`;

export const TabListElement = styled(HeadlessTab.List)`
  display: flex;
  flex-direction: row;
  border-radius: var(--radius-2);
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: var(--space-2);
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

  &.--panel {
    width: 100%;
    max-width: 100%;
    background: var(--panel);

    ${TabElement} {
      min-width: var(--space-10);
    }
  }

  &.--large {
    ${TabElement} {
      font-size: var(--font-7);
    }
  }
`;

export const TabListWrapper = styled.div`
  width: 100%;
`;
