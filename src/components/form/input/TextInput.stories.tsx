import React, { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import TextInput, { TextInputProps } from '../input/TextInput'

export default {
  title: 'Components/Forms/TextInput',
  component: TextInput,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
} as Meta

const Template: StoryFn<TextInputProps> = (args) => {
  const [value, setValue] = useState(args.value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  return <TextInput {...args} value={value} onChange={handleChange} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'Enter text',
  value: '',
}
