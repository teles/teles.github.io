import PageRenderer from "@/components/pageRenderer/PageRenderer"
import configs from "../../home.json"

export default function Home() {
  const { sections } = configs
  return (
    <main className="min-h-screen container m-auto py-10 md:py-20">
      <PageRenderer sections={sections} />
    </main>
  )
}
