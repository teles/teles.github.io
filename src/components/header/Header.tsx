"use client"

import React from "react"
import TextToIcon from "../textToIcon/TextToIcon"

interface HeaderProps {
  title: string;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

/**
 * Represents the header component of the application.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the header.
 * @param {Function} props.toggleDarkMode - The function to toggle dark mode.
 * @param {boolean} props.isDarkMode - A boolean indicating whether dark mode is enabled.
 * @returns {JSX.Element} The rendered header component.
 */
const Header: React.FC<HeaderProps> = ({ title, toggleDarkMode, isDarkMode }) => {
  return (
    <header className={`flex px-3 md:py-2 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 sticky top-0 z-10 min-h-11`}>
      <div className="flex items-center w-full">
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