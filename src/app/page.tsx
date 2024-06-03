"use client"
import React from "react"
import page from "../content/home.json"
import PageRenderer from "@/components/pageRenderer/PageRenderer"
import { Section } from "@/components/sectionsRenderer/SectionsRenderer"

export default function Home() {
  const { sections, footer } = page as { sections: Section[], footer: Section[] }

  return (
    <PageRenderer sections={sections} footer={footer} />
  )
}
