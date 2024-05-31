import React from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

export interface HeroProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }
  markdownText: string;
  callToAction?: {
    text: string;
    link: string;
  }
}

/**
 * Hero component displays an image and markdown text in a flexible layout.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.image - The image object containing the source and alt text.
 * @param {string} props.image.src - The source URL of the image.
 * @param {string} props.image.alt - The alt text of the image.
 * @param {string} props.markdownText - The markdown text to be rendered.
 * @returns {JSX.Element} The rendered Hero component.
 */
const Hero: React.FC<HeroProps> = ({ image, markdownText, callToAction }) => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <div className="relative h-80 rounded-lg">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pl-6">
        <ReactMarkdown className="prose">{markdownText}</ReactMarkdown>
        {callToAction && (
          <a
            href={callToAction.link}
            target='_blank'
            className="mt-6 inline-block px-6 py-2 font-semibold text-white bg-pinkish-500 rounded-full hover:bg-pinkish-600 focus:outline-none focus:ring-2 focus:ring-pinkish-400 focus:ring-opacity-75"
          >{callToAction.text}</a>
        )}
      </div>
    </div>
  )
}

export default Hero
