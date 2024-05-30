import React from 'react'

export interface BoxProps {
  centered?: boolean;
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ centered, children }) => {
  return (
    <div
      className={`border border-gray-300 p-4 rounded-md ${centered ? 'flex justify-center items-center' : ''}`}
    >
      {children}
    </div>
  )
}

export default Box
