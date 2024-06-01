import React from 'react'

export interface BoxProps {
  centered?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ centered, children, className = '' }) => {
  return (
    <div
      className={`${className} border border-gray-300 p-4 rounded-xl ${centered ? 'flex justify-center items-center' : ''}`}
    >
      {children}
    </div>
  )
}

export default Box
