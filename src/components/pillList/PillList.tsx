import React from 'react'
import Pill, { Level } from '../pill/Pill'

interface PillWithLevel {
  pill: string;
  level?: Level;
}

type PillListProps = {
  pills: PillWithLevel[] | string[];
}

const PillList: React.FC<PillListProps> = ({ pills }) => {
  return (
    <div className='w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4'>
      {pills.map((item, index) => {
        if (typeof item === 'string') {
          return <Pill key={index} label={item} />
        } else {
          const { pill, level } = item
          return <Pill key={index} label={pill} level={level} />
        }
      })}
    </div>
  )
}

export default PillList