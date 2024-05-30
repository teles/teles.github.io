import React from 'react'
import Image from 'next/image'
import Tag from '../tag/Tag'

export interface CardProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }
  title: string;
  icon?: React.ReactNode;
  text: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ image, title, icon, text, tags }) => {
  return (
    <div className="max-w-sm rounded-xl border-gray-200 border overflow-hidden shadow-lg">
      <div className="relative h-48">
        <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-6 pt-6 pb-8 border-t border-gray-200">
        <div className="flex items-center my-2">
          {icon && <div className="mr-2">{icon}</div>}
          <h2 className="font-bold text-xl">{title}</h2>
        </div>
        <p className="text-gray-600 text-base my-4">{text}</p>
        <div className="mt-4 flex flex-wrap gap-y-2">
          {tags.map((tag, index) => (
            <Tag key={index} label={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
