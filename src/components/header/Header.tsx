"use client"

import React from "react"
import TextToIcon from "../textToIcon/TextToIcon"
import { Breadcrumb } from "@/lib/breadcrumbs/Breadcrumbs.types"

interface HeaderProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
  breadcrumbs?: Breadcrumb[];
}

/**
 * Represents the header component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.toggleDarkMode - The function to toggle dark mode.
 * @param {boolean} props.isDarkMode - Indicates whether dark mode is enabled.
 * @param {Array} props.breadcrumbs - The array of breadcrumb objects.
 * @returns {JSX.Element} The rendered header component.
 */
const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode, breadcrumbs }) => {
  return (
    <header className={`flex px-3 md:py-2 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 sticky top-0 z-10 min-h-11`}>
      <div className="flex items-center w-full">
        <ul>
          {breadcrumbs?.map((breadcrumb, index) => (
            <li key={index} className="inline-block">
              <a href={breadcrumb.href} className="text-sm text-gray-800 dark:text-white font-normal hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-1">{breadcrumb.title}</a>
              {index < breadcrumbs.length - 1 && <span className="mx-1 text-gray-400 dark:text-slate-500">/</span>}
            </li>
          ))}
        </ul>
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