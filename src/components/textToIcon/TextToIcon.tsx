import { FaCode, FaGithub, FaHome, FaLinkedin, FaNpm, FaStar } from 'react-icons/fa'

interface TextToIconProps {
    icon: string;
}

export const iconMap: Record<string, React.ReactNode> = {
    Star: <FaStar />,
    LinkedIn: <FaLinkedin />,
    Home: <FaHome />,
    GitHub: <FaGithub />,
    NPM: <FaNpm />,
    DevTo: <FaCode />,
} as const

const TextToIcon: React.FC<TextToIconProps> = ({ icon }) => {
    return (
        <span>{iconMap[icon]}</span>
    )
}

export default TextToIcon
