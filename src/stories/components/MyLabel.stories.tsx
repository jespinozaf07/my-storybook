import { MyLabel } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    size: { control: 'select', options: ['normal', 'h1', 'h2', 'h3'] },
    color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
    fontColor: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: 'normal',
  label: 'Hello word!',
  allCaps: false,
  color: 'primary',
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: 'normal',
  label: 'Hello word!',
  allCaps: true,
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'normal',
  label: 'Hello word!',
  allCaps: false,
  color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'normal',
  label: 'Hello word!',
  allCaps: false,
  color: 'tertiary',
};

export const Custom = Template.bind({});
Custom.args = {
  size: 'normal',
  label: 'Hello word!',
  allCaps: false,
  color: 'tertiary',
  fontColor: '#FF5733',
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  size: 'normal',
  label: 'Hello word!',
  allCaps: false,
  color: 'tertiary',
  fontColor: '#FF5733',
  backgroundColor: '#bcad27',
};
