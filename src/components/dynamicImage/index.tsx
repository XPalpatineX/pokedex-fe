/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';

import { ImageWrapper } from './styles';

interface IDynamicImage {
  imageIndex: number,
  imageSize?: number,
}

const DynamicImage: React.FC<IDynamicImage> = ({ imageIndex, imageSize = 100 }) => {
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
      <img src={imageSrc} alt={`Image ${imageIndex}`} width={imageSize} height={imageSize} />
    </ImageWrapper>
  );
}

export default DynamicImage;
