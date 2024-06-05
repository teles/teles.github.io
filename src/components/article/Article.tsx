import Billboard from "@/components/billboard/Billboard"
import TagList from "@/components/tagList/TagList"
import Ruler from "@/components/ruler/Ruler"
import Prose from "@/components/prose/Prose"
import InlineLinks from "../inlineLinks/InlineLinks"
// import TabList from "@/components/tabList/TabList"
// import PillList from "@/components/pillList/PillList"
import Heading from "@/components/heading/Heading"

interface ArticleProps {
  title: string;
  tags?: string[];
  description: string;
  image: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
  content: string;
  skills?: Record<string, string[]>;
  links?: {
    href: string;
    source: 'GitHub' | 'NPM' | 'DevTo'
    text: string;
  }[]
}

export default function Article({ title, tags, description, image, skills, content, links }: ArticleProps) {
  console.log({links})
  return (
    <article>
      <h1 className="text-4xl font-bold my-6 dark:text-white">{title}</h1>
      <div className="mb-6">
        <Billboard image={image} />
      </div>
      <p className="text-gray-600 mb-10 dark:text-white">{description}</p>
      {tags && tags.length > 0 && <TagList tags={tags} />}
      <div className="mt-8 mb-2">
        <Ruler />
        {links && <div className="mt-4 pt-4"><InlineLinks title="Resources" links={links} /></div>}
      </div>
      <Prose text={content} size="base" />
      {skills && (
        <>
          <div className="mt-6 mb-10">
            <Ruler />
          </div>
          <Heading text="🧰 Skills" level={3} />
        </>
      )}
    </article>
  )
}