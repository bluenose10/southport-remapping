import React, { useState, useEffect, useCallback } from 'react';
import { CarouselImage } from '../types';

interface ImageCarouselProps {
  images: CarouselImage[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(goToNext, 5000); // Auto-play every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex, goToNext]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto h-96 rounded-lg overflow-hidden shadow-2xl">
      <div className="absolute inset-0 w-full h-full bg-black/30 z-10"></div>
      {/* Slides */}
      <div
        className="w-full h-full whitespace-nowrap transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="inline-block w-full h-full">
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button onClick={goToPrevious} className="absolute top-1/2 left-4 -translate-y-1/2 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>

      {/* Right Arrow */}
      <button onClick={goToNext} className="absolute top-1/2 right-4 -translate-y-1/2 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-brand-red-600' : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;