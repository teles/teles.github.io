import PageRenderer from "@/components/pageRenderer/PageRenderer"
import configs from "../../home.json"
import Header from "@/components/header/Header"

export default function Home() {
  const { sections, footer } = configs
  return (
    <>
      <Header title="Teles" />
      <main className="min-h-screen container max-w-[1200px] m-auto py-10 md:py-20">
        <PageRenderer sections={sections} />
      </main>
      <footer className="container max-w-[1200px] m-auto pt-10 pb-5 border-t border-gray-200">
        <PageRenderer sections={footer} />
      </footer>
    </>
  )
}
