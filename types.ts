import React from 'react';

export interface Service {
  title: string;
  description: string;
  details: string[];
  // Fix: Use React.ReactElement to resolve issue with JSX namespace.
  icon: React.ReactElement;
}

export interface Testimonial {
  quote: string;
  name: string;
  car: string;
}

export interface CarouselImage {
  src: string;
  alt: string;
}
