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
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <div className="relative h-48">
        <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="py-4">
        <div className="flex items-center mb-2">
          {icon && <div className="mr-2">{icon}</div>}
          <h2 className="font-bold text-xl">{title}</h2>
        </div>
        <p className="text-gray-700 text-base">{text}</p>
        <div className="mt-4 flex flex-wrap">
          {tags.map((tag, index) => (
            <Tag key={index} label={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
