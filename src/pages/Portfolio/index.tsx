import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import { CAROUSEL_IMAGES } from '../../utils/constants';

function Portfolio() {
  return (
    <main>
      <Carousel headerName='Carousel 1' images={CAROUSEL_IMAGES} />
      <Carousel headerName='Carousel 2' images={CAROUSEL_IMAGES} />
      <Carousel headerName='Carousel 3' images={CAROUSEL_IMAGES} />
    </main>
  );
}

export default Portfolio;
