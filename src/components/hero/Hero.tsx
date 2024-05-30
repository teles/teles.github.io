import React from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

export interface HeroProps {
  imageSrc: string;
  markdownText: string;
}

const Hero: React.FC<HeroProps> = ({ imageSrc, markdownText }) => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <Image src={imageSrc} alt="Hero Image" className="w-full h-auto rounded-lg shadow-md" />
      </div>
      <div className="w-full md:w-1/2 md:pl-6">
        <ReactMarkdown className="prose">{markdownText}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Hero
