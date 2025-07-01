"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Bookmark, Share2, ImageIcon } from "lucide-react";

interface HotelBannerProps {
  name: string;
  tagline: string;
  images: string[];
}

export function HotelBanner({ name, tagline, images }: HotelBannerProps) {
  const displayImages = images.slice(0, 5);
  const remainingImagesCount = images.length > 5 ? images.length - 5 : 0;

  return (
    <div className="container mx-auto px-4 py-16 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
          <p className="text-gray-600 mt-1">{tagline}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-gray-700 hover:bg-gray-100"
          >
            <Bookmark className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-gray-700 hover:bg-gray-100"
          >
            <Share2 className="w-5 h-5" />
          </Button>
          <Button className="bg-[#007BFF] text-white rounded-full px-5 py-2 hover:bg-[#0066CC] flex items-center gap-1">
            <span>Reserve</span>
            <span className="text-xl font-bold">&rarr;</span>
          </Button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {/* Large Image */}
        <div className="md:col-span-2 row-span-2 relative h-80 rounded-lg overflow-hidden shadow-md hover:scale-[1.01] transition-transform">
          {images[0] ? (
            <Image
              src={images[0]}
              alt={`${name} main image`}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
              <ImageIcon className="w-8 h-8" />
            </div>
          )}
        </div>

        {/* Small Images */}
        {displayImages.slice(1).map((img, index) => (
          <div
            key={index}
            className="relative h-40 rounded-lg overflow-hidden shadow-sm hover:scale-105 transition-transform"
          >
            {img ? (
              <Image
                src={img}
                alt={`${name} gallery image ${index + 2}`}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                <ImageIcon className="w-6 h-6" />
              </div>
            )}
          </div>
        ))}

        {/* "+ More" Indicator */}
        {remainingImagesCount > 0 && (
          <div className="relative h-40 rounded-lg overflow-hidden flex items-center justify-center bg-gray-200 text-gray-600 font-semibold text-lg cursor-pointer hover:bg-gray-300 transition-all shadow-sm">
            + {remainingImagesCount} More
          </div>
        )}
      </div>
    </div>
  );
}