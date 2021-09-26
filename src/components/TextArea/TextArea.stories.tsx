import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextArea } from './TextArea';

export default {
  title: 'TextArea',
  component: TextArea,
  argTypes: {
    maxLength: { control: 'number' }
  },
  decorators: [
    Story => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = ({ children, ...args }) => (
  <TextArea {...args}>{children}</TextArea>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Your name'
};

export const WithCharacterCounter = Template.bind({});
WithCharacterCounter.args = {
  placeholder: 'Your name',
  maxLength: 20,
  value: 'abcd'
};
