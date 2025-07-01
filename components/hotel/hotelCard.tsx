"use client";

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Bed, Bath, Layout } from 'lucide-react';
import { useState } from 'react';

interface HotelCardProps {
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

export function HotelCard({ hotel }: HotelCardProps) {
    // State to manage the user's selected rating
    const [currentRating, setCurrentRating] = useState(hotel.rating);
    // State to manage the rating displayed on hover
    const [hoverRating, setHoverRating] = useState(0);

    const handleStarClick = (index: number) => {
        setCurrentRating(index);
        // In a real application, you would send this rating to your backend
        console.log(`User rated ${hotel.name}: ${index} stars`);
    };

    return (
        <Card className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Image section - no direct link here as per new requirement */}
            <div className="relative w-full h-48 bg-gray-200">
                <Image src={hotel.imageUrl} alt={hotel.name} fill style={{ objectFit: 'cover' }} className="rounded-t-lg" />
                {/* Interactive Star Rating Overlay */}
                <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
                    {/* Render 5 stars for rating */}
                    {[1, 2, 3, 4, 5].map((starIndex) => (
                        <span
                            key={starIndex}
                            onMouseEnter={() => setHoverRating(starIndex)}
                            onMouseLeave={() => setHoverRating(0)} // Reset hoverRating on mouse leave
                            onClick={() => handleStarClick(starIndex)}
                            className="cursor-pointer"
                        >
                            <Star
                                className={`h-4 w-4 mr-0.5 transition-colors duration-200
                                    ${(hoverRating || currentRating) >= starIndex ? 'text-yellow-500 fill-current' : 'text-gray-300'}
                                `}
                            />
                        </span>
                    ))}
                    {/* Display the current selected rating next to stars */}
                    <span className="ml-1 text-gray-800">{currentRating.toFixed(1)}</span>
                </div>
            </div>

            <CardContent className="p-4">
                {/* No direct link on title/description as per new requirement */}
                <h3 className="text-lg font-semibold mb-1 truncate">{hotel.name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{hotel.description}</p>

                <div className="flex items-baseline space-x-1 mb-4">
                    <span className="text-xl font-bold text-gray-900">${hotel.price}</span>
                    <span className="text-sm text-gray-500">Per Night</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-700 mb-4">
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
                        <span>{hotel.sqft} sq ft</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button className="w-full">Book Now</Button>
            </CardFooter>
        </Card>
    );
}