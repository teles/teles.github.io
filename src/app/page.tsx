import PageRenderer from "@/components/pageRenderer/PageRenderer"
import configs from "../../home.json"
import Header from "@/components/header/Header"

export default function Home() {
  const { sections } = configs
  return (
    <>
      <Header title="Teles" />
      <main className="min-h-screen container max-w-[1200px] m-auto py-10 md:py-20">
        <PageRenderer sections={sections} />
      </main>
    </>
  )
}
