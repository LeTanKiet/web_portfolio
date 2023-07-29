import React from 'react';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import { PORTFOLIO_IMAGES } from '../../utils/constants';

function Portfolio() {
  return (
    <main>
      <ImageGallery title="Gallery 1" images={PORTFOLIO_IMAGES} />
      <ImageGallery title="Gallery 2" images={PORTFOLIO_IMAGES} />
      <ImageGallery title="Gallery 3" images={PORTFOLIO_IMAGES} />
    </main>
  );
}

export default Portfolio;
