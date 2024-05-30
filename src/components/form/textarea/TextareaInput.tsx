import React, { useState, useRef, useEffect } from 'react'

export interface TextareaInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const TextareaInput: React.FC<TextareaInputProps> = ({ label, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

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
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
      />
      <label
        className={`absolute left-4 top-2 text-gray-500 transition-transform duration-200 transform ${
          isFocused || value
            ? 'scale-75 -translate-y-4'
            : 'scale-100 translate-y-0'
        }`}
        onClick={() => textareaRef.current?.focus()}
      >
        {label}
      </label>
    </div>
  )
}

export default TextareaInput
