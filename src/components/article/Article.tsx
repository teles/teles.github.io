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
  };
  content: string;
}

export default function Article({ title, tags, description, image, content }: ArticleProps) {
  return (
    <>
      <h1>{title}</h1>
      <Billboard image={image} />
      <p>{description}</p>
      <TagList tags={tags} />
      <Ruler />
      <Prose text={content} size="base" />
    </>
  )
}