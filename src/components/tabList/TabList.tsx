"use client"

import React, { useState } from 'react'
import Tab from '../tab/Tab'

interface TabData {
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

export interface TabListProps {
  tabs: TabData[];
}

const TabList: React.FC<TabListProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            title={tab.title}
            icon={tab.icon}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <div className="p-4">
        {tabs[activeTab].content}
      </div>
    </div>
  )
}

export default TabList
