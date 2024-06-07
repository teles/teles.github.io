"use client"

import React from "react"
import TextToIcon from "../textToIcon/TextToIcon"
import { Breadcrumb } from "@/lib/breadcrumbs/Breadcrumbs.types"
import Configs from "@/.resumin.config.json"
import { useTheme } from '@/context/ThemeContext'

interface HeaderProps {
  breadcrumbs?: Breadcrumb[];
}

/**
 * Represents the header component of the application.
 *
 * @component
 * @param {Object[]} breadcrumbs - The breadcrumbs to be displayed in the header.
 * @returns {JSX.Element} The rendered header component.
 */
const Header: React.FC<HeaderProps> = ({ breadcrumbs }) => {
  breadcrumbs = breadcrumbs ? [{ title: Configs.title, href: '/' }, ...breadcrumbs] : [{ title: Configs.title, href: '/' }]
  const { theme, setTheme } = useTheme()
  const toggleDarkMode = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <header className={`flex px-3 md:py-2 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 sticky top-0 z-10 min-h-11`}>
      <div className="flex items-center w-full">
        <ul>
          {breadcrumbs?.map((breadcrumb, index) => (
            <li key={index} className="inline-block">
              <a href={breadcrumb.href} className="text-sm text-gray-800 dark:text-white font-normal hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-1" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">{breadcrumb.title}</span>
                <meta itemProp="position" content={(index + 1).toString()} />
              </a>
              {index < breadcrumbs.length - 1 && <span className="mx-1 text-gray-400 dark:text-slate-500">/</span>}
            </li>
          ))}
        </ul>
        <span className="inline-block ml-auto cursor-pointer" onClick={() => toggleDarkMode()}>
          {theme === 'dark'
            ? <TextToIcon icon="Moon" className="text-white" />
            : <TextToIcon icon="Sun" className="text-yellow-500"/>
          }
        </span>
      </div>
    </header>
  )
}

export default Header