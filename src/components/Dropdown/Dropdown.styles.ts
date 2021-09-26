import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';

export const DropdownTrigger = styled(DropdownMenu.Trigger)`
  background: none;
  outline: none;
`;

export const DropdownContent = styled(DropdownMenu.Content)`
  min-width: 220px;
  overflow: hidden;
  background: var(--panel);
  border-radius: var(--radius-2);
`;

export const DropdownItem = styled(DropdownMenu.Item)`
  cursor: pointer;
  padding: var(--space-4);
  font-size: var(--font-3);

  :hover {
    background: var(--gray-7);
  }

  :focus {
    background: var(--gray-8);
    outline: none;
  }

  :active {
    background: var(--gray-4);
  }
`;
