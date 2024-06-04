import Image from 'next/image'
import Box from '../box/Box'

interface BillboardProps {
  image: {
    src: string;
    alt: string;
  };
}

const Billboard: React.FC<BillboardProps> = ({ image }) => {
  return (
    <Box padding={false} centered={true}>
      <Image
        className='max-w-full h-[390px] object-contain'
        src={image.src}
        alt={image.alt}
        width={996}
        height={390}
        objectFit="contain"
      />
    </Box>
  )
}

export default Billboard