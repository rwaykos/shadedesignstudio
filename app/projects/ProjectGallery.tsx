"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type GalleryImage = {
  src: string;
  alt: string;
};

type Props = {
  images: GalleryImage[];
};

export default function ProjectGallery({ images }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? images.length - 1
        : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === images.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="group relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden text-left"
          >

            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />

            <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition">
              <span className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm">
                View Image
              </span>
            </div>

          </button>
        ))}

      </div>


      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >

          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-white/10 text-white text-2xl hover:bg-white/20 transition"
            aria-label="Close image"
          >
            ×
          </button>


          {/* Counter */}
          <div className="absolute top-7 left-7 text-white/70 text-sm">
            {selectedIndex + 1} / {images.length}
          </div>


          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 md:left-8 z-20 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>


          {/* Image */}
          <div
            className="relative w-full max-w-6xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >

            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />

          </div>


          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 md:right-8 z-20 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>

        </div>
      )}
    </>
  );
}