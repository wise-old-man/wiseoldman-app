import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Update'
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  disabled: true,
  variant: 'primary',
  children: 'Update'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Cancel'
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  disabled: true,
  variant: 'secondary',
  children: 'Cancel'
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  variant: 'secondary',
  children: 'Contribute on Github',
  leftSlot: <img src="https://wiseoldman.net/img/icons/github.svg" alt="" width={20} height={20} />
};

export const withRightIcon = Template.bind({});
withRightIcon.args = {
  variant: 'secondary',
  children: 'Contribute on Github',
  rightSlot: <img src="https://wiseoldman.net/img/icons/github.svg" alt="" width={20} height={20} />
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  variant: 'link',
  children: 'Create New Group'
};

export const IconButton = Template.bind({});
IconButton.args = {
  variant: 'icon',
  children: <img src="https://wiseoldman.net/img/icons/github.svg" alt="" width={24} height={24} />
};
