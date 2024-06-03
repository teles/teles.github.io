"use client"
import React from "react"
import page from "../../home.json"
import PageRenderer from "@/components/pageRenderer/PageRenderer"
import { Section } from "@/components/sectionsRenderer/SectionsRenderer"
import { FaCaretRight, FaCaretDown } from "react-icons/fa"

export default function Home() {
  const { sections, footer } = page as { sections: Section[], footer: Section[] }

  return (
    <div className="flex">
      <aside className="min-w-[240px] bg-gray-50 text-gray-900 text-base p-0 sticky top-0 border-r border-gray-200">
        <ul className="text-sm flex min-h-[44px] border-b border-gray-200 px-4 gap-x-4">
          <li className="font-normal">Metadata</li>
          <li className="font-semibold">Sections</li>
        </ul>
        <form className="">
          <div className="border border-transparent hover:border-blue-400 px-4 py-2">
            <div className="flex items-center mb-2">
            <FaCaretRight />
            <h3 className="text-sm">Hero</h3>
            </div>
            <div className="gap-y-3 flex flex-col ">
            <label className="text-xs font-normal">Image src</label>
            <input type="text" className="w-full border border-gray-200" placeholder="Image src" />
            <label className="text-xs font-normal">Markdown</label>
            <textarea className="w-full border border-gray-200"></textarea>
            <label className="text-xs font-normal">Call to action text</label>
            <input type="text" className="w-full border border-gray-200" placeholder="Image src" />
            <label className="text-xs font-normal">Call to action link</label>
            <input type="text" className="w-full border border-gray-200" placeholder="Image src" />            
            <label className="text-xs font-normal">Call to action icon</label>
            <input type="text" className="w-full border border-gray-200" placeholder="Image src" />            
          </div>            
          </div>
          <div className="border border-transparent hover:border-blue-400 px-4 py-2">
            <div className="flex items-center mb-2">
              <FaCaretRight />
              <h3 className="text-sm">Heading</h3>
            </div>
            <div className="gap-y-3 flex flex-col mt-3">
              <label className="text-xs font-normal">Text</label>
              <input type="text" className="w-full border border-gray-200" placeholder="Image src" />
              <label className="text-xs font-normal">Text</label>
              <select className="w-full border border-gray-200">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>          
          </div>
        </form>
      </aside>
      <PageRenderer sections={sections} footer={footer} />
    </div>
  )
}
