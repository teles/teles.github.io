"use client"
import React from "react"
import SectionsRenderer, { Section } from "@/components/sectionsRenderer/SectionsRenderer"
import Header from "@/components/header/Header"

interface PageRendererProps {
  sections: Section[];
  footer: Section[];
}

const PageRenderer: React.FC<PageRendererProps> = ({ sections, footer }) => {
  const [isDarkMode, setDarkMode] = React.useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode)
  }  

  return (
    <div className={`bg-white dark:bg-slate-900 ${isDarkMode ? 'dark' : ''}`}>
      <Header title="Teles" toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main className="min-h-screen m-auto py-10 md:py-20 bg-white dark:bg-slate-900">
        <SectionsRenderer sections={sections} />
      </main>
      <footer className="container max-w-[1200px] m-auto pt-10 pb-5 border-t border-gray-200 dark:border-slate-600">
        <SectionsRenderer sections={footer} />
      </footer>
    </div>
  )  
}

export default PageRenderer