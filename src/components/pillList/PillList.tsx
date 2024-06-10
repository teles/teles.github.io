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
    <ul className='w-full columns-4 min-w-[900px]' itemScope itemType="https://schema.org/ItemList">
      {pills.map((item, index) => {
        if (typeof item === 'string') {
          return (
            <li key={index} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Pill  label={item} />
            </li>
          )
        } else {
          const { pill, level } = item
          return (
            <li key={index} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Pill key={index} label={pill} level={level} />
            </li>
          )
        }
      })}
    </ul>
  )
}

export default PillList