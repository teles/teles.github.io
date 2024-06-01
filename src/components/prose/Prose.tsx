import ReactMarkdown from 'react-markdown'

interface  ProseProps {
  text: string;    
}

/**
 * Prose component renders markdown text.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.text - The markdown text to be rendered.
 * @returns {JSX.Element} The rendered  Prose component.
 */
const  Prose: React.FC<ProseProps> = ({ text }) => {
  return (
    <ReactMarkdown className="prose dark:prose-invert">{text}</ReactMarkdown>
  )
}

export default Prose
