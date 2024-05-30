// components/Card.tsx
import React from 'react';
import Tag from '../tag/Tag';

export interface CardProps {
  imageSrc: string;
  title: string;
  icon?: React.ReactNode;
  text: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ imageSrc, title, icon, text, tags }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <img className="w-full h-48 object-cover rounded-md" src={imageSrc} alt={title} />
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
  );
};

export default Card;
