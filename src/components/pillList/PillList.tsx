import React from 'react'
import Pill from '../pill/Pill'

interface PillListProps {
  pills: string[][];
}

const PillList: React.FC<PillListProps> = ({ pills }) => {
  return (
    <div className='w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4'>
      {pills.map(([pill, level], index) => (
        <Pill key={index} label={pill} level={level ? parseInt(level) as 1 | 2 | 3 | 4 | 5 | undefined : undefined} />
      ))}
    </div>
  )
}

export default PillList