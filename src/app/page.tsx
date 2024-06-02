"use client"
import React from "react"
import PageRenderer, { Section } from "@/components/pageRenderer/PageRenderer"
import configs from "../../home.json"
import Header from "@/components/header/Header"

export default function Home() {
  const { sections, footer } = configs as { sections: Section[], footer: Section[] }
  const [ isDarkMode, setDarkMode] = React.useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode)
  }

  return (
    <div className={`bg-white dark:bg-slate-900 ${isDarkMode ? 'dark' : ''}`}>
      <Header title="Teles" toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main className="min-h-screen container max-w-[1200px] m-auto py-10 md:py-20 bg-white dark:bg-slate-900">
        <PageRenderer sections={sections} />
      </main>
      <footer className="container max-w-[1200px] m-auto pt-10 pb-5 border-t border-gray-200 dark:border-slate-600">
        <PageRenderer sections={footer} />
      </footer>
    </div>
  )
}
