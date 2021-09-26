import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tag, TagButton } from './Tag';

export default {
  title: 'Tag',
  component: Tag
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = ({ children, ...args }) => (
  <Tag {...args} style={{ maxWidth: '80px' }}>
    {children}
  </Tag>
);

const ButtonTemplate: ComponentStory<typeof TagButton> = ({ children, ...args }) => (
  <TagButton {...args} style={{ maxWidth: '100px' }}>
    {children}
  </TagButton>
);

export const Default = Template.bind({});
Default.args = { variant: 'default', children: 'Hello' };

export const Blue = Template.bind({});
Blue.args = { variant: 'blue', children: 'Verified' };

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  variant: 'default',
  children: 'Ironman',
  leftSlot: (
    <img src="https://wiseoldman.net/img/runescape/icons_small/ultimate.png" alt="" width={10} height={12} />
  )
};

export const ButtonTag = ButtonTemplate.bind({});
ButtonTag.args = {
  variant: 'default',
  children: 'Zezima',
  rightSlot: <img src="https://wiseoldman.net/img/icons/clear.svg" alt="x" width={16} height={16} />
};
