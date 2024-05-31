import React from 'react'

export interface PillProps {
  label: string;
  icon?: React.ReactNode;
}

const Pill: React.FC<PillProps> = ({ label, icon }) => {
  return (
    <div className="inline-flex w-full items-center border border-gray-400 text-gray-600 text-sm font-semibold mr-2 p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 mb-4">
      {icon && <span className="mr-2">{icon}</span>}
      <span>{label}</span>
    </div>
  )
}

export default Pill
