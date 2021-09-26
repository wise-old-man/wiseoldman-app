import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input, InputContainer, InputLabel } from './Input';

export default {
  title: 'Input',
  component: Input,
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
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({ children, ...args }) => <Input {...args}>{children}</Input>;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Your name'
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  type: 'text',
  placeholder: 'Your name',
  leftSlot: <img src="https://wiseoldman.net/img/icons/github.svg" alt="" width={24} height={24} />
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  type: 'text',
  placeholder: 'Your name',
  rightSlot: <img src="https://wiseoldman.net/img/icons/github.svg" alt="" width={24} height={24} />
};

export const WithCharacterCounter = Template.bind({});
WithCharacterCounter.args = {
  type: 'text',
  placeholder: 'Your name',
  maxLength: 20,
  value: 'abcd'
};

export const SuccessInput: React.FC = () => (
  <InputContainer>
    <Input id="success-input" type="input" variant="success" placeholder="Success" />
    <InputLabel htmlFor="success-input" variant="success">
      Found 37 members, 4 leaders.
    </InputLabel>
  </InputContainer>
);

export const ErrorInput: React.FC = () => (
  <InputContainer>
    <Input id="error-input" type="input" variant="error" placeholder="error" />
    <InputLabel htmlFor="error-input" variant="error">
      This name is already taken.
    </InputLabel>
  </InputContainer>
);
