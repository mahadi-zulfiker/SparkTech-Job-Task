// components/HotelCard.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Bed, Bath, Layout } from "lucide-react";

export interface HotelCardProps {
  hotel: {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    beds: number;
    bathrooms: number;
    sqft: number;
    imageUrl: string;
  };
}

export function HotelCard({ hotel }: { hotel: HotelCardProps["hotel"] }) {
  const [currentRating, setCurrentRating] = useState(hotel.rating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (index: number) => {
    setCurrentRating(index);
    console.log(`User rated ${hotel.name}: ${index} stars`);
  };

  return (
    <Card className="overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
      {/* Image */}
      <div className="relative w-full h-48 sm:h-52 md:h-56 bg-gray-200">
        <Image
          src={hotel.imageUrl}
          alt={hotel.name}
          fill
          className="object-cover rounded-t-xl"
        />
        <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-sm font-medium flex items-center shadow">
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <span
              key={starIndex}
              onMouseEnter={() => setHoverRating(starIndex)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => handleStarClick(starIndex)}
              className="cursor-pointer"
            >
              <Star
                className={`h-4 w-4 mr-0.5 transition-colors duration-200 ${
                  (hoverRating || currentRating) >= starIndex
                    ? "text-yellow-500 fill-current"
                    : "text-gray-300"
                }`}
              />
            </span>
          ))}
          <span className="ml-1 text-gray-800">{currentRating.toFixed(1)}</span>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-4 space-y-2">
        <h3 className="text-lg font-semibold truncate">{hotel.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{hotel.description}</p>

        <div className="flex items-baseline space-x-1">
          <span className="text-xl font-bold text-gray-900">${hotel.price}</span>
          <span className="text-sm text-gray-500">Per Night</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-700">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{hotel.beds} Bedroom</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{hotel.bathrooms} Bathroom</span>
          </div>
          <div className="flex items-center">
            <Layout className="h-4 w-4 mr-1" />
            <span>{hotel.sqft.toLocaleString()} sq ft</span>
          </div>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-blue-500">Book Now</Button>
      </CardFooter>
    </Card>
  );
}
