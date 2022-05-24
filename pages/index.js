import { FallbackImage } from 'components'

export default function Home() {
  const images = [
    {
      src: '/images/earth.jpeg',
      alt: 'Earth card',
    },
    {
      src: '/images/mercury.jpeg',
      alt: 'Mercury card',
    },
    {
      src: '/images/jupiter.jpeg',
      alt: 'Jupiter card',
    },
    {
      src: '/images/mars.jpeg',
      alt: 'Mars card',
    },
    {
      src: '/images/moon.jpeg',
      alt: 'Moon card',
    },
    {
      src: '/images/neptune.jpeg',
      alt: 'Neptune card',
    },
    {
      src: '/images/saturn.jpeg',
      alt: 'Saturn card',
    },
    {
      src: '/images/uranus.jpeg',
      alt: 'Uranus card',
    },
    {
      src: '/images/venus.jpeg',
      alt: 'Venus card',
    },
  ]

  return (
    <div className="bg-zinc-900 p-4">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <div key={image.src} className="relative aspect-square">
            <FallbackImage
              layout="fill"
              objectFit="cover"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
