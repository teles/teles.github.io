"use client"

import React from "react"
import { FaHome } from "react-icons/fa"
import TextToIcon from "../textToIcon/TextToIcon"

interface HeaderProps {
  title: string;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, toggleDarkMode, isDarkMode }) => {

  return (
    <header className={`px-2 py-1 md:px-4 md:py-2 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 sticky top-0 z-10`}>
      <div className="container mx-auto px-6 flex items-center">
        <FaHome className="text-base text-gray-800 dark:text-white mr-3" />
        <p className="text-base text-gray-800 dark:text-white font-semibold">{title}</p>
        <span className="inline-block ml-auto cursor-pointer" onClick={() => toggleDarkMode()}>
          {isDarkMode 
            ? <TextToIcon icon="Moon" className="text-white" />
            : <TextToIcon icon="Sun" className="text-yellow-500"/> 
          }
        </span>
      </div>
    </header>
  )
}

export default Header