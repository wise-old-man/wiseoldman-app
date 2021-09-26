import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Switch } from './Switch';

export default {
  title: 'Switch',
  component: Switch
} as ComponentMeta<typeof Switch>;

export const Default: React.FC = () => {
  const [checked, setChecked] = useState(true);
  return <Switch checked={checked} onCheckedChange={setChecked} />;
};
