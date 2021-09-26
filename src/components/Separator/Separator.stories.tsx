import { ComponentMeta } from '@storybook/react';
import { Separator } from './Separator';

export default {
  title: 'Separator',
  component: Separator
} as ComponentMeta<typeof Separator>;

export const Horizontal: React.FC = () => {
  return <Separator orientation="horizontal" />;
};

export const Vertical: React.FC = () => {
  return <Separator orientation="vertical" style={{ height: 500 }} />;
};
