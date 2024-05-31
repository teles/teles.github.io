import React from 'react'
import Pill from '../pill/Pill'

interface PillListProps {
  pills: string[];
}

const PillList: React.FC<PillListProps> = ({ pills }) => {
  return (
    <div className='w-full' data-test="true">
      {pills.map((pill, index) => (
        <Pill key={index} label={pill} />
      ))}
    </div>
  )
}

export default PillList