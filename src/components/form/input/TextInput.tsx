import React, { useState, useRef, useEffect } from 'react'

export interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange }) => {
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
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
