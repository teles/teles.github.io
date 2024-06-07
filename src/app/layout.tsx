"use client"
import { Inter } from "next/font/google"
import "./globals.css"
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'
import { ResuminConfigs } from "@/lib/resumin/ResuminConfigs.types"
import Configs from '@/.resumin.config.json'
import { ThemeProvider, useTheme } from "@/context/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  const gtmId = Configs.gtmId as ResuminConfigs['gtmId']

  useEffect(() => {
    gtmId && TagManager.initialize({ gtmId })
  }, [gtmId])

  return (
    <ThemeProvider>
      <LayoutContent>
        {children}
      </LayoutContent>
    </ThemeProvider>
  )
}

const LayoutContent: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const { theme } = useTheme()

  useEffect(() => {
    const htmlTag = document.documentElement
    htmlTag.classList.remove('light', 'dark')
    htmlTag.classList.add(theme)
  }, [theme])

  return (
    <html lang="en">
      <body className={inter.className + ' bg-white dark:bg-slate-800'}>
        {children}
      </body>
    </html>
  )
}