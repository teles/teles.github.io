import { notFound } from 'next/navigation'
import { getContent } from '../../../lib/Content'
import paths from '../../../lib/paths'

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return paths.filter((path) => path.route === 'projects')?.map((path) => {
    return { slug: path.slugs }
  })
}

interface Project {
  title: string;
  tags: string[];
  description: string;
  image: string;
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const filePath = paths.find((path) => path.slugs === params.slug)?.path

    if(!filePath) {
        notFound()
    }

    const { content, frontmatter: project } = getContent<Project>(filePath)
    console.log(content, project)
    return (
        <></>
    )
}
