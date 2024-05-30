import React from 'react'

export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  link?: {
    text: string;
    href: string;
  };
}

const Heading: React.FC<HeadingProps> = ({ level, text, link }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements
  const headingByLevel = [
    'text-4xl font-bold',
    'text-3xl font-semibold',
    'text-2xl font-medium',
    'text-xl font-medium',
    'text-lg font-medium',
    'text-base font-medium',
  ]    
  return (
    <div className="flex items-center">
      <HeadingTag className={'mr-2 '+ headingByLevel[level - 1]}>{text}</HeadingTag>
      {link && (
        <a href={link.href} className="text-blue-500">
          {link.text}
        </a>
      )}
    </div>
  )
}

export default Heading
