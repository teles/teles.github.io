import React from 'react'
import ComponentsMap from '@/lib/ComponentsMap'

interface ComponentProps {
  type: string;
  props: Record<string, unknown>;
}

type ColumnWidth = '1/2' | '1/3' | '2/3' | '1/4' | '3/4' | '1/5' | '2/5' | '3/5' | '4/5' | '1/6' | '5/6' | 'full'

interface Column {
  width?: ColumnWidth;
  components: ComponentProps[];
}

export type Sizes = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface SectionContainer {
  top?: Sizes;
  bottom?: Sizes;
  fullWidth?: boolean;
}

export interface Section {
  container?: SectionContainer;
  columns: Column[];
}

interface SectionsRendererProps {
  sections: Section[];
}

const SectionsRenderer: React.FC<SectionsRendererProps> = ({ sections }) => {
  const widthMap: Record<ColumnWidth, string> = {
    '1/2': 'w-full md:w-1/2 lg:w-1/2 xl:w-1/2',
    '1/3': 'w-full md:w-1/2 lg:w-1/3 xl:w-1/3',
    '2/3': 'w-full md:w-2/3 lg:w-2/3 xl:w-2/3',
    '1/4': 'w-full md:w-1/4 lg:w-1/4 xl:w-1/4',
    '3/4': 'w-full md:w-3/4 lg:w-3/4 xl:w-3/4',
    '1/5': 'w-full md:w-1/5 lg:w-1/5 xl:w-1/5',
    '2/5': 'w-full md:w-2/5 lg:w-2/5 xl:w-2/5',
    '3/5': 'w-full md:w-3/5 lg:w-3/5 xl:w-3/5',
    '4/5': 'w-full md:w-4/5 lg:w-4/5 xl:w-4/5',
    '1/6': 'w-full md:w-1/6 lg:w-1/6 xl:w-1/6',
    '5/6': 'w-full md:w-5/6 lg:w-5/6 xl:w-5/6',
    'full': 'w-full'
  }
  const sizesBottomMap: Record<Sizes, string> = {
    'none': '',
    'xs': 'mb-4 md:mb-8',
    'sm': 'mb-8 md:mb-12',
    'md': 'mb-12 md:mb-16',
    'lg': 'mb-16 md:mb-20',
    'xl': 'mb-20 md:mb-32'
  }

  const sizesTopMap: Record<Sizes, string> = {
    'none': '',
    'xs': 'mt-4 md:mt-8',
    'sm': 'mt-8 md:mt-12',
    'md': 'mt-12 md:mt-16',
    'lg': 'mt-16 md:mt-20',
    'xl': 'mt-18 md:mt-32'
  }

  return (
    <>
      {sections.map((section, sectionIndex) => (
        <section key={sectionIndex} className={`mx-auto ${sizesBottomMap[section?.container?.bottom ?? 'none']} flex flex-col md:flex-row flex-wrap border-box ${sizesTopMap[section?.container?.top ?? 'none']} ${section.container?.fullWidth ? 'w-full' : 'container max-w-[1200px] px-6'}`}>
          {section.columns.map((column, columnIndex) => (
            <div key={columnIndex} className={`${widthMap[column.width ?? 'full']} ${section.container?.fullWidth ? '' : 'pb-4 pr-4 md:pb-6 md:pr-6'} flex flex-col`}>
              {column.components.map((component, componentIndex) => {
                const Component = ComponentsMap[component.type]
                return Component ? (
                  <Component key={componentIndex} {...component.props} />
                ) : null
              })}
            </div>
          ))}
        </section>
      ))}
    </>
  )
}

export default SectionsRenderer
