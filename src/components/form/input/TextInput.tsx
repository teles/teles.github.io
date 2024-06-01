import React, { useState, useRef, useEffect } from 'react'

export interface TextInputProps {
  label: string;
  value: string;
  type: "number" | "text" | "email" | "password";
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, value, type = 'text', name, onChange }) => {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (value) {
      setIsFocused(true)
    }
  }, [value])

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => {
    if (!value) {
      setIsFocused(false)
    }
  }

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type={type}
        name={name}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label
        className={`absolute left-4 top-2 text-gray-500 transition-transform duration-200 transform ${
          isFocused || value
            ? 'scale-75 -translate-y-4'
            : 'scale-100 translate-y-0'
        }`}
        onClick={() => inputRef.current?.focus()}
      >
        {label}
      </label>
    </div>
  )
}

export default TextInput
