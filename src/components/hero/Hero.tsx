import React from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

export interface HeroProps {
  // imageSrc: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }
  markdownText: string;
}

const Hero: React.FC<HeroProps> = ({ image, markdownText }) => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <div className="relative h-80 rounded-lg shadow-md overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pl-6">
        <ReactMarkdown className="prose">{markdownText}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Hero
