import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { DropdownContent, DropdownItem } from './Dropdown.styles';

interface DropdownItem {
  label: string;
  onSelected: () => void;
}

interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
}

export const Dropdown: React.FC<DropdownProps> = ({ trigger, items }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownContent align="start" sideOffset={10}>
        {items &&
          items.map(item => (
            <DropdownItem key={item.label} onSelect={item.onSelected}>
              {item.label}
            </DropdownItem>
          ))}
      </DropdownContent>
    </DropdownMenu.Root>
  );
};
