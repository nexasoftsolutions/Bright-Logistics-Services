'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const defaultImages = [
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=2000"
];

export default function HeroSlideshow({ 
  images = defaultImages, 
  interval = 5000, 
  className = "", 
  useNextImage = false 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (useNextImage) {
    return (
      <>
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            } ${className}`}
          >
            <Image
              src={src}
              alt="Bright Logistics Background"
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
    </>
  );
}
