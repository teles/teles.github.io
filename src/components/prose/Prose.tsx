import ReactMarkdown from 'react-markdown'

interface ProseProps {
  text: string;
  size: 'xs' | 'sm' | 'base' |'md' | 'lg' | 'xl';
}

/**
 * Prose component renders markdown text.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.text - The markdown text to be rendered.
 * @returns {JSX.Element} The rendered  Prose component.
 */
const  Prose: React.FC<ProseProps> = ({ text, size = 'base' }) => {
  const sizeToClasses: Record<ProseProps['size'], string> = {
    xs: 'prose-sm dark:prose-sm-invert',
    base: 'prose dark:prose-invert',
    sm: 'prose-sm dark:prose-sm-invert',
    md: 'prose dark:prose-invert',
    lg: 'prose-lg dark:prose-lg-invert',
    xl: 'prose-xl dark:prose-xl-invert'    
  }
  return (
    <ReactMarkdown className={sizeToClasses[size]}>{text}</ReactMarkdown>
  )
}

export default Prose
