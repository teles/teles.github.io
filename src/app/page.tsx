"use client"
import React from "react"
import page from "../content/home.json"
import PageRenderer from "@/components/pageRenderer/PageRenderer"
import { Section } from "@/components/sectionsRenderer/SectionsRenderer"
import { PageContainer } from "@/components/pageRenderer/PageRenderer"

export default function Home() {
  const { sections, footer, container } = page as { sections: Section[], footer: Section[], container: PageContainer }

  return (
    <PageRenderer
      sections={sections}
      footer={footer}
      container={container}
      breadcrumbs={[{title: "Teles", href: "/"}]}
    />
  )
}
