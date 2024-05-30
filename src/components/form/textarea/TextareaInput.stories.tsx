import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextareaInput, { TextareaInputProps } from './TextareaInput';

export default {
  title: 'Components/TextareaInput',
  component: TextareaInput,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<TextareaInputProps> = (args) => {
  const [value, setValue] = useState(args.value);
  return <TextareaInput {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Enter text',
  value: '',
};
