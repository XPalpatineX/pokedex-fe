import React, { useState, useEffect, ComponentProps } from 'react';

import { ImageWrapper } from './styles';

interface IDynamicImage {
  imageIndex: number,
}

const DynamicImage: React.FC<IDynamicImage> = ({ imageIndex }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    import(`../../assets/${imageIndex}.png`)
      .then((module) => {
        setImageSrc(module.default);
      })
      .catch((error) => {
        console.error('Error loading image:', error);
      });
  }, [imageIndex]);

  if (!imageSrc) {
    return <div>Loading...</div>;
  }

  return (
    <ImageWrapper>
      <img src={imageSrc} alt={`Image ${imageIndex}`} width={100} height={100} />
    </ImageWrapper>
  );
}

export default DynamicImage;
