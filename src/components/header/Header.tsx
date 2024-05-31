import React from "react"
import { FaHome } from "react-icons/fa"

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="px-2 py-1 md:px-4 md:py-2 bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="container mx-auto px-6 flex items-center">
        <FaHome className="text-base text-gray-800 mr-3" />
        <p className="text-base text-gray-800 font-semibold">{title}</p>
      </div>
    </header>
  )
}

export default Header