import type { Metadata } from "next"
import { Inter } from "next/font/google"
import configs from "../content/home.json"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const { meta } = configs
export const metadata: Metadata = meta

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-white dark:bg-slate-800'}>{children}</body>
    </html>
  )
}
