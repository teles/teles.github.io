import React from 'react'

interface ComponentProps {
  type: string;
  props: Record<string, unknown>;
}

interface Column {
  components: ComponentProps[];
}

interface Section {
  columns: Column[];
}

interface PageRendererProps {
  sections: Section[];
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
    Box: React.lazy(() => import('../box/Box'))
}

const PageRenderer: React.FC<PageRendererProps> = ({ sections }) => {
  return (
    <div>
      {sections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="container mx-auto">
          {section.columns.map((column, columnIndex) => (
            <div key={columnIndex} className="column">
              {column.components.map((component, componentIndex) => {
                const Component = componentMap[component.type]
                return Component ? (
                  <Component key={componentIndex} {...component.props} />
                ) : null
              })}
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}

export default PageRenderer
