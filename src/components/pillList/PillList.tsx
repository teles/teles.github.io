import React from 'react'
import Pill from '../pill/Pill'

interface PillListProps {
  pills: string[];  
}

const PillList: React.FC<PillListProps> = ({ pills }) => {
  return (
    <div className='w-full columns-2 md:columns-3 lg:columns-4'>
      {pills.map((pill, index) => (
        <Pill key={index} label={pill} />
      ))}
    </div>
  )
}

export default PillList