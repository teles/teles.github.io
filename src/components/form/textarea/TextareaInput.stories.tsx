import React, { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import TextareaInput, { TextareaInputProps } from './TextareaInput'

export default {
  title: 'Components/Forms/TextareaInput',
  component: TextareaInput,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
} as Meta

const Template: StoryFn<TextareaInputProps> = (args) => {
  const [value, setValue] = useState(args.value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  return <TextareaInput {...args} value={value} onChange={handleChange} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'Enter text',
  value: '',
}
