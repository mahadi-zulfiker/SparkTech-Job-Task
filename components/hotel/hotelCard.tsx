import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Bed, Bath, Layout } from 'lucide-react';

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
    return (
        <Card className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Link href={`/hotel/${hotel.id}`}>
                <div className="relative w-full h-48 bg-gray-200">
                    <Image src={hotel.imageUrl} alt={hotel.name} fill style={{ objectFit: 'cover' }} className="rounded-t-lg" />
                    <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        {hotel.rating}
                    </div>
                </div>
            </Link>
            <CardContent className="p-4">
                <Link href={`/hotel/${hotel.id}`}>
                    <h3 className="text-lg font-semibold mb-1 truncate">{hotel.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{hotel.description}</p>
                </Link>
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