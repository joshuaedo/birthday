import React, { useState, useEffect, useMemo } from 'react';

interface Picture {
  src: string;
}

interface ImageInstance {
  src: string;
  x: number;
  y: number;
  id: number;
  createdAt: number;
}

const MouseGallery: React.FC = () => {
  const [images, setImages] = useState<ImageInstance[]>([]);
  const [nextId, setNextId] = useState(0);

  const pictures: Picture[] = useMemo(
    () => [
      { src: 'one' },
      { src: 'four' },
      { src: 'seventeen' },
      { src: 'nineteen' },
      { src: 'twenty-one' },
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setImages((prevImages) =>
        prevImages.filter((img) => now - img.createdAt < 1000)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const manageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;

    const newImage: ImageInstance = {
      src: pictures[nextId % pictures.length].src,
      x: clientX,
      y: clientY,
      id: nextId,
      createdAt: Date.now(),
    };

    setImages((prevImages) => [...prevImages, newImage]);
    setNextId((prevId) => prevId + 1);
  };

  return (
    <div
      onMouseMove={manageMouseMove}
      className='flex h-screen relative overflow-hidden'
    >
      {images.map(({ src, x, y, id }) => (
        <img
          key={id}
          src={`https://joshuaedo.sirv.com/birthday/images/webp/${src}.webp`}
          alt={src}
          className='object-contain w-[20vw]'
          style={{
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

export { MouseGallery };
