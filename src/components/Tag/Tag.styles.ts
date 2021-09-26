import styled, { css } from 'styled-components';

export const TagSlot = styled.span`
  display: flex;

  &.--left {
    margin-right: var(--space-2);
  }

  &.--right {
    margin-left: var(--space-2);
  }
`;

const CommonTagStyles = css`
  border-radius: var(--radius-3);
  border: 1px solid var(--gray-11);
  font-size: var(--font-2);
  color: var(--gray-11);
  padding: 0 var(--space-3);
  min-height: var(--space-7);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &.--blue {
    border-color: var(--primary);
  }
`;

export const TagElement = styled.div`
  ${CommonTagStyles}
`;

export const TagButtonElement = styled.button`
  ${CommonTagStyles}
  background: none;
  cursor: pointer;

  :hover {
    border: 1px solid var(--gray-10);
    color: var(--gray-10);
  }

  :active {
    border: 1px solid var(--gray-8);
    color: var(--gray-8);
  }
`;
