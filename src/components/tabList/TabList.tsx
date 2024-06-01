"use client"

import React, { useState } from 'react'
import Tab from '../tab/Tab'

interface ComponentProps {
  type: string;
  props: Record<string, unknown>;
}

interface TabData {
  title: string;
  icon?: React.ReactNode;
  components: ComponentProps[];
}

export interface TabListProps {
  tabs: TabData[];
}

const componentMap: Record<string, React.ElementType> = {
  Heading: React.lazy(() => import('../heading/Heading')),
  Hero: React.lazy(() => import('../hero/Hero')),
  Tag: React.lazy(() => import('../tag/Tag')),
  Card: React.lazy(() => import('../card/Card')),
  Button: React.lazy(() => import('../button/Button')),
  TabList: React.lazy(() => import('../tabList/TabList')),
  Tab: React.lazy(() => import('../tab/Tab')),
  Pill: React.lazy(() => import('../pill/Pill')),
  PillList: React.lazy(() => import('../pillList/PillList')),
  Box: React.lazy(() => import('../box/Box'))
}

const TabList: React.FC<TabListProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className='w-full'>
      <div className="flex border-b border-gray-200 dark:border-slate-700">
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
        {tabs[activeTab].components.map((component, index) => {
          const Component = componentMap[component.type]
          return <Component key={index} {...component.props} />
        })}
      </div>
    </div>
  )
}

export default TabList
