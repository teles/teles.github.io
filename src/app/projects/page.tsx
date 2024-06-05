"use client"
import React from "react"
import page from "../../content/projects.json"
import PageRenderer from "@/components/pageRenderer/PageRenderer"
import { Section } from "@/components/sectionsRenderer/SectionsRenderer"
import { PageContainer } from "@/components/pageRenderer/PageRenderer"

export default function Projects() {
  const { sections, footer, container } = page as { sections: Section[], footer: Section[], container: PageContainer }

  return (
    <PageRenderer
      breadcrumbs={[{ title: "👨‍💻 Projects", href: "/projects" }]}
      sections={sections}
      footer={footer}
      container={container}
    />
  )
}
