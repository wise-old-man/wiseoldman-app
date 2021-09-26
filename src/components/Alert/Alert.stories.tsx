import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert } from './Alert';

export default {
  title: 'Alert',
  component: Alert
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = ({ ...args }) => (
  <Alert {...args}>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut nulla ut <b>tellus pharetra </b>
      volutpat. Praesent posuere justo non lorem fermentum congue.
    </span>
  </Alert>
);

export const Info = Template.bind({});
Info.args = { variant: 'info' };

export const Success = Template.bind({});
Success.args = { variant: 'success' };

export const Error = Template.bind({});
Error.args = { variant: 'error' };

export const Warning = Template.bind({});
Warning.args = { variant: 'warning' };
