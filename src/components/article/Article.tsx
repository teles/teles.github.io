import Billboard from "../billboard/Billboard"
import TagList from "../tagList/TagList"
import Ruler from "../ruler/Ruler"
import Prose from "../prose/Prose"

interface ArticleProps {
  title: string;
  tags: string[];
  description: string;
  image: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
  content: string;
}

export default function Article({ title, tags, description, image, content }: ArticleProps) {
  return (
    <>
      <h1 className="text-4xl font-bold my-6 dark:text-white">{title}</h1>
      <div className="mb-6">
        <Billboard image={image} />
      </div>
      <p className="text-gray-600 mb-10 dark:text-white">{description}</p>
      <TagList tags={tags} />
      <div className="mt-6 mb-10">
        <Ruler />
      </div>
      <Prose text={content} size="base" />
    </>
  )
}