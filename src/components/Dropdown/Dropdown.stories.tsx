import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'components';
import { Dropdown } from './Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  trigger: <Button variant="primary">Open Dropdown</Button>,
  items: [
    { label: 'Open Official Hiscores', onSelected: () => console.log('1') },
    { label: 'Re-check Player Type', onSelected: () => console.log('2') },
    { label: 'Edit', onSelected: () => console.log('3') },
    { label: 'Delete', onSelected: () => console.log('4') }
  ]
};
