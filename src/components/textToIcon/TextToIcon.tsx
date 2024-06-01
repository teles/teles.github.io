import { FaGithub, FaHome, FaLinkedin, FaNpm, FaStar, FaDev } from 'react-icons/fa'

interface TextToIconProps {
  icon: string;
  className?: string;
}

export const iconMap: Record<string, React.ReactNode> = {
    Star: <FaStar />,
    LinkedIn: <FaLinkedin />,
    Home: <FaHome />,
    GitHub: <FaGithub />,
    NPM: <FaNpm />,
    DevTo: <FaDev />,
} as const

const TextToIcon: React.FC<TextToIconProps> = ({ icon, className = '' }) => {
  return (
    <span className={className}>{iconMap[icon]}</span>
  )
}

export default TextToIcon
