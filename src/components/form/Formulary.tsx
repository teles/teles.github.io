"use client"
import React, { useState } from 'react'
import Button from '@/components/button/Button'
import TextInput from '@/components/form/input/TextInput'
import TextArea from '@/components/form/textarea/TextareaInput'


interface FormularyProps {
  onSubmit: (data: any) => void;
  fields: {
    type: 'text' | 'email' | 'password' | 'number' | 'date' | 'textarea' | 'submit'
    name: string;
    props: {
      label: string;
    }
  }[]
}

const Formulary: React.FC<FormularyProps> = ({ onSubmit, fields }) => {
  const [data, setData] = useState<any>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-y-4'>
      {fields.map((field, index) => {
        switch (field.type) {
          case 'text':
          case 'email':
          case 'password':
          case 'number':
            return (
              <>
                <TextInput
                  key={index}
                  label={field.props.label}
                  value={data[field.name] || ''}
                  onChange={handleChange}                
                  type={field.type}
                  name={field.name}
                />
              </>
            )
          case 'textarea':
            return (
              <TextArea
                key={index}
                label={field.props.label}
                value={data[field.name] || ''}
                onChange={handleChange}
                name={field.name}
              />
            )
          case 'submit':
            return (
              <Button key={index} type="submit" label='Send' />                
            )
          default:
            return null
        }
      })}
    </form>    
  )
}

export default Formulary