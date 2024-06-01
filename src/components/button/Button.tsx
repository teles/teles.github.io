import React from 'react'
import { iconMap } from '../textToIcon/TextToIcon'

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: typeof iconMap[keyof typeof iconMap];
}

const Button: React.FC<ButtonProps> = ({ label, icon, onClick, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {icon && icon}
      {label}
    </button>
  )
}

export default Button
